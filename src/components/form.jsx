import Input from "./input";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value === "") {
        toast.error("Todos los campos son obligatorios", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        return;
      }
    }

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
          toast.success("Mensaje enviado correctamente", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        },
        (error) => {
          toast.error("Error al enviar el mensaje", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      );
    e.target.reset();
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="form-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <ToastContainer />

      <form className="formulario" onSubmit={sendEmail}>
        <h2>Contactáme</h2>
        <Input label="Nombre" type="text" name="from_name" />
        <Input label="Correo" type="email" name="from_email" />

        <div className="container-input">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea type="" id="mensaje" className="textarea" name="message" />
        </div>

        <button className="button-form">Enviar</button>
      </form>
    </motion.div>
  );
}
