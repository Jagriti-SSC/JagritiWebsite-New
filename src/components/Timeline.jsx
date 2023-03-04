import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css"
import FlagIcon from '@mui/icons-material/Flag';

function Timeline(){
    return(
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
   icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#dda15e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #dda15e' }}
    date="2011 - present"
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#dda15e', color: '#fff' }}
    icon={<FlagIcon />}
 
  />
</VerticalTimeline>
    )
}

export default Timeline;