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
        <ul>
          <li>
            <a href="#home" onClick={handleToggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleToggleMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#proyects" onClick={handleToggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleToggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
