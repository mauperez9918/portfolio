import cv from "../../../../assets/cv/Mauricio-Perez.pdf";

const Description = () => {
  return (
    /* Description Container */
    <div className="flex flex-col justify-between">
      <p className="text-justify">
        Mi nombre es Mauricio y soy un{" "}
        <strong>Desarrollador Web Fullstack</strong>. Me considero una persona
        versátil, con gran capacidad analítica para realizar tareas y una
        excelente habilidad de comunicación. Preparado para aportar mis
        conocimientos y habilidades, contribuyendo activamente a la mejora
        continua de los procesos, proyectos y equipos. Busco un entorno donde
        pueda crecer tanto a nivel personal como profesional, ayudando a
        alcanzar las metas laborales de manera eficiente y efectiva. Tengo
        experiencia en E-commerce y plataformas personalizadas.{" "}
        <strong>
          Especializado en React, Node.js, MongoDB y Firebase, con enfoque en
          código limpio y escalable
        </strong>
        . <br />
        <br />
        <strong></strong>Tengo facilidad para el trabajo en equipo de modo que
        logremos crear soluciones eficientes y optimizadas, priorizando la
        experiencia del usuario. Me capacito continuamente para mejorar,
        aprender y aportar valor a cada proyecto.
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
