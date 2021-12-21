import React from "react";
import "./RightCard.css";
export default function RightCard() {
  return (
    <div className="RightCard">
      <div className="card">
        <ul>
          <li>Percipitation 0%</li>
          <li>Humidity 15%</li>
          <li>wind 13km/h</li>
        </ul>
        <div className="week">
          <ul>
            <li> </li>
            <li>Tue</li>
            <li>29C </li>
          </ul>
          <ul>
            <li> </li>
            <li>Wed </li>
            <li>20C </li>
          </ul>
          <ul>
            <li> </li>
            <li>Thu </li>
            <li>25C</li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
}
