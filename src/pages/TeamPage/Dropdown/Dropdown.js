import React, { useState } from 'react'
import './Dropdown.css'

const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ["Convenors", "Senior Advisor", "Technology", "UI/UX Design", "Marketing", "Creative Design", "Publicity", "Public Relations", "Hospitality", "Content", "Security", "Decoration", "Social Media", "Club Secreatory"];
    let option = "Convenors"

    return (
        <div>
            <div className='dropdown'>
                <div className="dropdown-btn" onClick={(e) =>
                    setIsActive(!isActive)}>
                    {selected}
                    <i className={isActive ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
                </div>
                {isActive && (
                    <div id={`#${option}`} className="dropdown-content">
                        {options.map((option) => (
                            <div onClick={(e) => {                                 
                                setSelected(option)
                                setIsActive(false)
                            }}
                                className="dropdown-item">
                                {option}
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </div>
    )
}

export default Dropdown
