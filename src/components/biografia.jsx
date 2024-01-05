import { motion } from "framer-motion";
import "../stylesheets/biografia.css";
import ButtonsContainer from "./buttons-container";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { TRADUCTION } from "../utils/language";

function Biografia() {
  const { language } = useContext(LanguageContext);
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="biografia"
      initial="hidden"
      animate="visible"
      id="biografia"
      variants={containerVariants}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <div className="bio-texto">
        <div>
          <p className="title">{TRADUCTION[language].BIO.TITLE}</p>
        </div>
        <p>{TRADUCTION[language].BIO.DESCRIPTION}</p>
      </div>

      <ButtonsContainer />
    </motion.div>
  );
}

export default Biografia;
