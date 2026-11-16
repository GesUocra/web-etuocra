import OfertaEducativa from '@/components/OfertaEducativa'
import { escuela } from '@/lib/escuela'

export const metadata = { title: 'Oferta educativa' }

export default function Oferta() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="titulo text-5xl md:text-7xl text-marca mb-10">Oferta educativa</h1>
      <OfertaEducativa />
      <h2 className="titulo text-3xl text-marca mt-14 mb-5">Otras propuestas</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {escuela.otras.map((o) => (
          <div key={o.nombre} className="bg-fondo border-l-4 border-rojo p-5">
            <h3 className="font-bold text-marca">{o.nombre}</h3>
            <p className="text-sm text-gray-600">{o.desc}</p>
            {o.nombre === 'Formación Profesional' && <a href="/formacion-profesional" className="text-sm font-bold text-electrico">Ver los cursos →</a>}
          </div>
        ))}
      </div>
    </section>
  )
}
