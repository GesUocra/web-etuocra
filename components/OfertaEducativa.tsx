import { escuela } from '@/lib/escuela'

export default function OfertaEducativa() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {escuela.tecnicaturas.map((t) => {
        const amarillo = t.tono === 'acento'
        return (
          <article key={t.nombre} className={`relative overflow-hidden p-7 text-white bg-marca-osc border-t-8 ${amarillo ? 'border-rayo' : 'border-electrico'}`}>
            <div className="circuito absolute inset-0 pointer-events-none" />
            <div className="relative">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${amarillo ? 'text-rayo' : 'text-electrico'}`}>Tecnicatura en</p>
              <h3 className="titulo text-4xl md:text-5xl mt-1 mb-2">{t.nombre}</h3>
              <p className={`font-academica italic mb-4 ${amarillo ? 'text-rayo' : 'text-sky-300'}`}>{t.slogan}</p>
              <p className="text-blue-100/90 mb-5">{t.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {t.areas.map((a) => (
                  <li key={a} className="text-xs font-bold uppercase tracking-wide border border-white/25 px-2.5 py-1">{a}</li>
                ))}
              </ul>
            </div>
          </article>
        )
      })}
    </div>
  )
}
