import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css"
import FlagIcon from '@mui/icons-material/Flag';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';


function TimelineElement(props){
    return(

   <VerticalTimelineElement
   className="vertical-timeline-element--work"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
   icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">{props.heading1}</h3>
    <h4 className="vertical-timeline-element-subtitle">{props.heading2}</h4>
    <p>
     {props.content}
    </p>
   </VerticalTimelineElement>

    )
}
export default TimelineElement;