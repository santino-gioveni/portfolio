// Contenido editable del portfolio. Todas las cifras son las informadas por Santino.
// Los campos marcados "Por completar" esperan datos confirmados.

export const contact = {
  email: "sanchugioveni@gmail.com",
  linkedin: "https://www.linkedin.com/in/santino-gioveni/",
};

export type Milestone = {
  id: string;
  period: string;
  title: string;
  kind: "Emprendimiento" | "Experiencia" | "Comunidad" | "Idea";
  weight: "major" | "normal";
  summary: string;
  highlight: string;
  metric?: { value: string; label: string };
  details: string[];
  link?: { label: string; href: string };
  projectId?: string;
};

export const milestones: Milestone[] = [
  {
    id: "oma",
    period: "2020",
    title: "Comidas Oma",
    kind: "Emprendimiento",
    weight: "major",
    summary:
      "Arranqué un proyecto gastronómico propio inspirado en la cocina familiar. Evolucionó hacia comida casera con un toque creativo: viandas, pedidos y propuestas para eventos.",
    highlight: "Construí una propuesta desde cero y la llevé a la venta.",
    metric: { value: "≈275", label: "pan dulces vendidos en 3 días (vs. 100–120 la temporada anterior)" },
    details: [
      "Definición de la propuesta y de las líneas de producto.",
      "Comercialización, toma de pedidos y atención a clientes.",
      "Campaña de pan dulce con un salto de ventas respecto a la temporada previa.",
    ],
    projectId: "oma",
  },
  {
    id: "ksk",
    period: "Marzo de 2022 – agosto de 2023",
    title: "KSK de Alejo",
    kind: "Experiencia",
    weight: "normal",
    summary: "Atención al cliente y compras.",
    highlight: "Aprendí a leer necesidades de clientes y cómo funciona la operación de un negocio.",
    details: ["Contacto directo con clientes.", "Participación en compras y reposición."],
  },
  {
    id: "ms-freelance",
    period: "2023 – 2026",
    title: "Merchandising Stuff · Colaborador comercial freelance",
    kind: "Experiencia",
    weight: "normal",
    summary: "Conectaba potenciales clientes con la empresa.",
    highlight: "Generación de contactos y conexión de oportunidades con la empresa.",
    details: [
      "Identificación de potenciales clientes en mi red.",
      "Presentación y derivación de esas oportunidades a la empresa.",
    ],
  },
  {
    id: "ms-office",
    period: "Mar – Sep 2026",
    title: "Merchandising Stuff · Etapa de oficina",
    kind: "Experiencia",
    weight: "major",
    summary:
      "Pasé de acercar contactos a sostener la operación comercial: ventas B2B, presupuestos, negociación, compras, proveedores, facturación, coordinación administrativa, propuestas, marketing y redes.",
    highlight: "La etapa donde asumí responsabilidades comerciales y operativas amplias.",
    metric: { value: "≈ ARS 70 M", label: "en ventas concretadas durante tres meses" },
    details: [
      "≈60 presupuestos y ≈35 cierres en un período de alta actividad.",
      "Descuentos negociados con proveedores superiores al 25%.",
      "≈ARS 700 M en oportunidades identificadas — pipeline potencial, no ventas cerradas.",
    ],
  },
  {
    id: "aviatour",
    period: "Sep 2026 – hoy",
    title: "Aviatour",
    kind: "Experiencia",
    weight: "normal",
    summary: "Experiencia comercial.",
    highlight: "Responsabilidades específicas: por completar.",
    details: ["Detalle de funciones a completar con información confirmada."],
  },
  {
    id: "conexa",
    period: "2026",
    title: "Conexa Agency",
    kind: "Emprendimiento",
    weight: "major",
    summary:
      "Proyecto propio en desarrollo para conectar marcas y comercios con creadores de contenido mediante colaboraciones y campañas.",
    highlight: "Creé una propuesta de negocio que une marketing de creadores con oportunidades comerciales.",
    details: [
      "Definición de la propuesta y el posicionamiento.",
      "Desarrollo de la presencia web.",
      "Búsqueda de oportunidades y relaciones con ambas partes.",
    ],
    link: { label: "conexa-agency.com.ar", href: "https://www.conexa-agency.com.ar/" },
    projectId: "conexa",
  },
  {
    id: "curaru",
    period: "Fecha por completar",
    title: "Curaru",
    kind: "Comunidad",
    weight: "normal",
    summary:
      "Organicé desde cero una comunidad para conectar a personas que habían llegado a Buenos Aires desde otras localidades.",
    highlight: "Iniciativa, organización y construcción de comunidad.",
    metric: { value: "≈40", label: "personas conectadas" },
    details: ["Convocatoria, organización y conexión entre los participantes."],
    projectId: "curaru",
  },
  {
    id: "recicoin",
    period: "Fecha por completar",
    title: "Recicoin",
    kind: "Idea",
    weight: "normal",
    summary: "Una idea sobre reciclaje, incentivos y economía circular.",
    highlight: "Explorar cómo incentivar hábitos más sostenibles.",
    details: ["Etapa del proyecto: por completar."],
    projectId: "recicoin",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  type: string;
  status: string;
  idea: string;
  opportunity: string;
  role: string;
  actions: string[];
  evolution: string;
  results: { metric?: { value: string; label: string }; text: string };
  next?: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: "conexa",
    name: "Conexa Agency",
    tagline: "Marcas y creadores, conectados por oportunidades reales.",
    type: "Proyecto propio",
    status: "En desarrollo",
    idea: "Una agencia que conecte marcas y comercios con creadores de contenido para generar colaboraciones comerciales y campañas.",
    opportunity:
      "Hay negocios que quieren llegar a nuevas audiencias y creadores que aportan contenido, alcance y afinidad con su comunidad. Conexa busca facilitar ese encuentro.",
    role: "Iniciativa y desarrollo comercial: propuesta, posicionamiento, búsqueda de oportunidades y relaciones con ambas partes.",
    actions: [
      "Definí la propuesta de valor para marcas y para creadores.",
      "Trabajé el posicionamiento del proyecto.",
      "Desarrollé su presencia web.",
      "Busco oportunidades y construyo relaciones entre ambas partes.",
    ],
    evolution: "El modelo de conexión se va ajustando a medida que avanzan las conversaciones con marcas y creadores.",
    results: {
      text: "Propuesta desarrollada y sitio web publicado. Aún no hay métricas comerciales confirmadas para compartir.",
    },
    link: { label: "Visitar conexa-agency.com.ar", href: "https://www.conexa-agency.com.ar/" },
  },
  {
    id: "oma",
    name: "Comidas Oma",
    tagline: "Cocina familiar con un toque creativo.",
    type: "Proyecto propio",
    status: "En actividad",
    idea: "Una propuesta gastronómica inspirada en la cocina familiar: comida casera con un toque creativo.",
    opportunity: "Demanda de comida casera de calidad para el día a día, fechas especiales y eventos.",
    role: "Fundador: propuesta, producción, venta y atención de pedidos.",
    actions: [
      "Desarrollé la propuesta y las líneas de producto.",
      "Comercialicé los productos y atendí los pedidos.",
      "Sumé viandas, comidas y propuestas para eventos.",
      "Lancé una campaña estacional de pan dulce.",
    ],
    evolution: "Nació en 2020 y fue creciendo desde la cocina familiar hacia distintas líneas de negocio.",
    results: {
      metric: { value: "≈275", label: "pan dulces en 3 días" },
      text: "Resultado de ventas reportado: frente a unas 100–120 unidades en la temporada anterior.",
    },
  },
  {
    id: "curaru",
    name: "Curaru",
    tagline: "Una comunidad para quienes llegan a Buenos Aires.",
    type: "Iniciativa comunitaria",
    status: "Continuidad: por completar",
    idea: "Crear una comunidad para conectar a personas que habían llegado desde otras localidades a Buenos Aires.",
    opportunity: "Llegar a una ciudad nueva sin red de contactos puede ser difícil; un espacio común ayuda.",
    role: "Iniciativa, organización y conexión entre personas.",
    actions: ["Impulsé la idea.", "Convoqué y organicé al grupo.", "Conecté a los participantes entre sí."],
    evolution: "Detalle de la evolución: por completar.",
    results: {
      metric: { value: "≈40", label: "personas" },
      text: "Comunidad construida desde cero.",
    },
  },
  {
    id: "recicoin",
    name: "Recicoin",
    tagline: "Incentivos para reciclar más.",
    type: "Idea",
    status: "Etapa: por completar",
    idea: "Explorar una propuesta de reciclaje, economía circular e incentivos para promover hábitos más sostenibles.",
    opportunity: "Reciclar suele depender solo de la buena voluntad; un incentivo podría cambiar el hábito.",
    role: "Participación específica: por completar.",
    actions: ["Exploré la lógica de incentivos detrás de la idea."],
    evolution: "Aprendizaje: por completar.",
    results: { text: "Sin métricas: proyecto en etapa exploratoria." },
  },
];

