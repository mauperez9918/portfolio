import cv from "../../../../assets/cv/Mauricio Perez-Web-Full-Stack-Dev-EN.pdf";
import UseLanguage from "../../../../components/hooks/UseLanguage";
import spanishText from "../../../../data/languages/spanishLanguage.json";
import englishText from "../../../../data/languages/englishLanguage.json";

const Description = () => {
  const { lang } = UseLanguage();

  return (
    /* Description Container */
    <div className="flex flex-col justify-between">
      {lang === "es" ? (
        <p className="text-justify">
          {" "}
          {spanishText.aboutMe.description.part1}
          <strong>{spanishText.aboutMe.description.strong1}</strong>
          {spanishText.aboutMe.description.part2}{" "}
          <strong>{spanishText.aboutMe.description.strong2}</strong>
          <br />
          <br />
          {spanishText.aboutMe.description.part3}
        </p>
      ) : (
        <p className="text-justify">
          {englishText.aboutMe.description.part1}
          <strong>{englishText.aboutMe.description.strong1}</strong>
          {englishText.aboutMe.description.part2}{" "}
          <strong>{englishText.aboutMe.description.strong2}</strong>
          <br />
          <br />
          {englishText.aboutMe.description.part3}
        </p>
      )}
      {/* CV Button */}
      <a
        className="mx-auto w-3/5 sm:w-2/5 h-12  lg:w-2/5 mt-5 hover:scale-105 font-semibold transition-all"
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full h-full">
          {lang === "es"
            ? spanishText.aboutMe.description.cvButton
            : englishText.aboutMe.description.cvButton}
        </button>
      </a>
    </div>
  );
};

export default Description;
