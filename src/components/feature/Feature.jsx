import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__whatgpt3-features-container__feature">
      <div className="gpt3__whatgpt3-features-container__feature-text">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__whatgpt3-features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
