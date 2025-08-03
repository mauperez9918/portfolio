import cv from "../../assets/cv/Mauricio-Perez.pdf";
import { contactList } from "../../data/contactList";
import IconTemplate from "./IconTemplate";

const TabletIntroductionContainer = () => {
  return (
    /* Introduction Container */
    <div className="w-[85%] bg-red-500 flex flex-col">
      <div className="w-3/4 md:w-full md:h-[400px] mx-auto h-full flex justify-around">
        <div>
          <div>
            <h2 className="text-center">Bienvenidos!</h2>
            <h3 className="text-center">Soy Mauricio Perez</h3>
          </div>

          {/* Description Container */}
          <div className="flex flex-col justify-between">
            <p className="text-justify">
              Desarrollador full stack con experiencia en e-commerce y
              plataformas personalizadas. Especializado en React, Node.js y
              Firebase, con enfoque en código limpio y escalable. Trabajo de
              manera colaborativa para crear soluciones eficientes y
              optimizadas, priorizando la experiencia del usuario y el
              rendimiento del producto. Me capacito continuamente para mejorar
              mis habilidades y aportar valor a cada proyecto.
            </p>

            <button className="w-3/5 sm:w-2/5 h-12 mx-auto lg:w-2/5 mt-5 hover:scale-105 font-semibold transition-all">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                Ver Curriculum
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletIntroductionContainer;
