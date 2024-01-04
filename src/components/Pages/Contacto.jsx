import "../../stylesheets/contacto.css";

import Form from "../form";
function Contacto() {
  return (
    <>
      <div className="contacto-container" id="contact">
        <div className="text-form">
          <h1 className="contacto-title">Contacto</h1>
          <p className="contacto-text">
            Si quieres ponerte en contacto conmigo, puedes hacerlo a través de
            este formulario. ¡Estaré encantada de hablar contigo!
          </p>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Contacto;
