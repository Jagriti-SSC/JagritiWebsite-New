import React from 'react'
import style from "./preloader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Preloader = (props) => {
  const color = "#000000"
  return (
    <div className = {`preloader`} >
      <ClipLoader  
        color= {color}
        loading={props.loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Preloader;