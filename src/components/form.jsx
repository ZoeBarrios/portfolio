import Input from "./input";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TRADUCTION } from "../utils/language";

export default function Form({ language }) {
  const SERVICE = import.meta.env.VITE_SERVICE;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const SECRET = import.meta.env.VITE_SECRET;
  function sendEmail(e) {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value === "") {
        toast.error(TRADUCTION[language].MESSAGES.FORM_ERROR, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        return;
      }
    }

    emailjs.sendForm(SERVICE, TEMPLATE_ID, e.target, SECRET).then(
      (result) => {
        toast.success(TRADUCTION[language].MESSAGES.SUCCESS, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      },
      (error) => {
        toast.error(TRADUCTION[language].MESSAGES.ERROR, {
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
        <Input
          label={TRADUCTION[language].LABELS.NAME}
          type="text"
          name="from_name"
        />
        <Input
          label={TRADUCTION[language].LABELS.EMAIL}
          type="email"
          name="from_email"
        />

        <div className="container-input">
          <label htmlFor="mensaje">{TRADUCTION[language].LABELS.MESSAGE}</label>
          <textarea type="" id="mensaje" className="textarea" name="message" />
        </div>

        <button className="button-form">
          {TRADUCTION[language].BUTTONS.SEND}
        </button>
      </form>
    </motion.div>
  );
}
