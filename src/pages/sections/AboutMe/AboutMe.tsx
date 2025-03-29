import avatar from "../../../assets/img/avatar.jpg";
import cv from "../../../assets/cv/Mauricio-Perez.pdf";
import { contactList } from "../../../data/contactList";

const AboutMe = () => {
  return (
    <section
      className="w-full h-[550px] flex flex-col my-20 lg:flex-row justify-around text-white"
      id="about"
    >
      {/* Img Container */}
      <div className="max-w-[25%] h-4/5 rounded-lg shadow-lg">
        <img
          className="w-auto h-full object-cover rounded-lg"
          src={avatar}
          alt="Mauricio Perez Avatar"
        />
      </div>

      {/* Introduction Container */}
      <div className="flex flex-col justify-around w-[60%]">
        <div>
          <h1>Bienvenido!</h1>
          <h2 className="text-contrastColor">Mi nombre es Mauricio Perez</h2>
        </div>

        {/* Description Container */}
        <div className="w-full h-1/3 flex flex-col justify-between ">
          <p>
            Desarrollador full stack con experiencia en e-commerce y plataformas
            personalizadas. Especializado en React, Node.js y Firebase, con
            enfoque en código limpio y escalable. Trabajo de manera colaborativa
            para crear soluciones eficientes y optimizadas, priorizando la
            experiencia del usuario y el rendimiento del producto. Me capacito
            continuamente para mejorar mis habilidades y aportar valor a cada
            proyecto.
          </p>

          <button className="w-1/4 h-1/4 mx-auto hover:scale-105 hover:bg-hoverColor hover:text-primary transition-all">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Ver Curriculum
            </a>
          </button>
        </div>

        {/* Contact Container */}
        <div className="w-full h-1/3 flex flex-col">
          <h3 className="w-full my-1">Contact Me</h3>

          <ul className="flex flex-col w-full justify-between">
            {contactList.map((contact) => {
              const Icon = contact.icon;
              return (
                <li className="py-1" key={contact.name}>
                  <Icon /> <span>{contact.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
