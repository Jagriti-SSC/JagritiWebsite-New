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
        <VerticalTimelineElement
          className="box"
          contentStyle={{
            background: "#1A589B",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: `7px solid #1A589B`,
          }}
          iconStyle={{
            background: "white",
            color: "#1A589B",
            border: "1px solid #1A589B",
          }}
          icon={<FlagFill style={{ padding: 0 }} />}
        >
          <h3 className="title text-center">Jagriti'26 begins</h3>
          <p className="timeline-content">
            <b className="block mb-3">5-02-2026:</b>
            <li>Theme launch</li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="box"
          contentStyle={{
            border: "1px solid #1A589B",
            color: "#1A589B",
          }}
          contentArrowStyle={{
            borderRight: `7px solid #1A589B`,
          }}
          iconStyle={{
            background: "#1A589B",
            color: "white",
          }}
          icon={<FlagFill style={{ padding: 0 }} />}
        >
          <h3 className="title"><b>Day 1: 6-02-2026</b></h3>
          <p className="timeline-content">
            <b></b>
            <li>09:00 - 12:00: Institute Visit (By Sayhog)</li>
            <li>13:30 - 16:30: Institute Visit (By Sayhog)</li>
            <li>17:00 - 19:00: Guest Talk: Grp Cpt Angad Pratap</li>
            <li>18:30 - 20:30: Jamming</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="box"
          contentStyle={{
            background: "#1A589B",
            // border: "1px solid #1A589B",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: `7px solid #1A589B`,
          }}
          iconStyle={{
            background: "white",
            color: "#1A589B",
            border: "1px solid #1A589B",
          }}
          icon={<FlagFill style={{ padding: 0 }} />}
        >
          <h3 className="title"><b>Day 2: 7-02-2026</b></h3>
          <p className="timeline-content">
            <b></b>
            <li>10:00 - 12:00: Hackathon + Impactify + Policy Simulation + Reform</li>
            <li>10:30 - 12:30: Guest Talk: IAS Sonal Goel</li>
            <li>13:30 - 16:30: Hackathon + Impactify + Policy Simulation </li>
            <li>15:00 - 17:00: Guest Talk: Mohit Tyagi</li>
            <li>16:30 - 19:30: Resonance</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="box"
          contentStyle={{
            // background: "#1A589B",
            border: "1px solid #1A589B",
            color: "#1A589B",
          }}
          contentArrowStyle={{
            borderRight: `7px solid #1A589B`,
          }}
          iconStyle={{
            background: "#1A589B",
            color: "white",
          }}
          icon={<FlagFill style={{ padding: 0 }} />}
        >
          <h3 className="title"><b>Day 3: 8-02-2026</b></h3>
          <p className="timeline-content">
            {/* timing */}
            <b></b>
              <li>10:00 - 12:00: Impact-Metrics + Strat Impact + Voice of Changes + Socio Entrepreneurship</li>
              <li>10:30 - 12:30: Guest Talk: Capt. Akhilesh Saxena</li>
              <li>13:30 - 16:30: Impact-Metrics + Strat Impact + Voice of Changes + Socio Entrepreneurship</li>
              <li>16:00 - 18:00: Guest Talk: Dr. Kiran Bedi</li>
              <li>16:30 - 19:30: Closing Ceremony + Prize Distribution</li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{
            background: "white",
            color: "#1A589B",
            border: "1px solid #1A589B",
          }}
          icon={<CheckCircleFill style={{ padding: 0 }} />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
