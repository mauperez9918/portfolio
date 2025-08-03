import cv from "../../../assets/cv/Mauricio-Perez.pdf";
import { contactList } from "../../../data/contactList";
import IconTemplate from "../../../components/common/IconTemplate";
import avatar from "../../../assets/img/avatar.webp";
import TabletIntroductionContainer from "../../../components/common/TabletIntroductionContainer";

const AboutMe = () => {
  return (
    <section
      className="w-full md:h-[600px] lg:h-[600px] py-10 px-5 flex flex-col gap-6 mb-10 md:flex-row lg:bg-transparent lg:border-none items-center text-black bg-white border-b-[1px] border-primary/30 rounded-b-lg"
      id="about"
    >
      {/* Img Container */}
      <div className="lg:h-[600px] xs:w-[65%] rounded-lg shadow-lg border-[1px] border-primary/30">
        <img
          className="w-full h-auto lg:w-auto lg:h-full object-cover rounded-lg"
          src={avatar}
          alt="Mauricio Perez Avatar"
        />
      </div>

      {/* Introduction Container */}
      <div className="w-3/4 md:w-full md:h-[400px] mx-auto h-full flex flex-col justify-around">
        <div>
          <h2 className="text-center">Bienvenidos!</h2>
          <h3 className="text-center">Soy Mauricio Perez</h3>
        </div>

        {/* Description Container */}
        <div className="flex flex-col justify-between">
          <p className="text-justify">
            Desarrollador full stack con experiencia en e-commerce y plataformas
            personalizadas. Especializado en React, Node.js y Firebase, con
            enfoque en código limpio y escalable. Trabajo de manera colaborativa
            para crear soluciones eficientes y optimizadas, priorizando la
            experiencia del usuario y el rendimiento del producto. Me capacito
            continuamente para mejorar mis habilidades y aportar valor a cada
            proyecto.
          </p>

          <button className="w-3/5 sm:w-2/5 h-12 mx-auto lg:w-2/5 mt-5 hover:scale-105 font-semibold transition-all">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Ver Curriculum
            </a>
          </button>
        </div>

        {/* Contact Container */}
        <div className="flex flex-col h-[200px] mt-6">
          <h3 className="w-full my-2 ml-1 text-center">Contáctame</h3>
          <ul className="w-full grid grid-cols-1  lg:h-10 gap-4 justify-center items-center">
            {contactList.map((contact) => {
              return (
                <IconTemplate
                  key={contact.name}
                  name={contact.name}
                  iconImg={contact.icon}
                  extraClass="bg-white text-black"
                  link={contact.link}
                />
              );
            })}
          </ul>
        </div>
      </div>

      {/* <TabletIntroductionContainer /> */}
    </section>
  );
};

export default AboutMe;
