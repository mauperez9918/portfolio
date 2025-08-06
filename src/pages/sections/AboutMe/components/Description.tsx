import cv from "../../../../assets/cv/Mauricio-Perez.pdf";

const Description = () => {
  return (
    /* Description Container */
    <div className="flex flex-col justify-between">
      <p className="text-justify">
        Desarrollador full stack con experiencia en e-commerce y plataformas
        personalizadas. Especializado en React, Node.js y Firebase, con enfoque
        en código limpio y escalable. Trabajo de manera colaborativa para crear
        soluciones eficientes y optimizadas, priorizando la experiencia del
        usuario y el rendimiento del producto. Me capacito continuamente para
        mejorar mis habilidades y aportar valor a cada proyecto.
      </p>

      <a
        className="mx-auto w-3/5 sm:w-2/5 h-12  lg:w-2/5 mt-5 hover:scale-105 font-semibold transition-all"
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full h-full">Ver Curriculum</button>
      </a>
    </div>
  );
};

export default Description;
