/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";
import "./Overlay.css";

function Overlay({ children, onClick }) {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Overlay;
