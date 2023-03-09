 import React from 'react'
 import Testimonialelement from  './Testimonialsprops';
 

function Testimonials(){
    return (
    <>

    <span className='Testimonialspan'><h3 className='Testimonialheading'>Jagriti Convenors</h3></span>
        
       
    <div className='Testimonialsdiv'>
    <Testimonialelement
    name="UTKARSH SRIVASTAVA" 
    post="CONVENOR"
    />

     <Testimonialelement 
    name="UTKARSH SRIVASTAVA" 
    post="CO CONVENOR"
    />
    <Testimonialelement 
    name="UTKARSH SRIVASTAVA" 
    post="CO CONVENOR"
    />
    </div>
    

    <span className='Testimonialspan'><h3 className='Testimonialheading'>General Secretary</h3></span>

    <div className='Testimonialsdiv'>
    <Testimonialelement 
    name="UTKARSH SRIVASTAVA" 
    post="CONVENOR"
    />

    <Testimonialelement 
    name="UTKARSH SRIVASTAVA" 
    post="CO CONVENOR"
    />
    <Testimonialelement 
    name="UTKARSH SRIVASTAVA" 
    post="CO CONVENOR"
    />
    </div>
    </>
    );
}
export default Testimonials;