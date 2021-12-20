import React from "react";
import "./styles.css";
import LeftCard from "./leftCard";
import RightCard from "./rightCard";
export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <LeftCard />
        </div>
        <div className="col-md-6">
          <RightCard />
        </div>
      </div>
    </div>
  );
}
