export const PHONE_DISPLAY = '096 496 499';
export const PHONE_E164 = '59896496499';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=SUP+Sup-surf+%26+Surf+school+La+Barra+Maldonado&query_place_id=ChIJmwIOC1QDdZUR6VS8UCxal0Q';
export const MAP_EMBED = 'https://www.google.com/maps?q=-34.9145,-54.8580&z=14&output=embed';
export const DIRECT_MESSAGE =
  'Hola Danishka, vi la web de SUP Sup-Surf & Surf School y quería consultar disponibilidad en La Barra.';

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${PHONE_E164}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export interface NavItem {
  id: string;
  label: string;
  long: string;
  num: string;
}

export const NAV: NavItem[] = [
  { id: 'modalidades', label: 'Modalidades', long: 'Modalidades', num: '01' },
  { id: 'escuela', label: 'La Escuela', long: 'La Escuela', num: '02' },
  { id: 'galeria', label: 'Galería', long: 'Galería & Entorno', num: '03' },
  { id: 'proceso', label: 'Proceso', long: 'Cómo salimos al agua', num: '04' },
  { id: 'resenas', label: 'Reseñas', long: 'Reseñas 5,0 ★', num: '05' },
  { id: 'ubicacion', label: 'Ubicación', long: 'Ubicación en La Barra', num: '06' },
  { id: 'faq', label: 'FAQ', long: 'Preguntas frecuentes', num: '07' },
];

export const MARQUEE = [
  'La Barra · Punta del Este · Maldonado',
  'Temporada y salidas todo el año · Coordinación previa',
  '★ 5,0 en Google Maps · 11 reseñas',
  'Travesías en SUP',
  'Clases de Surf en el Mar',
  'SUP Surf en las Olas',
  'Equipos y Neoprene Incluidos',
  'Salidas al Atardecer',
];

export interface TrustItem {
  value: string;
  unit?: string;
  stars?: boolean;
  label: string;
}

export const TRUST: TrustItem[] = [
  {
    value: '5,0',
    stars: true,
    label: 'Calificación perfecta en Google Maps sobre 11 reseñas verificadas.',
  },
  {
    value: '2',
    unit: 'Escenarios',
    label: 'Aguas tranquilas en La Barra para travesías en SUP y playas oceánicas para surf.',
  },
  {
    value: '100%',
    unit: 'Equipado',
    label: 'Tablas estables de escuela, remos, pita de seguridad, chaleco y traje de neoprene.',
  },
  {
    value: '1 a 1',
    unit: 'Coordinación',
    label: 'Atención directa por WhatsApp para elegir el mejor horario según marea y viento.',
  },
];

export interface Modality {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  imageAlt: string;
  cardTitle: string;
  badge: string;
  description: string;
  items: string[];
  cta: string;
  service: string;
}

