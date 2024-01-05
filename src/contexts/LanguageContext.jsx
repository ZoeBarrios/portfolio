import { createContext, useState } from "react";
import { LANGUAJES } from "../utils/language";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAJES.ESP);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const contextValue = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
