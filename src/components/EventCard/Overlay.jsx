import React from 'react'
import {motion} from "framer-motion";
import style from "./Overlay.module.css"

const Overlay = ({children,close}) => {
  const variants = {
    open: { backgroundColor: "#00000099" },
    closed: { backgroundColor: "#00000000" },
  };
  return (
    <motion.div
      className={`overlay`}
      onClick={close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </motion.div>
  )
}

export default Overlay