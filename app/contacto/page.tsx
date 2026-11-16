import { escuela } from '@/lib/escuela'

export const metadata = { title: 'Contacto e inscripción' }

export default function Contacto() {
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${escuela.direccion}, ${escuela.ciudad}`)}`
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="titulo text-5xl md:text-7xl text-marca mb-8">Contacto e inscripción</h1>
      <ul className="space-y-3 text-gray-700 text-lg">
        <li><b>Dirección:</b> {escuela.direccion}, {escuela.barrio}, {escuela.ciudad}</li>
        {escuela.telefono && <li><b>Teléfono:</b> {escuela.telefono}</li>}
        {escuela.email && <li><b>Correo:</b> <a className="text-electrico underline" href={`mailto:${escuela.email}`}>{escuela.email}</a></li>}
        {escuela.instagram && <li><b>Instagram:</b> <a className="text-electrico underline" href={escuela.instagram} target="_blank" rel="noopener noreferrer">@escuela_uocra</a></li>}
      </ul>
      <a href={mapa} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 titulo text-lg bg-acento text-white px-6 py-3 hover:bg-acento-osc transition">Cómo llegar</a>
    </section>
  )
}
