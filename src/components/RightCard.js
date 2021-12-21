import React from "react";
import "/src/style/RightCard.css";
import ChangeCity from "/src/components/LeftCard/ChangeCity.js";
export default function RightCard() {
  return (
    <div className="RightCard">
      <div className="card">
        <ul className="info">
          <li>Percipitation 0%</li>
          <li>Humidity 15%</li>
          <li>wind 13km/h</li>
        </ul>
        <div className="week">
          <ul>
            <li>☀</li>
            <li>Tue</li>
            <li>29C </li>
          </ul>
          <ul>
            <li>☁</li>
            <li>Wed </li>
            <li>20C </li>
          </ul>
          <ul>
            <li>🌧</li>
            <li>Thu </li>
            <li>25C</li>
          </ul>
        </div>{" "}
        <ChangeCity />
      </div>
    </div>
  );
}