export const achievements = [
  { value: "≈ ARS 70 M", label: "Ventas concretadas", note: "Merchandising Stuff · 3 meses, etapa de oficina 2026", lead: true },
  { value: "≈35 / 60", label: "Cierres sobre presupuestos", note: "Período de alta actividad, 2026" },
  { value: "USD 100.000", label: "Ventas concretadas", note: "Global Merch · Desarrollo comercial freelance · Sep 2026–actualidad" },
  { value: "+25%", label: "Descuentos con proveedores", note: "Negociados en compras, 2026" },
  { value: "≈40", label: "Personas en comunidad", note: "Curaru, organizada desde cero" },
  { value: "≈275", label: "Pan dulces en 3 días", note: "Comidas Oma, campaña estacional" },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  items: string[];
  metric?: { value: string; label: string; description: string };
  link?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    id: "parlyx",
    company: "Parlyx",
    role: "Desarrollo comercial",
    period: "Septiembre de 2026 – actualidad",
    current: true,
    items: [
      "Desarrollo comercial de una solución de inteligencia artificial para gestionar consultas entrantes.",
      "Exploración de oportunidades comerciales y trabajo sobre la propuesta de valor.",
      "Identificación de potenciales clientes, acciones de prospección y contacto.",
    ],
    link: { label: "parlyx.vercel.app", href: "https://parlyx.vercel.app/" },
  },
  {
    id: "aviatour",
    company: "Aviatour",
    role: "Experiencia comercial",
    period: "Septiembre de 2026 – actualidad",
    current: true,
    items: ["Responsabilidades a completar con información confirmada."],
  },
  {
    id: "global-merch",
    company: "Global Merch",
    role: "Desarrollo comercial freelance",
    period: "Septiembre de 2026 – actualidad",
    current: true,
    items: ["Generación de oportunidades comerciales y concreción de negocios."],
    metric: {
      value: "USD 100.000",
      label: "en ventas concretadas",
      description: "Resultado comercial de Global Merch: generación de oportunidades y concreción de negocios.",
    },
  },
  {
    id: "ms-office",
    company: "Merchandising Stuff",
    role: "Experiencia en oficina · Gestión comercial y operativa",
    period: "Marzo de 2026 – septiembre de 2026",
    current: false,
    metric: {
      value: "≈ ARS 70 M",
      label: "en ventas concretadas durante tres meses",
      description: "Logro reportado dentro de la etapa de oficina, de marzo a septiembre de 2026.",
    },
    items: [
      "Ventas B2B, presupuestos y propuestas comerciales.",
      "Negociación, compras y gestión de proveedores.",
      "Facturación y coordinación administrativa.",
      "Marketing y redes sociales.",
    ],
  },
  {
    id: "ms-freelance",
    company: "Merchandising Stuff",
    role: "Colaborador comercial freelance",
    period: "2023–2026",
    current: false,
    items: ["Mi función era exclusivamente conectar potenciales clientes con la empresa."],
  },
  {
    id: "ksk",
    company: "KSK de Alejo",
    role: "Atención al cliente y compras",
    period: "Marzo de 2022 – agosto de 2023",
    current: false,
    items: ["Atención a clientes.", "Compras."],
  },
  {
    id: "oma",
    company: "Comidas Oma",
    role: "Emprendimiento gastronómico propio",
    period: "2020 – actualidad",
    current: true,
    items: ["Propuesta gastronómica propia: producción, venta y atención de pedidos."],
  },
];

