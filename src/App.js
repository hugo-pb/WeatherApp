import React from "react";
import "./styles.css";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-2"> </div>
        <div className="col-md-5">
          <LeftCard />
        </div>
        <div className="col-md-3">
          <RightCard />
        </div>
        <div className="col-md-2"> </div>
      </div>
    </div>
  );
}
