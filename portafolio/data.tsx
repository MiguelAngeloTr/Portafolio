import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={40} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={40} strokeWidth={1} />,
        src: "#!",
    },
   
    
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
  
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Ingeniería Informática ",
    subtitle: "Universidad Autónoma de Occidente",
    description:
      "Estudiante de 9.º semestre. Interés en desarrollo de software y analítica de datos, con enfoque en aprendizaje continuo, trabajo en equipo y solución de problemas.",
    date: "2021 - Actualidad",
  },
  {
    id: 2,
    title: "Vortex Bird: Gamificación de Proyectos",
    subtitle: "Proyecto académico",
    description:
      "Implementación de técnicas de gamificación en una página web orientada a mejorar la participación y motivación de los trabajadores en procesos y proyectos.",
    date: "Sep 2023",
  },
  {
    id: 3,
    title: "App de Cine en React",
    subtitle: "Proyecto Front-End",
    description:
      "Desarrollo de una aplicación en React para consumir una API de películas, implementando llamadas asincrónicas, gestión de estado y optimización del rendimiento.",
    date: "Jun 2024",
  },
  {
    id: 4,
    title: "Datathon: Clasificación de densidad mamaria (BI-RADS)",
    subtitle: "UAO + Fundación Valle del Lili",
    description:
      "Participación en un reto de analítica para clasificar densidad mamaria en mamografías bajo el sistema BI-RADS, orientado a apoyar la detección temprana del cáncer de mama.",
    date: "May 2025",
  },
  {
    id: 5,
    title: "App de Ecografías",
    subtitle: "Proyecto de desarrollo de software",
    description:
      "Desarrollo e implementación de un sistema para la gestión de ecografías, optimizando almacenamiento, visualización e interpretación de imágenes médicas para profesionales y pacientes.",
    date: "Oct 2025",
  },
   {
    id: 6,
    title: "Postgrado: Analítica de Big Data",
    subtitle: "Formación complementaria",
    description:
      "Formación en analítica y procesamiento de datos: ETL, SQL avanzado, Power BI, Apache Spark y análisis en entornos como Databricks.",
    date: "2025",
  }
];


export const dataCounter = [
  {
    id: 0,
    endCounter: 12,
    text: "Tecnologías aplicadas",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 6,
    text: "Proyectos en portafolio",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 4,
    text: "Dashboards en Power BI",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 5,
    text: "Procesos ETL construidos",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Computer />,
    title: "Desarrollo Frontend (React/Next.js)",
    description:
      "Construcción de interfaces modernas, rápidas y responsivas, con componentes reutilizables, animaciones y buenas prácticas de UI.",
  },
  {
    icon: <Rocket />,
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo de aplicaciones completas con autenticación, consumo de APIs, manejo de estados, roles y despliegue en producción.",
  },
  {
    icon: <Book />,
    title: "APIs y Backend (Node.js)",
    description:
      "Diseño e implementación de APIs REST, lógica de negocio e integraciones, con estructura limpia y manejo de errores.",
  },
  {
    icon: <Crop />,
    title: "Bases de datos (PostgreSQL/MongoDB)",
    description:
      "Modelado de datos, consultas SQL avanzadas, optimización y conexión con aplicaciones usando bases relacionales y NoSQL.",
  },
  {
    icon: <Pencil />,
    title: "Analítica de Datos y Dashboards",
    description:
      "Limpieza y análisis exploratorio con Python (Pandas/Matplotlib), ETL y dashboards en Power BI para apoyar decisiones.",
  },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];