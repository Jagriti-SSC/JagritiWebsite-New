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
          <h3 className="title">Jagriti'24 begins</h3>
          <p className="timeline-content">
            <b>10th Feb 2024:</b>
            <li>6:00 AM - 7:00 AM: Marathon</li>
            <li>7:00 AM: Theme launch</li>
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
          <h3 className="title"><b>Day 1</b></h3>
          <p className="timeline-content">
            <b>4:00 PM - 6:00 PM:</b>
            <li>DVS Guest Talk</li>
            <b>6:30 PM - 7:30 PM:</b>
            <li>Opening Ceremony</li>
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
          <h3 className="title"><b>Day 2</b></h3>
          <p className="timeline-content">
            <b>10:00 AM - 1:00 PM:</b>
            <li>Treasure Hunt</li>
            <li>Eye Checkup</li>
            <b>12:00 PM - 2:00 PM:</b>
            <li>Beautiful Impact</li>
            <b>2:00 PM - 5:00 PM:</b>
            <li>Policy Challenge</li>
            <li>Social Entrepreneurship</li>
            <li>Guest Talk</li>
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
          <h3 className="title"><b>Day 3</b></h3>
          <p className="timeline-content">
            <b>10:00 AM - 1:00 PM:</b>
              <li>AI Hackathon</li>
              <li>Debate</li>
              <li>Guest Talk</li>
            <b>3:00 PM - 5:00 PM:</b>
              <li>Page Painting</li>
              <li>Guest Talk</li>
            <b>4:00 PM - 6:00 PM:</b>
              <li>Self Defence Workshop</li>
            <b>6:00 PM - 8:00 PM:</b>
              <li>Closing Ceremony</li>
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
