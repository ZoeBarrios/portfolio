import { useState } from "react";
import "../stylesheets/hamburger.css";
import Modal from "./modal";
import { Link } from "wouter";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger">
      <button onClick={handleClick} className="button-hamburger">
        <span className="linea"></span>
        <span className="linea"></span>
        <span className="linea"></span>
      </button>
      <Modal isOpen={isOpen} onClose={handleClick}>
        <Link to="/">
          <span className="hamburger-menu__line">Inicio</span>
        </Link>
        <Link to="/portfolio">
          <span className="hamburger-menu__line">Proyectos</span>
        </Link>
        <Link to="/contacto">
          <span className="hamburger-menu__line">Contacto</span>
        </Link>
      </Modal>
    </div>
  );
};

export default Hamburger;
