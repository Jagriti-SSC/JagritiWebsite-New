import React from 'react'
import "./CAPage.css"
import CAForm from '../../components/CA Form/Ca-Form'

//FIXME: remove navheight if not required 

const CAPage = ({navHeight}) => {
  return (
    <div style={{height:'90vh',position:'relative'}}><CAForm navHeight={navHeight}/></div>
    // <div>hi</div>
  )
}

export default CAPage