import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { LANGUAJES, TRADUCTION } from "../utils/language";
import arg from "/img/arg.png";
import usa from "/img/usa.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" id="header">
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleToggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <span className="zoe-letter">z</span>
        <ul>
          <li>
            <a href="#home" onClick={handleToggleMenu}>
              {TRADUCTION[language].NAV.HOME}
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleToggleMenu}>
              {TRADUCTION[language].NAV.ABOUT}
            </a>
          </li>
          <li>
            <a href="#proyects" onClick={handleToggleMenu}>
              {TRADUCTION[language].NAV.PROYECTS}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleToggleMenu}>
              {TRADUCTION[language].NAV.CONTACT}
            </a>
          </li>
          <li className="btn-language">
            <div
              onClick={() =>
                changeLanguage(
                  language == LANGUAJES.ENG ? LANGUAJES.ESP : LANGUAJES.ENG
                )
              }
            >
              <img src={language == LANGUAJES.ENG ? usa : arg} alt="flag" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
