import { escuela } from '@/lib/escuela'

export default function Hitos() {
  return (
    <ol className="relative border-l-4 border-acento ml-3 space-y-7">
      {escuela.hitos.map((h) => (
        <li key={h.anio} className="pl-6 relative">
          <span className="absolute -left-[13px] top-1 w-5 h-5 rounded-full bg-white border-4 border-marca" />
          <p className="titulo text-3xl text-rojo">{h.anio}</p>
          <p className="font-bold text-marca">{h.t}</p>
          <p className="text-sm text-gray-600">{h.d}</p>
        </li>
      ))}
    </ol>
  )
}
