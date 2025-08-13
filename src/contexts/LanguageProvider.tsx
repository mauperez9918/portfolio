import { createContext, useState, useMemo } from "react";
import { LanguageContextType } from "./types/languageContextType";
import { LanguageProviderProps } from "./types/languageProviderProps";

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<string>("es");

  const toggle = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const value = useMemo(() => ({ lang, toggle }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
