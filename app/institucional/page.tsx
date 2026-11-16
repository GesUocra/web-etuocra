import Hitos from '@/components/Hitos'
import { escuela } from '@/lib/escuela'

export const metadata = { title: 'Institucional' }

export default function Institucional() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <p className="titulo text-xl text-rojo mb-2">1984 — 2024</p>
      <h1 className="titulo text-5xl md:text-7xl text-marca mb-8">Nuestra historia</h1>
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {escuela.historia.map((p, i) => <p key={i}>{p}</p>)}
          <h2 className="titulo text-3xl text-marca pt-4">Dónde estamos</h2>
          <p>{escuela.entorno}</p>
          <p className="text-sm text-gray-500">CUE {escuela.cue} · Norma legal de creación: {escuela.norma}</p>
        </div>
        <Hitos />
      </div>
    </section>
  )
}
