import React from "react";
import "/src/style/LeftCard.css";
import "/src/components/RightCard/ChangeCity";

export default function LeftCard(props) {
  return (
    <div className="leftCard">
      <div className="card">
        <h2> Tuesday</h2>
        <p> 15 jan 2019</p>
        <p> paris </p>
        <h3> ☀ </h3>
        <h1> 21 C </h1>
        <h5>sunny</h5>
      </div>
    </div>
  );
}
