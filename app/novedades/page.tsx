import CarruselNovedades from '@/components/CarruselNovedades'
import { obtenerNovedades } from '@/lib/contenidos'

export const metadata = { title: 'Novedades' }

export default async function Novedades() {
  const novedades = await obtenerNovedades()
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-marca mb-10">Novedades</h1>
      <CarruselNovedades novedades={novedades} />
    </section>
  )
}
