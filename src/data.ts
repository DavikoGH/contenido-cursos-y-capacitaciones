export type ListingType = 'Clase' | 'Curso' | 'Capacitación';
export type FormatType = 'Online' | 'Presencial' | 'Híbrido';

export interface Listing {
  id: string;
  title: string;
  provider: string;
  category: string;
  type: ListingType;
  rating: number;
  reviews: number;
  price: string;
  format: FormatType;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  count: number;
  description: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Programación y Tecnología', iconName: 'Code', count: 1250, description: 'Desarrolla software, aprende lenguajes de código y domina tecnologías innovadoras.' },
  { id: '2', name: 'Inteligencia Artificial', iconName: 'Brain', count: 840, description: 'Crea modelos de IA, entiende machine learning y revoluciona con datos.' },
  { id: '9', name: 'Robótica y Electrónica', iconName: 'Cpu', count: 410, description: 'Construye circuitos, programa microcontroladores y ensambla robots funcionales.' },
  { id: '4', name: 'Diseño Gráfico', iconName: 'Palette', count: 430, description: 'Domina herramientas visuales, crea branding impactante y comunica con arte.' },
  { id: '5', name: 'Apoyo Escolar', iconName: 'BookOpen', count: 910, description: 'Mejora en matemáticas, domina ciencias y fortalece tu rendimiento académico.' },
  { id: '6', name: 'Finanzas y Contabilidad', iconName: 'Calculator', count: 350, description: 'Gestiona presupuestos, entiende inversiones y organiza la economía personal.' },
  { id: '7', name: 'Diseño y Desarrollo Web', iconName: 'Monitor', count: 720, description: 'Construye sitios web, diseña interfaces modernas y programa el frontend.' },
  { id: '8', name: 'Electricidad Domiciliaria', iconName: 'Zap', count: 540, description: 'Realiza instalaciones seguras, repara circuitos y entiende normativas eléctricas.' },
  { id: '3', name: 'Marketing Digital', iconName: 'Megaphone', count: 620, description: 'Crea estrategias online, gestiona redes sociales y optimiza campañas de ventas.' },
  { id: '10', name: 'Oratoria y Liderazgo', iconName: 'Mic', count: 215, description: 'Pierde el miedo al público, mejora tu dicción y lidera equipos con éxito.' },
];

export const featuredListings: Listing[] = [
  {
    id: '1',
    title: 'Diseño y Desarrollo Web',
    provider: 'Tech Academy',
    category: 'Programación',
    type: 'Curso',
    rating: 4.8,
    reviews: 320,
    price: '$49.99',
    format: 'Online',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '2',
    title: 'Inglés Conversacional Intensivo',
    provider: 'Global Languages',
    category: 'Idiomas',
    type: 'Clase',
    rating: 4.9,
    reviews: 150,
    price: '$15.00 / hora',
    format: 'Online',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '3',
    title: 'Marketing Digital',
    provider: 'Business Institute',
    category: 'Negocios',
    type: 'Capacitación',
    rating: 4.7,
    reviews: 89,
    price: '$199.00',
    format: 'Híbrido',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '4',
    title: 'Robótica aplicada a escolares',
    provider: 'Creative Studio',
    category: 'Robótica',
    type: 'Curso',
    rating: 4.6,
    reviews: 210,
    price: '$29.99',
    format: 'Presencial',
    image: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '5',
    title: 'Matemáticas para Secundaria',
    provider: 'Prof. Carlos Mendoza',
    category: 'Apoyo Escolar',
    type: 'Clase',
    rating: 5.0,
    reviews: 45,
    price: '$20.00 / hora',
    format: 'Online',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '6',
    title: 'Diseño Gráfico Publicitario',
    provider: 'Emprende Ya',
    category: 'Arte y Diseño',
    type: 'Capacitación',
    rating: 4.5,
    reviews: 112,
    price: '$89.00',
    format: 'Online',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600&h=400',
  }
];
