import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./timelines.scss";

const Timelines = () => {
  return (
    <div className="timeline-page">
      <h3>Activity Timeline</h3>
      <Timeline align="left" className="timeline">
        <TimelineItem sx={{ flex: 0.2 }}>
          <TimelineOppositeContent
            style={{ maxWidth: "1px", paddingLeft: "0px", paddingRight: "0px" }}
          />
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="title-flex">
              <p>8 Invoices have been paid</p>
              <span>Wednesday</span>
            </div>
            <TimelineContent>
              Invoices have been paid to the company.
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            style={{ maxWidth: "1px", paddingLeft: "0px", paddingRight: "0px" }}
          />
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="title-flex">
              <p>Create a new project for client 😎</p>
              <span>April 18, 2022</span>
            </div>
            <TimelineContent>
              Invoices have been paid to the company.
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            style={{ maxWidth: "1px", paddingLeft: "0px", paddingRight: "0px" }}
          />
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="title-flex">
              <p>Order #37745 from September</p>
              <span>January 10, 2022</span>
            </div>
            <TimelineContent>
              Invoices have been paid to the company.
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            style={{ maxWidth: "1px", paddingLeft: "0px", paddingRight: "0px" }}
          />
          <TimelineSeparator>
            <TimelineDot color="warning" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="title-flex">
              <p>Public Meeting</p>
              <span>September 30, 2021</span>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Timelines;
