import type { Novedad } from '@/lib/contenidos'

export default function CarruselNovedades({ novedades }: { novedades: Novedad[] }) {
  if (!novedades.length) return <p className="text-gray-500">Pronto vas a encontrar acá las novedades de la escuela.</p>
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {novedades.map((n) => {
        const cuerpo = (
          <>
            {n.imagen && <img src={n.imagen} alt="" className="w-full h-44 object-cover" />}
            <div className="p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-rojo mb-1">{n.categoria} · {n.fecha}</p>
              <h3 className="font-bold text-marca mb-2">{n.titulo}</h3>
              <p className="text-sm text-gray-600">{n.texto}</p>
            </div>
          </>
        )
        const cls = 'block border border-gray-200 bg-white hover:shadow-md transition'
        return n.link
          ? <a key={n.titulo + n.fecha} href={n.link} target="_blank" rel="noopener noreferrer" className={cls}>{cuerpo}</a>
          : <article key={n.titulo + n.fecha} className={cls}>{cuerpo}</article>
      })}
    </div>
  )
}
