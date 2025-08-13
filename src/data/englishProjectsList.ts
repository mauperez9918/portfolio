import smartDroneCover from "../assets/img/smartDroneCover.webp";
import matildeShowroomCover from "../assets/img/matildeShowroomCover.webp";
import rumbleStoreCover from "../assets/img/rumbleStoreCover.webp";
import schwarzLaboratoriesCover from "../assets/img/schwarzLaboratoriesCover.webp";
import firebaseIcon from "../assets/icon/firebaseIcon.png";
import bootstrapIcon from "../assets/icon/bootstrapIcon.png";
import cssIcon from "../assets/icon/cssIcon.png";
import { Project } from "../types/Project";

export const englishProjectList: Project[] = [
  {
    id: 1,
    name: "SmartDrone",
    description:
      "I developed the SmartDrone website to showcase the products and services of a Uruguayan electronics company specialized in technical support for a variety of devices. I used technologies such as HTML, CSS, JavaScript, SwiperJS, and Tailwind CSS to create a smooth and visually appealing user experience. I ensured the codebase was well-structured, SEO-optimized, and designed for high performance and visibility.",
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
      "Matilde Showroom is a women’s fashion store in Argentina. In collaboration with a team consisting of one developer and three designers, I designed and developed a website that faithfully represents the brand, respecting its identity, colors, and values. Powered by React JS and Tailwind CSS, the project aimed to expand the store’s reach, improve customer interaction, and contribute to the business’s commercial success. This development was carried out as part of a training course in an educational institution, allowing me to apply technical knowledge in a real-world environment. Access to the source code is being shared only with the client’s consent.",
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
    name: "Schwarz Laboratories (IN DEVELOPMENT)",
    description:
      "Schwarz is a Panamanian industry company specialized in pneumatics. I developed an e-commerce model without a payment gateway, whose main objective was to modernize the company’s old website and allow customers to request product quotations directly from the platform. Users can add products to a cart and, through a form, send their request to receive the quotation by email, as prices are not publicly displayed at the client’s request. The project is currently in development, so some functionalities are pending completion or improvement.",
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
        name: "Firebase",
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
      "Rumble Store is an e-commerce developed as a personal project using HTML, CSS, and pure JavaScript without frameworks or backend. I implemented a fully functional shopping cart system with localStorage support, dynamic product updates, and automatic total calculations. The design is responsive and focuses on a smooth user experience. This project was my first approach to web development and allowed me to understand the fundamentals of the DOM, event handling, and the logic behind an online store.",
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
