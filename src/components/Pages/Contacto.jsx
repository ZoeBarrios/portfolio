import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "../../stylesheets/contact.css";
import Form from "../Form";

import { TRADUCTION } from "../../utils/language";
function Contacto() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="contacto-container" id="contact">
        <div className="text-form">
          <h1 className="contacto-title">
            {TRADUCTION[language].CONTACT.TITLE}
          </h1>
          <p className="contacto-text">
            {TRADUCTION[language].CONTACT.DESCRIPTION}
          </p>
        </div>
        <Form language={language} />
      </div>
    </>
  );
}

export default Contacto;
