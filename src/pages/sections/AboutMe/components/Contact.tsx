import { contactList } from "../../../../data/contactList";
import spanishText from "../../../../data/languages/spanishLanguage.json";
import englishText from "../../../../data/languages/englishLanguage.json";
import Socials from "./Socials";
import UseLanguage from "../../../../components/hooks/UseLanguage";

const Contact = () => {
  const { lang } = UseLanguage();

  return (
    /* Contact Container */
    <div className="flex flex-col w-full lg:h-auto mt-6">
      <h3 className="w-full my-2 ml-1 text-center">
        {lang === "es"
          ? spanishText.aboutMe.contact.title
          : englishText.aboutMe.contact.title}
      </h3>
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
