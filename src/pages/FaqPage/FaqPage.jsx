import React, { useEffect } from 'react'
import Faq from "../../components/Faq/Faq"

const FaqPage = () => {

  useEffect(() => {
    document.title = "FAQs | Jagriti IIT (BHU)"
  }, [])
  

  return (
    <Faq></Faq>
  )
}

export default FaqPage