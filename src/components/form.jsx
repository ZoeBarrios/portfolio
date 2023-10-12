import Input from "./input";
import emailjs from "@emailjs/browser";

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e2ljh3l",
        "template_lofw02v",
        e.target,
        "qJMY8iT-W4NhWi-CV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="form-container">
      <form className="formulario" onSubmit={sendEmail}>
        <h1>Contactame</h1>
        <Input label="Correo" type="email" name="from_email" />
        <Input label="Nombre" type="text" name="from_name" />
        <div className="container-input">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea type="" id="mensaje" className="textarea" name="message" />
        </div>

        <button className="button-form">Enviar</button>
      </form>
    </div>
  );
}