// Preserve the confirmed order, grouping matching periods without merging jobs.
export const experienceGroups = experience.reduce<{ period: string; entries: Experience[] }[]>((groups, entry) => {
  const previous = groups.at(-1);
  if (previous?.period === entry.period) previous.entries.push(entry);
  else groups.push({ period: entry.period, entries: [entry] });
  return groups;
}, []);

// Perfil conductual según la evaluación Workplace Insights (Criteria Corp, sep 2026).
// Los puntajes son los informados en el informe; no son inventados.
export type InsightTrait = { name: string; description: string };
export type InsightScore = { label: string; value: number; population: number };

export const workplaceInsights: {
  source: string;
  intro: string;
  headlineTraits: InsightTrait[];
  scores: InsightScore[];
  strengths: string[];
} = {
  source: "Fuente: evaluación Workplace Insights (Criteria Corp), 29 de septiembre de 2026.",
  intro:
    "Además de la experiencia, este es el perfil que surge de una evaluación de comportamiento laboral: qué me motiva, cómo trabajo y cómo me relaciono con los demás en un entorno profesional.",
  headlineTraits: [
    {
      name: "Motivado",
      description: "Comprometido e impulsado por objetivos: un impulso interno fuerte para lograr lo que me propongo.",
    },
    {
      name: "Asertivo",
      description: "Presencia firme y directa: expreso mis opiniones con claridad y me animo a tomar la delantera.",
    },
    {
      name: "Extrovertido",
      description: "Sociable y enérgico: me resulta natural iniciar conversaciones y construir relaciones, incluso con desconocidos.",
    },
    {
      name: "Competitivo",
      description: "Ganas innatas de ganar: mido mi rendimiento y busco superar metas y objetivos externos.",
    },
  ],
  scores: [
    { label: "Motivación", value: 8, population: 6 },
    { label: "Extroversión", value: 7, population: 4 },
    { label: "Competitividad", value: 7, population: 4 },
    { label: "Asertividad", value: 7, population: 5 },
    { label: "Responsabilidad", value: 7, population: 5 },
    { label: "Autoconfianza", value: 7, population: 5 },
    { label: "Cooperación", value: 6, population: 4 },
    { label: "Paciencia", value: 6, population: 4 },
    { label: "Apertura", value: 6, population: 5 },
    { label: "Orientación al logro", value: 6, population: 5 },
  ],
  strengths: [
    "Trabajo cuidadoso y organizado, con atención al detalle: el alto nivel de responsabilidad suele asociarse a buen desempeño en la mayoría de los roles.",
    "Fuerte motivación interna y compromiso con los objetivos.",
    "Naturaleza competitiva: quiero ganar y rindo mejor donde el desempeño se mide; me animo a tomar riesgos cuando hace falta.",
    "Comunicación directa: no me cuesta expresar lo que pienso con claridad.",
    "Sociable y extrovertido: me resulta cómodo conocer personas nuevas y priorizar la interacción.",
    "Equilibrio efectivo entre paciencia e impaciencia al perseguir oportunidades y avanzar en proyectos.",
    "Alta autoconfianza: la duda rara vez me frena en el trabajo.",
  ],
};
