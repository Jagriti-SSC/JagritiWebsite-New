import React from 'react'
import "./preloader.css";
import HashLoader from "react-spinners/HashLoader";

const Preloader = (props) => {
  const color = "#eab12f"
  return (
    <div className='preloader'>
      <HashLoader
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