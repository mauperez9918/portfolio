import UseLanguage from "../../../../components/hooks/UseLanguage";
import spanishText from "../../../../data/languages/spanishLanguage.json";
import englishText from "../../../../data/languages/englishLanguage.json";

const Introduction = () => {
  const { lang } = UseLanguage();

  return (
    <div>
      <h1 className="text-center text-primary text-4xl font-semibold font-mainFont mb-2">
        {lang === "es" ? (
          <>
            {spanishText.aboutMe.introduction.welcome} <br />
            {spanishText.aboutMe.introduction.name}
          </>
        ) : (
          <>
            {englishText.aboutMe.introduction.welcome} <br />
            {englishText.aboutMe.introduction.name}
          </>
        )}
      </h1>
    </div>
  );
};

export default Introduction;
