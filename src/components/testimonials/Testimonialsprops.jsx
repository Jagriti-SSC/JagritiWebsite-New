import React from 'react'
import "./Testimonials.css"

function Testimonialelement(props){
  


  return(
            
  <div className='cardbox' >
    <div className='card-content'>
    <h2 className='card-title'>{props.name}</h2>
    <p className='card-body'>{props.post}</p>
    <a href='#' className='buttn'>Learn more                          
    
     </a>
    </div>
</div>




  );
}

export default Testimonialelement;



