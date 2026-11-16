export type Novedad = { categoria: string; fecha: string; titulo: string; texto: string; imagen: string; link?: string }

// La hoja de Google Sheets (publicada como CSV) se configura en .env.local: NOVEDADES_CSV_URL=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv
const CSV_URL = process.env.NOVEDADES_CSV_URL || ''

function limpiar(t: string, max: number): string {
  return t.replace(/https?:\/\/\S+/g, ' ').replace(/#/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max)
}
function formatearFecha(f: string): string {
  const d = new Date(f)
  if (isNaN(d.getTime())) return limpiar(f, 30)
  return d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}
const normalizar = (h: string) => h.replace(/\uFEFF/g, '').trim().toLowerCase()

function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = [], cur = '', q = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (q) {
      if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++ } else q = false } else cur += ch
    } else if (ch === '"') q = true
    else if (ch === ',') { row.push(cur); cur = '' }
    else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = '' }
    else if (ch !== '\r') cur += ch
  }
  if (cur !== '' || row.length) { row.push(cur); rows.push(row) }
  return rows
}

export async function obtenerNovedades(): Promise<Novedad[]> {
  if (!CSV_URL) return []
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 300 } })
    if (!res.ok) return []
    const [cab, ...datos] = parseCSV(await res.text())
    const h = (cab || []).map(normalizar)
    const i = (n: string) => h.indexOf(n)
    const [iF, iC, iT, iX, iI, iL, iP] = ['fecha', 'categoria', 'titulo', 'texto', 'imagen', 'link', 'publicar'].map(i)
    return datos
      .filter((f) => (f[iP] || '').trim().toLowerCase() === 'si')
      .map((f) => ({
        categoria: limpiar(f[iC] || 'Novedades', 30) || 'Novedades',
        fecha: formatearFecha(f[iF] || ''),
        titulo: limpiar(f[iT] || '', 110),
        texto: limpiar(f[iX] || f[iT] || '', 300),
        imagen: (f[iI] || '').trim(),
        link: (f[iL] || '').trim() || undefined,
      }))
      .filter((n) => n.titulo !== '')
  } catch {
    return []
  }
}
