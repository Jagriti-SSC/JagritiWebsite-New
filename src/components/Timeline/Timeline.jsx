import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { FlagFill } from "@styled-icons/bootstrap/FlagFill";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";

function Timeline() {
  return (
    <div className="timeline">
      <h3 className="TimelineSpan">Timeline</h3>

      <VerticalTimeline lineColor="#969696">
        {/* START */}
        <VerticalTimelineElement
          className="box box-filled"
          iconClassName="icon-outline"
          icon={<FlagFill />}
        >
          <h3 className="title title-center">Jagriti'26 begins</h3>
          <p className="timeline-content">
            <b className="timeline-date">5-02-2026:</b>
            <li>Theme launch</li>
          </p>
        </VerticalTimelineElement>

        {/* DAY 1 */}
        <VerticalTimelineElement
          className="box box-bordered"
          iconClassName="icon-filled"
          icon={<FlagFill />}
        >
          <h3 className="title"><b>Day 1: 6-02-2026</b></h3>
          <p className="timeline-content">
            <li>09:00 - 12:00: Institute Visit (By Sayhog)</li>
            <li>13:30 - 16:30: Institute Visit (By Sayhog)</li>
            <li>17:00 - 19:00: Guest Talk: Grp Cpt Angad Pratap</li>
            <li>18:30 - 20:30: Jamming</li>
          </p>
        </VerticalTimelineElement>

        {/* DAY 2 */}
        <VerticalTimelineElement
          className="box box-filled"
          iconClassName="icon-outline"
          icon={<FlagFill />}
        >
          <h3 className="title"><b>Day 2: 7-02-2026</b></h3>
          <p className="timeline-content">
            <li>10:00 - 12:00: Hackathon + Impactify + Policy Simulation + Reform</li>
            <li>10:30 - 12:30: Guest Talk: IAS Sonal Goel</li>
            <li>13:30 - 16:30: Hackathon + Impactify + Policy Simulation</li>
            <li>15:00 - 17:00: Guest Talk: Mohit Tyagi</li>
            <li>16:30 - 19:30: Resonance</li>
          </p>
        </VerticalTimelineElement>

        {/* DAY 3 */}
        <VerticalTimelineElement
          className="box box-bordered"
          iconClassName="icon-filled"
          icon={<FlagFill />}
        >
          <h3 className="title"><b>Day 3: 8-02-2026</b></h3>
          <p className="timeline-content">
            <li>10:00 - 12:00: Impact-Metrics + Strat Impact + Voice of Changes</li>
            <li>10:30 - 12:30: Guest Talk: Capt. Akhilesh Saxena</li>
            <li>13:30 - 16:30: Impact-Metrics + Strat Impact</li>
            <li>16:00 - 18:00: Guest Talk: Dr. Kiran Bedi</li>
            <li>16:30 - 19:30: Closing Ceremony + Prize Distribution</li>
          </p>
        </VerticalTimelineElement>

        {/* END */}
        <VerticalTimelineElement
          iconClassName="icon-outline"
          icon={<CheckCircleFill />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
