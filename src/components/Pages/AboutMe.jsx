import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "../../stylesheets/aboutme.css";
import { TRADUCTION } from "../../utils/language";
export default function AboutMe() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="info-personal-container animate__fadeIn" id="about">
      <div className="info-personal">
        <div className="info-personal-texto">
          <h2>{TRADUCTION[language].NAV.ABOUT}</h2>
          <p>{TRADUCTION[language].ABOUT.DESCRIPTION}</p>
        </div>
        <div className="biografia__container__image">
          <img src="/img/gif.gif" alt="zoe barrios" />
        </div>
      </div>
    </div>
  );
}
