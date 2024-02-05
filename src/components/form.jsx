import Input from "./input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TRADUCTION } from "../utils/language";
import { sendEmail } from "../utils/email";

export default function Form({ language }) {
  return (
    <div className="form-container">
      <ToastContainer />

      <form className="formulario" onSubmit={(e) => sendEmail(e, language)}>
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
    </div>
  );
}
