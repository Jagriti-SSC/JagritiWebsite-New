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
          <h3 className="title">Jagriti was formed</h3>
          <p className="timeline-content">
            Jagriti was formed by the social service council
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
          <h3 className="title">Photography Pre-Event</h3>
          <p className="timeline-content">Testing</p>
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
          <h3 className="title">Photography Pre-Event</h3>
          <p className="timeline-content">Testing</p>
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
          <h3 className="title">Photography Pre-Event</h3>
          <p className="timeline-content">Testing</p>
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
