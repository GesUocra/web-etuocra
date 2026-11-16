'use client'

import { useState } from 'react'
import Link from 'next/link'
import { escuela } from '@/lib/escuela'

const menu = [
  { href: '/', label: 'Inicio' },
  { href: '/institucional', label: 'Institucional' },
  { href: '/oferta-educativa', label: 'Oferta' },
  { href: '/formacion-profesional', label: 'Formación Profesional' },
  { href: '/novedades', label: 'Novedades' },
  { href: '/contacto', label: 'Contacto' },
]

function Acceso({ label, sub, href }: { label: string; sub: string; href: string }) {
  const c = (
    <>
      <span className="block text-sm font-extrabold uppercase tracking-widest text-white">{label}</span>
      <span className="block text-xs text-sky-300">{sub}</span>
    </>
  )
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="block text-center leading-tight hover:opacity-80 transition">{c}</a>
    : <span className="block text-center leading-tight opacity-70 cursor-default" title="Próximamente">{c}</span>
}

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  return (
    <header className="bg-marca-osc text-white sticky top-0 z-50 border-b-4 border-acento">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/escudo.png" alt="Escudo de la escuela" className="h-14 w-auto bg-white rounded-md p-0.5" />
            <span className="leading-none">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">Escuela Técnica</span>
              <span className="titulo block text-xl md:text-2xl text-white">U.O.C.R.A. <span className="text-acento">“Islas Malvinas”</span></span>
            </span>
          </Link>
          <nav className="hidden xl:flex items-center gap-6">
            {menu.map((m) => (
              <Link key={m.href} href={m.href} className="titulo text-base not-italic tracking-wide text-blue-100 hover:text-acento transition">{m.label}</Link>
            ))}
            <span className="w-px h-9 bg-white/20" />
            <Acceso label="Campus virtual" sub="Alumnos y docentes" href={escuela.campus} />
            <Acceso label="Gestión escolar" sub="Directivos y secretaría" href={escuela.gestion} />
          </nav>
          <button className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setAbierto(!abierto)} aria-label="Abrir menú">
            <span className={`block h-0.5 w-6 bg-white transition ${abierto ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${abierto ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${abierto ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
        {abierto && (
          <nav className="xl:hidden border-t border-white/10 py-4 flex flex-col gap-3">
            {menu.map((m) => (
              <Link key={m.href} href={m.href} onClick={() => setAbierto(false)} className="titulo text-lg text-blue-100 hover:text-acento">{m.label}</Link>
            ))}
            <div className="flex gap-8 pt-2 border-t border-white/10">
              <Acceso label="Campus virtual" sub="Alumnos y docentes" href={escuela.campus} />
              <Acceso label="Gestión escolar" sub="Directivos y secretaría" href={escuela.gestion} />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
