import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: -1000, transition: { duration: 0.5 } }}
        >
          <div className="modal-content">
            <button onClick={onClose} className="button-modal">
              <span className="linea1"></span>
              <span className="linea2"></span>
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("root")
  );
};

export default Modal;
