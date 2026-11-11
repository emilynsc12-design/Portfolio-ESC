/**
 * Datos de ejemplo (placeholder). Reemplazar por los proyectos reales.
 * Para agregar un proyecto nuevo, añade un objeto más a este arreglo.
 */
export const projects = [
  {
    id: 'mineria-ofertas-laborales',
    title: 'Minería de Datos de Ofertas Laborales',
    description:
      'Scraping y análisis de miles de ofertas de empleo en tecnología para identificar tendencias de habilidades, salarios y ubicaciones más demandadas.',
    image: null, // imagen real del proyecto (si es null se muestra un fondo degradado)
    tags: ['Python', 'BeautifulSoup', 'Pandas', 'Power BI'],
    links: {
      dashboard: null, // URL del dashboard publicado (Power BI, Looker Studio, etc.)
      app: null,       // URL de la app en vivo (Streamlit, etc.)
      code: null,      // URL del repositorio en GitHub
    },
  },
  {
    id: 'finanzas-personales',
    title: 'Finanzas Personales',
    description:
      'Dashboard interactivo para el seguimiento de ingresos, gastos y metas de ahorro mensuales a partir de datos bancarios simulados.',
    image: import.meta.env.BASE_URL + 'proyectos/finanzas-personales.jpg',
    tags: ['AppSheet', 'Google Sheets', 'Looker Studio'],
    links: {
      dashboard: 'https://datastudio.google.com/reporting/354d82c1-62dd-46bb-9982-567e8f3e5ef4',
      app: 'https://www.appsheet.com/start/208dc574-fc91-488c-a345-109c96b63ed9',
      code: null, // este proyecto no tiene repositorio público
    },
    caseStudy: {
      heading: 'Finanzas Personales · Gestión y análisis financiero',
      problem:
        'Centralizar el registro de ingresos, gastos y ahorros, facilitando el seguimiento de los movimientos financieros y la identificación de patrones de consumo para mejorar la toma de decisiones.',
      approach:
        'Integración de AppSheet para el registro de transacciones, Google Sheets como fuente de almacenamiento y Looker Studio para construir un dashboard interactivo con indicadores financieros, tendencias de gasto, distribución por categorías y comparativas mensuales.',
      evidence: [
        'Aplicación para registrar y categorizar ingresos, gastos y ahorros.',
        'Dashboard con métricas de ingresos, gastos, ahorro neto y tasa de ahorro.',
        'Visualizaciones de tendencias diarias, distribución por categorías y comparativas mensuales.',
        'Tabla de últimas transacciones para consultar los movimientos registrados.',
      ],
      scope:
        'Proyecto demostrativo de gestión financiera personal con datos de prueba. La integración permite reflejar los registros en el dashboard sin actualización manual de la fuente de datos, sujeto a la sincronización y actualización de Looker Studio.',
    },
  },
  {
    id: 'sistema-ventas-provcal',
    title: 'Sistema de Ventas PROVCAL',
    description:
       'Sistema web de punto de venta que permite gestionar productos, usuarios, ventas e inventario mediante Kardex. Incluye reportes de ventas, control de stock, generación de tickets en PDF y exportación de datos a Excel.',
    image: null, // imagen real del proyecto (si es null se muestra un fondo degradado)
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    links: {
      dashboard: null, // URL del dashboard publicado (Power BI, Looker Studio, etc.)
      app: null,       // URL de la app en vivo (Streamlit, etc.)
      code: 'https://github.com/emilynsc12-design/Sistema-Ventas-Provcal.git',      // URL del repositorio en GitHub
    },
  },
  {
    id: 'recursos-humanos',
    title: 'Recursos Humanos',
    description:
      'Análisis de rotación de personal y clima laboral, con visualizaciones para apoyar decisiones del área de talento humano.',
    image: null, // imagen real del proyecto (si es null se muestra un fondo degradado)
    tags: ['R', 'ggplot2', 'Excel'],
    links: {
      dashboard: null, // URL del dashboard publicado (Power BI, Looker Studio, etc.)
      app: null,       // URL de la app en vivo (Streamlit, etc.)
      code: null,      // URL del repositorio en GitHub
    },
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Segmentación de clientes y análisis de canasta de compra para una tienda en línea, usando clustering y reglas de asociación.',
    image: null, // imagen real del proyecto (si es null se muestra un fondo degradado)
    tags: ['Python', 'Scikit-learn', 'SQL'],
    links: {
      dashboard: null, // URL del dashboard publicado (Power BI, Looker Studio, etc.)
      app: null,       // URL de la app en vivo (Streamlit, etc.)
      code: null,      // URL del repositorio en GitHub
    },
  },
  {
    id: 'prediccion-ventas',
    title: 'Predicción de Ventas',
    description:
      'Modelo de series de tiempo para proyectar la demanda mensual de productos y optimizar la planificación de inventario.',
    image: null, // imagen real del proyecto (si es null se muestra un fondo degradado)
    tags: ['Python', 'Prophet', 'Power BI'],
    links: {
      dashboard: null, // URL del dashboard publicado (Power BI, Looker Studio, etc.)
      app: null,       // URL de la app en vivo (Streamlit, etc.)
      code: null,      // URL del repositorio en GitHub
    },
  },
]
