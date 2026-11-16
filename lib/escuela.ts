// ✏️ Todos los datos de la escuela se editan acá. Lo que queda vacío ('') no se muestra.
export const escuela = {
  nombre: 'Escuela Técnica U.O.C.R.A. “Islas Malvinas”',
  ciudad: 'Corrientes Capital',
  barrio: 'Codepro',
  direccion: 'Neuquén N° 1470',
  telefono: '0379-4447516',
  email: '1801423-00@secundaria.mec.gob.ar',
  cue: '180142300',
  norma: 'Dto. 2862/83',
  facebook: '',
  instagram: 'https://www.instagram.com/escuela_uocra',
  campus: '', // link del Campus virtual (alumnos y docentes)
  gestion: '', // link de Gestión escolar (directivos y secretaría)
  consigna: 'Formamos hoy el futuro de mañana',
  lema: 'Formamos personas. Brindamos oportunidades. Transformamos realidades.',
  intro: 'Educación técnica con representación, compromiso y futuro: 40 años formando técnicos en Electricidad e Informática en el corazón de Codepro.',
  entorno: 'La escuela está emplazada entre los barrios 300 Viviendas, Luz y Fuerza y Codepro, con acceso a líneas de transporte urbano desde distintos puntos de la ciudad. El edificio pertenece al Sindicato de la Construcción (UOCRA) y comparte espacio con el Instituto Superior de Formación Técnica UOCRA, una institución independiente.',
  historia: [
    'Todo empezó el 2 de julio de 1984, cuando la Unión Obrera de la Construcción (UOCRA) abrió en Corrientes el Centro Privado de Fábrica N° 6 “Islas Malvinas”, pensado para que jóvenes y adultos se prepararan o perfeccionaran, sobre todo, en oficios de la construcción. Los primeros docentes fueron instructores formados por el propio gremio.',
    'En 1986 pasó a ser el Centro Nacional de Formación Profesional N° 2 CONET-UOCRA y durante más de una década funcionó en los tres turnos, con cursos como instalaciones eléctricas, plomería, albañilería, soldadura, dibujo técnico, corte y confección o panadería. Con el traspaso de las escuelas nacionales a las provincias (1993), la institución quedó bajo el Ministerio de Educación de Corrientes.',
    'Desde 1998 incorporó el tercer ciclo de la EGB y luego el Polimodal; en 2001 se creó el Instituto Superior de Formación Técnica en convenio con la UOCRA; y desde 2006, con la Educación Técnico Profesional, la escuela se consolidó como secundaria técnica con las especialidades de Electricidad e Informática. Desde 2010 lleva su nombre actual.',
  ],
  tecnicaturas: [
    {
      nombre: 'Electricidad', slogan: 'Energía que transforma el futuro', tono: 'acento',
      desc: 'Formación sólida en instalaciones eléctricas, mantenimiento y automatización, con práctica en taller.',
      areas: ['Instalaciones eléctricas', 'Máquinas eléctricas', 'Automatización y control', 'Energías renovables', 'Seguridad eléctrica'],
    },
    {
      nombre: 'Informática Profesional y Personal', slogan: 'Código que crea oportunidades', tono: 'electrico',
      desc: 'Desarrollo de competencias informáticas para resolver problemas, gestionar información e innovar con tecnología.',
      areas: ['Programación', 'Sistemas operativos', 'Hardware y mantenimiento', 'Redes y conectividad', 'Bases de datos'],
    },
  ],
  otras: [
    { nombre: 'Ciclo Básico de la ETP', desc: 'Primer ciclo de la Educación Técnico Profesional, Sector Industrial, con formación de taller.' },
    { nombre: 'Formación Profesional', desc: 'Cursos de oficio gratuitos y abiertos a la comunidad, en turno tarde y noche.' },
  ],
  fp: {
    intro: 'Cursos de oficio gratuitos y abiertos a la comunidad, para quienes quieren capacitarse para el trabajo. Hay cursos cuatrimestrales y anuales.',
    turnos: ['Turno tarde: 14:30 a 18:00', 'Turno noche: 19:30 a 22:50'],
    requisitos: ['Ser mayor de 18 años', 'DNI', 'Primario completo'],
    documentacion: ['DNI y fotocopia de ambas caras', 'Constancia de CUIL', 'Analítico y fotocopia'],
    inscripcion: 'Según la duración de cada curso, la inscripción se realiza en febrero y/o noviembre, y en diciembre para el ciclo lectivo siguiente. Consultar en la escuela.',
    areas: [
      { t: 'Electricidad', c: ['Auxiliar en Instalaciones Eléctricas Domiciliarias', 'Montador/a Electricista Domiciliario/a', 'Electricidad de Inmuebles', 'Electricidad Industrial'] },
      { t: 'Construcción', c: ['Albañilería', 'Auxiliar en Construcciones', 'Auxiliar en Construcción en Seco', 'Pintura de Obra', 'Armador/a y Montador/a de Componentes Metálicos Livianos'] },
      { t: 'Gas y sanitarias', c: ['Auxiliar en Instalaciones Sanitarias y de Gas Domiciliaria', 'Montador/a de Instalaciones Sanitarias Domiciliarias', 'Montador/a de Instalaciones Domiciliarias de Gas', 'Gasista de Unidades Unifuncionales', 'Gasista Domiciliario/a', 'Instalación de Gas'] },
      { t: 'Metalmecánica y oficios', c: ['Soldador/a Básico/a', 'Herrería', 'Carpintería de Banco', 'Instalación y Reparación de Equipos de Climatización'] },
      { t: 'Informática', c: ['Operador/a de Informática para Administración y Gestión', 'Reparación de PC'] },
    ],
  },
  valores: ['Compromiso', 'Inclusión', 'Formación técnica', 'Oportunidades', 'Desarrollo comunitario'],
  hitos: [
    { anio: '1984', t: 'Nace el Centro de Fábrica N° 6', d: 'La UOCRA abre en Corrientes un centro de formación en oficios de la construcción.' },
    { anio: '1986', t: 'Centro Nacional de FP N° 2', d: 'Convenio UOCRA - CONET; funciona en tres turnos para jóvenes y adultos.' },
    { anio: '1993', t: 'Pasa a la provincia', d: 'Transferencia al Ministerio de Educación de Corrientes.' },
    { anio: '1998', t: 'Llegan EGB 3 y Polimodal', d: 'La escuela suma el nivel secundario en la transformación educativa.' },
    { anio: '2001', t: 'Instituto Superior de Formación Técnica', d: 'Convenio entre el Ministerio y la UOCRA (Decreto 1328/01).' },
    { anio: '2006', t: 'Educación Técnico Profesional', d: 'Primer año de la ETP; el nivel superior se separa como institución independiente.' },
    { anio: '2010', t: 'Escuela Técnica UOCRA “Islas Malvinas”', d: 'Nombre actual (Decreto 2419/10).' },
    { anio: '2011', t: 'Electricidad e Informática', d: 'Se aprueban las tecnicaturas secundarias de ambas especialidades.' },
  ],
}
