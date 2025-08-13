import smartDroneCover from "../assets/img/smartDroneCover.webp";
import matildeShowroomCover from "../assets/img/matildeShowroomCover.webp";
import rumbleStoreCover from "../assets/img/rumbleStoreCover.webp";
import schwarzLaboratoriesCover from "../assets/img/schwarzLaboratoriesCover.webp";
import firebaseIcon from "../assets/icon/firebaseIcon.png";
import bootstrapIcon from "../assets/icon/bootstrapIcon.png";
import cssIcon from "../assets/icon/cssIcon.png";
import { Project } from "../types/Project";

export const spanishProjectList: Project[] = [
  {
    id: 1,
    name: "SmartDrone",
    description:
      "Desarrollé el sitio web de SmartDrone para mostrar los productos y servicios de una empresa electrónica uruguaya, especializada en soporte técnico para una variedad de dispositivos. Utilicé tecnologías como HTML, CSS, JavaScript, SwiperJS y Tailwind CSS para crear una experiencia de usuario fluida y visualmente atractiva. Me aseguré de que la base de código estuviera bien estructurada, optimizada para SEO y diseñada para un alto rendimiento y visibilidad.",
    technologies: [
      {
        iconImg: "/images/htmlIcon.png",
        name: "HTML",
      },

      {
        iconImg: cssIcon,
        name: "CSS",
      },

      {
        iconImg: "/images/tailwindCssIcon.png",
        name: "Tailwind CSS",
      },

      {
        iconImg: "/images/javaScriptIcon.png",
        name: "JavaScript",
      },
    ],
    img: smartDroneCover,
    pageLink: "https://smartdrone-proyect-test.vercel.app/",
    code: "",
  },

  {
    id: 2,
    name: "Matilde Showroom",
    description:
      "Matilde Showroom es una tienda de moda femenina en Argentina. En colaboración con un equipo compuesto por un desarrollador y tres diseñadores, diseñé y desarrollé un sitio web que representa fielmente la marca, respetando su identidad, colores y valores. El proyecto, impulsado por React JS y Tailwind CSS, tuvo como objetivo ampliar el alcance de la tienda, mejorar la interacción con los clientes y contribuir al éxito comercial del negocio. Este desarrollo fue realizado como parte de un curso de formación en una institución educativa, lo que permitió aplicar conocimientos técnicos en un entorno real. El acceso al código fuente esta siendo compartido únicamente con el consentimiento del cliente.",
    technologies: [
      {
        iconImg: "/images/reactIcon.png",
        name: "ReactJS",
      },

      {
        iconImg: "/images/htmlIcon.png",
        name: "HTML",
      },

      {
        iconImg: cssIcon,
        name: "CSS",
      },

      {
        iconImg: "/images/tailwindCssIcon.png",
        name: "Tailwind CSS",
      },

      {
        iconImg: "/images/javaScriptIcon.png",
        name: "JavaScript",
      },
    ],
    img: matildeShowroomCover,
    pageLink: "https://matildeshowroom.vercel.app/",
    code: "https://github.com/mauperez9918/matilde-showroom/tree/main",
  },

  {
    id: 3,
    name: "Schwarz Laboratories(EN DESARROLLO)",
    description:
      "Schwarz es una empresa de la industria panameña especializada en neumática. Desarrollé un modelo de ecommerce sin pasarela de pagos, cuyo objetivo principal fue modernizar el antiguo sitio web de la empresa y facilitar a los clientes la posibilidad de solicitar cotizaciones de productos directamente desde la plataforma. El usuario puede agregar productos a un carrito y, mediante un formulario, enviar su solicitud para recibir la cotización por correo electrónico, ya que los precios no se muestran públicamente a pedido del cliente. El proyecto se encuentra actualmente en desarrollo, por lo que algunas funcionalidades están pendientes de finalización o mejora.",
    technologies: [
      {
        iconImg: "/images/htmlIcon.png",
        name: "HTML",
      },

      {
        iconImg: cssIcon,
        name: "CSS",
      },

      {
        iconImg: "/images/reactIcon.png",
        name: "ReactJS",
      },

      {
        iconImg: "/images/tailwindCssIcon.png",
        name: "Tailwind CSS",
      },

      {
        iconImg: "/images/javaScriptIcon.png",
        name: "JavaScript",
      },

      {
        iconImg: firebaseIcon,
        name: "FireBase",
      },
    ],
    img: schwarzLaboratoriesCover,
    pageLink: "https://schwarz-proyect.vercel.app/",
    code: "",
  },

  {
    id: 4,
    name: "Rumble Store",
    description:
      "RumbleStore es un ecommerce desarrollado como proyecto personal utilizando HTML, CSS y JavaScript puro, sin frameworks ni backend. Implementé un sistema de carrito de compras totalmente funcional con almacenamiento en localStorage, actualización dinámica de productos y cálculo automático de totales. El diseño es responsive y se enfoca en una experiencia de usuario fluida. Este proyecto fue mi primer acercamiento al desarrollo web y me permitió comprender las bases del DOM, la manipulación de eventos y la lógica detrás de una tienda online.",
    technologies: [
      {
        iconImg: "/images/htmlIcon.png",
        name: "HTML",
      },

      {
        iconImg: cssIcon,
        name: "CSS",
      },

      {
        iconImg: "/images/javaScriptIcon.png",
        name: "JavaScript",
      },

      {
        iconImg: bootstrapIcon,
        name: "Bootstrap",
      },
    ],
    img: rumbleStoreCover,
    pageLink: "https://mauperez9918.github.io/RumbleStore-JS/",
    code: "https://github.com/mauperez9918/RumbleStore-JS",
  },
];
