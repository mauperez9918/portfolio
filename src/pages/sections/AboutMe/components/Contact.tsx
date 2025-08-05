import { contactList } from "../../../../data/contactList";
import Socials from "./Socials";

const Contact = () => {
  return (
    /* Contact Container */
    <div className="flex flex-col h-[200px] mt-6">
      <h3 className="w-full my-2 ml-1 text-center">Contáctame</h3>
      <ul className="w-full grid grid-cols-1 gap-4 justify-center items-center">
        {contactList.map((contact) => {
          return (
            <Socials
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
  );
};

export default Contact;
