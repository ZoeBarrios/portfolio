import { motion } from "framer-motion";
import "../stylesheets/biografia.css";
import ButtonsContainer from "./buttons-container";

function Biografia() {
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
        <h1>¡Hola! Soy Zoe Barrios</h1>
        <p>
          Soy desarrolladora con pasión por aprender y crear cosas nuevas. Soy
          una persona que le gusta trabajar en equipo y siempre estoy dispuesta
          a ayudar a los demás.
        </p>
      </div>

      <ButtonsContainer />
    </motion.div>
  );
}

export default Biografia;
