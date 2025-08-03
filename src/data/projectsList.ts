import smartDroneCover from "../assets/img/smartDroneCover.png";
import matildeShowroomCover from "../assets/img/matildeShowroomCover.png";
import { Project } from "../types/Project";

export const projectList: Project[] = [
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
        iconImg: "/images/tailwindCssIcon.png",
        name: "TailwindCss",
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
      "Matilde Showroom es una tienda de moda femenina en Argentina. En colaboración con un equipo de un desarrollador y tres diseñadores, diseñé y desarrollé un sitio web que representa fielmente la marca, respetando su identidad, colores y valores. El proyecto, impulsado por React JS y Tailwind CSS, tuvo como objetivo ampliar el alcance de la tienda, mejorar la interacción con los clientes y contribuir al éxito comercial del negocio.",
    technologies: [
      {
        iconImg: "/images/reactIcon.png",
        name: "ReactJs",
      },
      {
        iconImg: "/images/tailwindCssIcon.png",
        name: "TailwindCss",
      },
      {
        iconImg: "/images/htmlIcon.png",
        name: "HTML",
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
];
