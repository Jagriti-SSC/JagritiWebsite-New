import { VerticalTimeline }  from 'react-vertical-timeline-component';
import TimelineElement from './Timelineprops';

function Timeline(){
    return(
      <div>
      <span className='TimelineSpan' ><h3 className='TimelineHeading'>Timeline</h3></span>

<VerticalTimeline>
  
<TimelineElement  
heading1 = "Art Director"
heading2 = "Miami, FL"
content  = "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"/>
<TimelineElement  
heading1 = "Art Director"
heading2 = "Miami, FL"
content  = "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"/>
<TimelineElement  
heading1 = "Art Director"
heading2 = "Miami, FL"
content  = "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"/>
<TimelineElement  
heading1 = "Art Director"
heading2 = "Miami, FL"
content  = "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"/>
<TimelineElement  
heading1 = "Art Director"
heading2 = "Miami, FL"
content  = "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"/>
</VerticalTimeline>
</div>
    )
}

export default Timeline;