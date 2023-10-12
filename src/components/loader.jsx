import { motion, AnimatePresence } from "framer-motion";
import gatito from "/img/gatito.png";
import "../stylesheets/loader.css";

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="loader-container">
            <img src={gatito} alt="Gatito cargando" className="loader-image" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
