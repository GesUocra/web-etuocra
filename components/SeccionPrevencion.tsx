const temas = [
  { t: 'Bullying y ciberbullying', d: 'Línea de Convivencia Escolar: 0800-222-1197 · Ciberacoso y violencia digital: 137 (24 h)' },
  { t: 'Juego online y apuestas', d: 'SEDRONAR, línea gratuita y anónima: 141' },
  { t: 'Ambiente', d: 'Defensa Civil: 103 · Bomberos: 100 · Línea FUEGO: 0800-888-38346' },
]

export default function SeccionPrevencion() {
  return (
    <section className="bg-fondo border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black uppercase tracking-tight text-marca mb-8">Prevención activa</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {temas.map((x) => (
            <div key={x.t} className="bg-white border border-gray-200 p-5">
              <h3 className="font-bold text-marca mb-2">{x.t}</h3>
              <p className="text-sm text-gray-600">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
