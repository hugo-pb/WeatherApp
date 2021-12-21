import React from "react";
import "./style/styles.css";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-2"> </div>
        <div className="col-sm-5">
          <LeftCard />
        </div>
        <div className="col-sm-3">
          <RightCard />
        </div>
        <div className="col-sm-2"> </div>
      </div>
    </div>
  );
}
