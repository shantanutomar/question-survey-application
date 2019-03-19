import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../SliderTrackSummary/SliderTrackSummary.css";

const SliderTrackSummary = props => {
  return (
    <>
      <div className="root">
        <div className="centerRoot">
          <span style={{ fontSize: 13, fontFamily: "GibsonSemiBold" }}>
            {/* Below can be passed as a prop */}
            4.9/10
          </span>
        </div>
        {/* Value of now can be passed as a prop */}
        <ProgressBar now={100} className="progress1" />
        <ProgressBar now={40} className="progress2" />
        <ProgressBar now={60} className="progress3" />
        <ProgressBar now={100} className="progress4" />
        <ProgressBar now={50} className="progress5" />
        <ProgressBar now={84} className="progress6" />
        <ProgressBar now={36} className="progress7" />
        <ProgressBar now={60} className="progress8" />
        <ProgressBar now={58} className="progress9" />
        <ProgressBar now={85} className="progress10" />
        <ProgressBar now={78} className="progress11" />
        <ProgressBar now={60} className="progress12" />
      </div>
    </>
  );
};

export default SliderTrackSummary;
