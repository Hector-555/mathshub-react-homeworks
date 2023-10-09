import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Overlay from "./Overlay";
import "./NavMenu.css";
import cross from "./icons/cross.png";

const navMenuAnimation = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 2.5,
    },
  },
};

function NavMenu({ handleClose }) {
  return (
    <Overlay onClick={handleClose}>
      <motion.div
        className="nav-menu"
        variants={navMenuAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          type="button"
          className="close-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={cross} alt="menu" />
        </motion.button>
        <ul>
          <li>
            <Link to="/" className="nav-menu__link">
              Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/actions-1"
              className="nav-menu__link"
            >
              Action (set A)
            </Link>
          </li>
          <li>
            <Link
              to="/actions-2"
              className="nav-menu__link"
            >
              Action (set B)
            </Link>
          </li>
          <li>
            <Link
              to="/animals-1"
              className="nav-menu__link"
            >
              Animals (set A)
            </Link>
          </li>
          <li>
            <Link
              to="/animals-2"
              className="nav-menu__link"
            >
              Animals (set B)
            </Link>
          </li>
          <li>
            <Link
              to="/clothes"
              className="nav-menu__link"
            >
              Clothes
            </Link>
          </li>
          <li>
            <Link
              to="/emotions"
              className="nav-menu__link"
            >
              Emotions
            </Link>
          </li>
        </ul>
        <button type="button" className="login-btn">
          Login
        </button>
      </motion.div>
    </Overlay>
  );
}

export default NavMenu;