export const MODALITIES: Modality[] = [
  {
    id: 'sup',
    num: '01',
    title: 'Travesías guiadas en SUP',
    subtitle: 'Aguas calmas · Naturaleza, técnica de remada y paseos al atardecer',
    tag: '01 · Agua calma & Travesías',
    image: 'img/modalidades.jpg',
    imageAlt: 'Collage de salidas en SUP y surf en La Barra',
    cardTitle: 'Travesías en Stand Up Paddle',
    badge: 'Sin experiencia previa',
    description:
      'Ideal para quienes buscan remar de pie con total estabilidad, conectar con el paisaje costero del Arroyo Maldonado y aprender la postura correcta desde los primeros minutos.',
    items: [
      'Tablas SUP de gran volumen y estabilidad',
      'Remo ajustable a tu altura y leash',
      'Chaleco salvavidas y charla inicial en tierra',
      'Acompañamiento constante durante el recorrido',
      'Salidas matutinas o travesías al atardecer',
      'Apto para individuales, parejas y familias',
    ],
    cta: 'Reservar travesía en SUP',
    service: 'Travesía en SUP',
  },
  {
    id: 'surf',
    num: '02',
    title: 'Clases de Surf & SUP Surf',
    subtitle: 'En el mar · Iniciación desde cero, lectura de olas y perfeccionamiento',
    tag: '02 · Clases en el mar',
    image: 'img/modalidades.jpg',
    imageAlt: 'Collage de salidas en SUP y surf en La Barra',
    cardTitle: 'Clases de Surf & SUP Surf en el Mar',
    badge: 'Iniciación y Progreso',
    description:
      'Entrá al mar con seguridad y técnica paso a paso: desde cómo pararte en la tabla (take-off) y leer las series en la playa, hasta deslizar tus primeras olas con remo o en tabla de surf.',
    items: [
      'Entrada en calor y práctica técnica en arena',
      'Tablas softboard seguras y tablas de SUP surf',
      'Traje de neoprene incluido según temperatura',
      'Seguridad en el mar, corrientes y prioridades',
      'Clases personalizadas o en grupos reducidos',
      'Niños, adolescentes y adultos',
    ],
    cta: 'Coordinar clase en el mar',
    service: 'Clase de Surf / SUP Surf',
  },
  {
    id: 'rental',
    num: '03',
    title: 'Alquiler de Equipos & Grupos',
    subtitle: 'Tablas SUP, surf, remos y trajes · Salidas en familia o con amigos',
    tag: '03 · Equipamiento',
    image: 'img/modalidades.jpg',
    imageAlt: 'Collage de salidas en SUP y surf en La Barra',
    cardTitle: 'Alquiler de Equipos & Salidas Grupales',
    badge: 'Por hora o jornada',
    description:
      'Si ya tenés experiencia y querés entrar por tu cuenta, o si buscás organizar una actividad diferente en La Barra con tu grupo de amigos o familia, preparamos todo el equipamiento listo en costa.',
    items: [
      'Alquiler de tablas de SUP + remo + pita',
      'Alquiler de tablas de surf y trajes de neoprene',
      'Asesoramiento sobre el estado del agua del día',
      'Salidas especiales para grupos y cumpleaños',
      'Coordinación flexible por WhatsApp',
      'Equipos revisados y en excelente estado',
    ],
    cta: 'Consultar alquiler o grupo',
    service: 'Alquiler de equipos',
  },
];

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  meta: string;
  span: string;
}

export const GALLERY: GalleryItem[] = [
  {
    src: 'img/g1.jpg',
    alt: 'Travesía grupal en Stand Up Paddle sobre agua calma',
    title: 'Remada serena en espejo de agua',
    meta: '01 · Travesías en SUP',
    span: 'span-7',
  },
  {
    src: 'img/g2.jpg',
    alt: 'Práctica de surf en olas oceánicas',
    title: 'Lectura de olas y deslizamiento',
    meta: '02 · Clases en el mar',
    span: 'span-5',
  },
  {
    src: 'img/g3.jpg',
    alt: 'Tablas y remos preparados en la orilla',
    title: 'Equipos listos en el punto de encuentro',
    meta: '03 · Equipamiento',
    span: 'span-4',
  },
  {
    src: 'img/g4.jpg',
    alt: 'Entrada guiada al mar con tabla',
    title: 'Acompañamiento personalizado',
    meta: '04 · Todos los niveles',
    span: 'span-4',
  },
  {
    src: 'img/g5.jpg',
    alt: 'Salida de Stand Up Paddle al caer el sol',
    title: 'Salidas de atardecer en La Barra',
    meta: '05 · Sunset SUP',
    span: 'span-4',
  },
];

export interface StepItem {
  num: string;
  tag: string;
  title: string;
  description: string;
}

export const STEPS: StepItem[] = [
  {
    num: '01',
    tag: 'Coordinación',
    title: 'Elegimos día y condición',
    description:
      'Nos escribís contándonos si preferís travesía en SUP, clase de surf o alquiler. Revisamos el pronóstico de viento y marea en La Barra y te proponemos los mejores horarios.',
  },
  {
    num: '02',
    tag: 'Recepción',
    title: 'Equipo listo y charla en costa',
    description:
      'Nos encontramos en el punto acordado de La Barra con tu tabla, remo, traje de neoprene y chaleco ya seleccionados. Hacemos una introducción práctica sobre postura y seguridad.',
  },
  {
    num: '03',
    tag: 'Al Agua',
    title: 'Navegación o surf guiado',
    description:
      'Entramos juntos al agua respetando tus tiempos. Te acompañamos de cerca para corregir la técnica de remada o ayudarte a tomar tus primeras olas con total disfrute.',
  },
];

export interface Pillar {
  kicker: string;
  title: string;
  body: string;
  meta: string;
}

