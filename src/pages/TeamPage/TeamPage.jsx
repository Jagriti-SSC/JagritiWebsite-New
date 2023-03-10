import React from 'react'
import "./TeamPage.css"
import TeamCard from "../../components/TeamCard/TeamCard"
const TeamPage = () => {
  return (
    <div className='teamCardDiv'>
      <TeamCard name="Sample Name" image="https://blogs.mulesoft.com/wp-content/uploads/manu-shakla.jpg" post="Tech Team" gmail="www.gmail.com" linkedin="www.linkedin.com" instagram="www.instagram.com"/>
      
    </div>
  )
}

export default TeamPage