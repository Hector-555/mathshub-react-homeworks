/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import "./Nav.css";
import burger from "./icons/Rectangle.png";
import NavMenu from "./NavMenu";

function Nav() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showMenu);

  const toggleShowMenu = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <AnimatePresence>
        {show && <NavMenu handleClose={toggleShowMenu} />}
      </AnimatePresence>

      <div className="nav-container">
        <motion.button
          type="button"
          className="nav__menu-btn"
          onClick={toggleShowMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={burger} alt="menu" />
        </motion.button>

        <div className="switch-container">
          <span className="switch-train">TRAIN</span>
          <span className="switch-play">PLAY</span>
          <label id="switch" className="switch">
            <input type="checkbox" id="slider" />
            <span className="slider round" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Nav;
