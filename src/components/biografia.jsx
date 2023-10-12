import { motion } from "framer-motion";
import "../stylesheets/biografia.css";

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
      variants={containerVariants}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <h1>¡Hola! Soy Zoe Barrios</h1>
      <p>
        Soy estudiante de la Tecnicatura Universitaria en Programación de la UTN
        y me apasiona la tecnología. Mi pasión por la programación me ha llevado
        a adquirir conocimientos tanto en el desarrollo frontend como en el
        backend. Mi objetivo es crear soluciones tecnológicas innovadoras que
        hagan que la vida de las personas sea más fácil y emocionante.
      </p>
    </motion.div>
  );
}

export default Biografia;
