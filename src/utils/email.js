import { toast } from "react-toastify";
import { TRADUCTION } from "./language";
import emailjs from "@emailjs/browser";

const SERVICE = import.meta.env.VITE_SERVICE;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const SECRET = import.meta.env.VITE_SECRET;

export function sendEmail(e, language) {
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
    () => {
      toast.success(TRADUCTION[language].MESSAGES.SUCCESS, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    },
    () => {
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
