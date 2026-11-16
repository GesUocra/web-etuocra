import CarruselNovedades from '@/components/CarruselNovedades'
import OfertaEducativa from '@/components/OfertaEducativa'
import SeccionPrevencion from '@/components/SeccionPrevencion'
import Hitos from '@/components/Hitos'
import { obtenerNovedades } from '@/lib/contenidos'
import { escuela } from '@/lib/escuela'

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="titulo text-xl text-rojo mb-2">{children}</p>
}

export default async function Home() {
  const novedades = (await obtenerNovedades()).slice(0, 3)
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${escuela.direccion}, ${escuela.ciudad}`)}`
  return (
    <>
      {/* Apertura */}
      <section className="relative bg-marca-osc circuito overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
          <div className="py-16 lg:py-24 relative z-10">
            <p className="inline-block bg-acento text-white titulo text-lg px-3 py-1 mb-5">1984 — 2024 · 40 años</p>
            <h1 className="titulo text-5xl md:text-7xl text-white mb-4">
              Escuela Técnica<br />U.O.C.R.A.<br /><span className="text-electrico">“Islas Malvinas”</span>
            </h1>
            <p className="titulo text-2xl md:text-3xl text-acento mb-5">{escuela.consigna}</p>
            <p className="font-academica italic text-lg text-blue-100 max-w-xl mb-8">{escuela.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href="/oferta-educativa" className="titulo bg-acento text-white text-lg px-6 py-3 hover:bg-acento-osc transition">Elegí tu camino</a>
              <a href="/contacto" className="titulo border-2 border-white text-white text-lg px-6 py-3 hover:bg-white hover:text-marca transition">Inscripción y contacto</a>
            </div>
          </div>
          <div className="relative h-72 lg:h-[30rem] lg:-mr-[calc((100vw-72rem)/2)]">
            <img src="/fachada.jpg" alt="Frente de la Escuela Técnica UOCRA Islas Malvinas" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }} />
            <div className="absolute inset-y-0 left-0 w-3 bg-acento hidden lg:block" style={{ transform: 'skewX(-9deg)', left: '3%' }} />
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section className="bg-acento text-white">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <p><span className="titulo text-3xl">40 años</span><br />de enseñanza técnica y profesional</p>
          <p><span className="titulo text-3xl">2 tecnicaturas</span><br />Electricidad e Informática</p>
          <p><span className="titulo text-3xl">Formación profesional</span><br />para jóvenes y adultos</p>
        </div>
      </section>

      {/* Tecnicaturas */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <Kicker>Oferta educativa</Kicker>
        <h2 className="titulo text-4xl md:text-6xl text-marca mb-3">Dos caminos, un futuro técnico</h2>
        <p className="text-gray-600 max-w-2xl mb-10">Elegí la especialidad que mejor se ajuste a tus intereses: las dos combinan teoría, taller y proyectos reales.</p>
        <OfertaEducativa />
      </section>

      {/* Formación Profesional */}
      <section className="bg-marca-osc circuito text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <p className="titulo text-xl text-acento mb-2">Formación Profesional</p>
            <h2 className="titulo text-4xl md:text-5xl mb-3">Aprendé un oficio, gratis</h2>
            <p className="text-blue-100/90 max-w-xl">{escuela.fp.intro}</p>
          </div>
          <div>
            <ul className="text-blue-100 space-y-1 mb-5">{escuela.fp.turnos.map((t) => <li key={t}>{t}</li>)}</ul>
            <a href="/formacion-profesional" className="titulo text-lg bg-acento text-white px-6 py-3 inline-block hover:bg-acento-osc transition">Ver los cursos</a>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-fondo border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {escuela.valores.map((v) => (
            <p key={v} className="titulo text-xl md:text-2xl text-marca border-b-4 border-rojo pb-2">{v}</p>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <Kicker>Nuestra historia</Kicker>
          <h2 className="titulo text-4xl md:text-6xl text-marca mb-5">40 años en el desafío de la enseñanza técnica</h2>
          <p className="text-gray-600 mb-6">{escuela.historia[0]}</p>
          <a href="/institucional" className="titulo text-lg text-electrico hover:text-marca">Leer la historia completa →</a>
        </div>
        <Hitos />
      </section>

      {/* Novedades */}
      <section className="bg-fondo border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Kicker>Actualidad</Kicker>
          <div className="flex items-end justify-between mb-8">
            <h2 className="titulo text-4xl md:text-5xl text-marca">Novedades</h2>
            <a href="/novedades" className="hidden md:block titulo text-lg text-electrico hover:text-marca">Ver todas →</a>
          </div>
          <CarruselNovedades novedades={novedades} />
        </div>
      </section>

      <SeccionPrevencion />

      {/* Cierre */}
      <section className="bg-marca text-white circuito">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div>
            <h2 className="titulo text-4xl md:text-6xl mb-5">Elegí tu camino.<br /><span className="text-acento">Construí tu futuro.</span></h2>
            <p className="font-academica italic text-blue-200 text-lg max-w-xl">{escuela.lema}</p>
          </div>
          <div className="space-y-1 text-blue-100">
            <p className="titulo text-2xl text-white">{escuela.direccion}</p>
            <p>{escuela.barrio}, {escuela.ciudad}</p>
            {escuela.telefono && <p>Tel. {escuela.telefono}</p>}
            <a href={mapa} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 titulo text-lg bg-acento text-white px-6 py-3 hover:bg-acento-osc transition">Cómo llegar</a>
          </div>
        </div>
      </section>
    </>
  )
}
