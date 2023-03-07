import React, { useState } from 'react'
import Dropdown from './Dropdown/Dropdown'

const TeamPage = () => {
  const[selected, setSelected]= useState("Convenors");
  return (
    <div>
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default TeamPage
