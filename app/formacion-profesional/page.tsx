import { escuela } from '@/lib/escuela'

export const metadata = { title: 'Formación Profesional' }

export default function FormacionProfesional() {
  const fp = escuela.fp
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <p className="titulo text-xl text-rojo mb-2">Escuela pública · Gratuita</p>
      <h1 className="titulo text-5xl md:text-7xl text-marca mb-4">Formación Profesional</h1>
      <p className="text-gray-600 max-w-2xl mb-10">{fp.intro}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {fp.areas.map((a) => (
          <div key={a.t} className="bg-fondo border-t-4 border-acento p-5">
            <h2 className="titulo text-2xl text-marca mb-3">{a.t}</h2>
            <ul className="space-y-1 text-sm text-gray-700">{a.c.map((c) => <li key={c}>• {c}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-blue-100 p-5">
          <h3 className="titulo text-2xl text-marca mb-2">Requisitos</h3>
          <ul className="text-sm text-gray-700 space-y-1">{fp.requisitos.map((r) => <li key={r}>• {r}</li>)}</ul>
        </div>
        <div className="border border-blue-100 p-5">
          <h3 className="titulo text-2xl text-marca mb-2">Documentación</h3>
          <ul className="text-sm text-gray-700 space-y-1">{fp.documentacion.map((r) => <li key={r}>• {r}</li>)}</ul>
        </div>
        <div className="border border-blue-100 p-5">
          <h3 className="titulo text-2xl text-marca mb-2">Horarios e inscripción</h3>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">{fp.turnos.map((r) => <li key={r}>• {r}</li>)}</ul>
          <p className="text-sm text-gray-600">{fp.inscripcion}</p>
        </div>
      </div>
    </section>
  )
}
