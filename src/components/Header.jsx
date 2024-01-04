import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleToggleMenu}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyects" onClick={handleToggleMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleToggleMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
