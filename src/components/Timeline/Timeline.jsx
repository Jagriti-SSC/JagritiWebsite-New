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
          <h3 className="title text-center">Jagriti'25 begins</h3>
          <p className="timeline-content">
            <b className="block mb-3">10-01-2025:</b>
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
          <h3 className="title"><b>Day 1: 17-01-2025</b></h3>
          <p className="timeline-content">
            <b></b>
            <li>09:00 - 17:00: Workshops</li>
            <li>17:00 - 18:00: Guest Talk: Lt. Gen. DP Pandey</li>
            <li>18:30 - 19:30: Opening Ceremony</li>
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
          <h3 className="title"><b>Day 2: 18-01-2025</b></h3>
          <p className="timeline-content">
            <b></b>
            <li>07:00 - 09:00: Marathon</li>
            <li>11:00 - 12:00: Guest Talk: Dr Tanu Jain</li>
            <li>12:30 - 17:30: Strat-Impact/Manthan Minds/AI Hackathon</li>
            <li>17:00 - 18:00: Guest Talk: Dr Tanu Jain</li>
            <li>18:30 - 19:00: Nukkad Natak</li>
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
          <h3 className="title"><b>Day 3: 19-01-2025</b></h3>
          <p className="timeline-content">
            {/* timing */}
            <b></b>
              <li>10:00 - 12:00: Treasure Hunt</li>
              <li>13:00 - 14:00: Teach For India</li>
              <li>10:00 - 16:30: Impactify/Impact-Metrics/Art Event/Frames of Change</li>
              <li>17:00 - 18:00: Guest Talk: Neha Agrawal</li>
              <li>18:30 - 19:00: Jamming</li>
              <li>19:00 - 20:30: Closing Ceremony</li>
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