export const PILLARS: Pillar[] = [
  {
    kicker: 'Pilar 01 · Paciencia y Didáctica',
    title: 'Enseñanza clara para quienes entran por primera vez',
    body: 'Quienes visitan la escuela destacan la tranquilidad con la que se explica cada paso antes y durante la sesión, logrando pararse en la tabla desde la primera salida.',
    meta: 'Iniciación segura · Niños y adultos',
  },
  {
    kicker: 'Pilar 02 · Lectura del Entorno',
    title: 'Elección honesta del horario y del punto de agua',
    body: 'Al combinar arroyo y mar en La Barra, cada salida se adapta a las condiciones reales del día para aprovechar el agua más limpia y segura.',
    meta: 'Arroyo Maldonado & Playas de La Barra',
  },
  {
    kicker: 'Pilar 03 · Equipamiento Cuidado',
    title: 'Tablas estables, trajes cómodos y trato cercano',
    body: 'Equipos seleccionados para brindar flotabilidad y confianza desde el minuto uno, con coordinación directa con Danishka por WhatsApp.',
    meta: '5,0 ★ · 11 opiniones verificadas',
  },
];

export interface Zone {
  title: string;
  detail: string;
}

export const ZONES: Zone[] = [
  { title: 'La Barra & Arroyo Maldonado', detail: 'Travesías en SUP · Agua calma' },
  { title: 'Playas de La Barra (La Posta / Montoya)', detail: 'Clases de Surf & SUP Surf' },
  { title: 'Manantiales & El Tesoro', detail: 'A 5 min del punto base' },
  { title: 'Punta del Este & Playa Brava', detail: 'Coordinación directa' },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: '¿Necesito experiencia previa para hacer una travesía en SUP o tomar clase?',
    a: 'No hace falta experiencia previa. Empezamos desde cero con una explicación práctica en la orilla sobre equilibrio, uso del remo y seguridad, utilizando tablas amplias y muy estables.',
  },
  {
    q: '¿La clase o travesía incluye la tabla y el traje de neoprene?',
    a: 'Sí. Incluimos la tabla acorde a tu peso y nivel, el remo ajustado a tu altura, pita de seguridad (leash), chaleco salvavidas para travesías y traje de neoprene cuando la temperatura del agua lo requiere.',
  },
  {
    q: '¿Cómo se define si salimos al arroyo o al mar?',
    a: 'Depende de lo que busques (remada tranquila en SUP vs. olas de surf o SUP surf) y de las condiciones meteorológicas del día. Siempre te recomendamos el escenario más noble según viento y marea.',
  },
  {
    q: '¿Pueden participar niños o familias enteras?',
    a: 'Por supuesto. Adaptamos el ritmo y el equipamiento tanto para niños y adolescentes como para adultos que quieren compartir una salida familiar en La Barra.',
  },
  {
    q: '¿Qué pasa si el día reservado hay mucho viento o mal clima?',
    a: 'La seguridad y el disfrute están primero. Si las condiciones del agua no son óptimas, reprogramamos tu salida por WhatsApp para la siguiente ventana de buen clima sin ningún inconveniente.',
  },
  {
    q: '¿Cómo reservo un horario?',
    a: 'Podés tocar cualquiera de los botones de esta web para armar tu mensaje en 3 pasos o escribir directamente al WhatsApp 096 496 499 indicando qué día te gustaría salir y cuántas personas son.',
  },
];

export interface Choice {
  value: string;
  label: string;
}

export const SERVICE_OPTIONS: Choice[] = [
  { value: 'Travesía en SUP', label: 'Travesía guiada en Stand Up Paddle (SUP)' },
  { value: 'Clase de Surf / SUP Surf', label: 'Clase de Surf o SUP Surf en el mar' },
  { value: 'Alquiler de equipos', label: 'Alquiler de tablas y equipos' },
  { value: 'Salida grupal / familiar', label: 'Salida en familia o grupo de amigos' },
];

export const LEVEL_OPTIONS: Choice[] = [
  { value: 'Primera vez (iniciación)', label: 'Primera vez / Iniciación' },
  { value: 'Con experiencia previa', label: 'Ya tengo experiencia' },
  { value: 'En pareja (2 personas)', label: 'En pareja (2 personas)' },
  { value: 'Grupo o familia (3+ personas)', label: 'Grupo o familia (3+)' },
];

export const FOOTER_LINKS = [
  { href: '#modalidades', label: 'Modalidades y clases' },
  { href: '#escuela', label: 'La Escuela' },
  { href: '#galeria', label: 'Galería y escenarios' },
  { href: '#proceso', label: 'Cómo reservamos' },
  { href: '#resenas', label: 'Reseñas en Google Maps' },
  { href: '#ubicacion', label: 'Ubicación en La Barra' },
  { href: '#faq', label: 'Preguntas frecuentes' },
];
