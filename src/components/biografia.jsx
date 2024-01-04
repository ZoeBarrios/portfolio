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
        <div>
          <p className="title">Hola, soy Zoe Barrios</p>
        </div>
        <p>
          Apasionada por la tecnología, mi objetivo es transformar ideas en
          productos que impacten positivamente la vida de las personas. Disfruto
          del desafío de convertir conceptos innovadores en soluciones tangibles
          y útiles, aprovechando la tecnología para generar un cambio
          significativo.
        </p>
      </div>

      <ButtonsContainer />
    </motion.div>
  );
}

export default Biografia;
