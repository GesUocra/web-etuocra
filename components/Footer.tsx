import { escuela } from '@/lib/escuela'

export default function Footer() {
  return (
    <footer className="bg-marca-osc circuito text-blue-100/80 text-sm border-t-4 border-acento">
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <img src="/escudo.png" alt="" className="h-16 w-auto bg-white rounded-md p-0.5 mb-4" />
          <p className="titulo text-2xl text-white mb-2">{escuela.nombre}</p>
          <p className="text-xs">CUE {escuela.cue} · Norma legal de creación: {escuela.norma}</p>
        </div>
        <div>
          <p className="titulo text-xl text-acento mb-3">Contacto</p>
          <ul className="space-y-2">
            <li>{escuela.direccion}, {escuela.barrio}, {escuela.ciudad}</li>
            {escuela.telefono && <li>Tel. {escuela.telefono}</li>}
            {escuela.email && <li>{escuela.email}</li>}
          </ul>
        </div>
        <div>
          <p className="titulo text-xl text-acento mb-3">Seguinos</p>
          <ul className="space-y-2">
            {escuela.instagram && <li><a className="hover:text-white" href={escuela.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>}
            {escuela.facebook && <li><a className="hover:text-white" href={escuela.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>}
            {escuela.campus && <li><a className="hover:text-white" href={escuela.campus}>Campus virtual</a></li>}
          </ul>
          <p className="mt-4 text-xs text-blue-100/60">Institución dependiente de la Dirección General de Educación Técnico Profesional — Ministerio de Educación de la Provincia de Corrientes.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {escuela.nombre}</div>
    </footer>
  )
}
