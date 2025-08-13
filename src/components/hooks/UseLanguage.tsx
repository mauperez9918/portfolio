import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";

export const UseLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("UseLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};

export default UseLanguage;
