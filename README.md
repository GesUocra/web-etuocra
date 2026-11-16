# Sitio de la Escuela Técnica UOCRA Islas Malvinas

1. `npm install` y `npm run dev` (http://localhost:3000)
2. Datos de la escuela (dirección, teléfono, redes, historia, tecnicaturas): `lib/escuela.ts`
3. Novedades: copiar `plantilla-novedades.csv` a una hoja de Google, publicarla como CSV y pegar el link en `.env.local` (`NOVEDADES_CSV_URL`, ver `.env.example`). Se muestran las filas con `publicar = si`.
4. Colores: `app/globals.css`. Escudo y foto del frente: `public/escudo.png` y `public/fachada.jpg` (reemplazables por archivos de mejor calidad con el mismo nombre).
5. Publicar: subir a Vercel y cargar `NOVEDADES_CSV_URL` en sus variables de entorno.
