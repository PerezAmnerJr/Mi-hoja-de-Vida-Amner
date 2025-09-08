export interface EducationItem { title: string; place: string; period: string; desc: string }
export interface ExperienceItem { role: string; company: string; location?: string; period: string; dateDetail: string; bullets: string[] }
export interface SkillBar { label: string; level: number; note?: string }
export interface SkillsData { bars: SkillBar[]; tags: string[] }
export interface ProjectItem { title: string; desc: string; img: string; demo?: string; code?: string }

export const personal = {
  name: 'Amner Alberto Perez Marroquin',
  initials: 'AP',
  role: 'Administrador de Base de Datos',
  location: 'Guatemala',
  email: 'perezamner2001@gmail.com',
  phone: '42950688',
  availability: true,
  links: { linkedin: '#', github: '#' },
}

export const education: EducationItem[] = [
  { title:'Ingeniería en Sistemas (Estudiante)', place:'Universidad Mariano Gálvez — Chiquimulilla, Santa Rosa', period:'2022 – Actualidad', desc:'Enfoque en programación, bases de datos y sistemas; participación en proyectos académicos.' },
  { title:'Bachillerato en Ciencias y Letras con Orientación en Computación', place:'Colegio Educación Tecnológica Fe Viva — Guazacapán, Santa Rosa', period:'2019 – 2020', desc:'Base sólida en computación y fundamentos de programación.' },
  { title:'Básicos (Nivel Medio)', place:'Instituto Mixto de Educación Básica por Cooperativa — Aldea Plataneres, Guazacapán', period:'2016 – 2018', desc:'Formación general con énfasis en ciencias.' },
  { title:'Primaria (Nivel Primario)', place:'Escuela Oficial Rural Mixta Sector Barranca Honda — Aldea Plataneres, Guazacapán', period:'2009 – 2015', desc:'Educación primaria completa.' },
]

export const experience: ExperienceItem[] = [
  { role:'Oficial de Seguridad', company:'WACKENHUT de GUATEMALA S.A — Grupo Q', location:'Guatemala, Carretera a El Salvador km 16.5', period:'2022 – 2025', dateDetail:'26/04/2022 – 10/01/2025',
    bullets:['Servicio de seguridad y atención al cliente en instalaciones empresariales.','Control de accesos, protocolos y reporte de incidencias.','Trabajo en equipo y comunicación efectiva con personal administrativo.'] },
  { role:'Oficial de Seguridad', company:'Servicios de Vigilancia SECUR, S.A. — Sede San José Pinula', period:'2021 – 2022', dateDetail:'01/04/2021 – 24/04/2022',
    bullets:['Servicios de seguridad en centros comerciales.','Monitoreo preventivo y respuesta inicial ante eventos.','Atención al cliente y resguardo de activos.'] },
]

export const skills: SkillsData = {
  bars: [
    { label:'SQL Server / MySQL', level:80, note:'Administración, consultas, modelado' },
    { label:'C# / .NET', level:65, note:'Utilidades y backend' },
    { label:'Python (Ciencia de Datos)', level:55, note:'Análisis básico, automatización' },
    { label:'JavaScript / React', level:45, note:'Interactividad y front-end' },
  ],
  tags: ['Certificación CCST (Redes)','Fundamentos de Redes','Fundamentos de Sistemas Operativos','MySQL Workbench','Microsoft SQL Server','Excel / Word / PowerPoint','SAP (usuario)'],
}

export const projects: ProjectItem[] = [
  { title:'Proyecto 1', desc:'Breve descripción del proyecto y el problema que resuelve.', img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', demo:'#', code:'#' },
  { title:'Proyecto 2', desc:'Descripción corta del proyecto, resultados e impacto.', img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60', demo:'#', code:'#' },
  { title:'Proyecto 3', desc:'Pequeño texto sobre el objetivo del proyecto.', img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', demo:'#', code:'#' },
]