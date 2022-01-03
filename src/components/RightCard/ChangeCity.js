import React, { useState } from "react";
import "/src/style/ChangeCity.css";
import "/src/components/LeftCard";
import "/src/components/RightCard";
import "/src/App";
import axios from "axios";
export default function ChangeCity() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c69faf9d2df6cf97f08634b08792a39d&units=metric`;

    axios.get(url).then(getTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function getTemperature(r) {
    console.log(r.data);
  }

  return (
    <form className="ChangeCity" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="      Change City"
        onChange={updateCity}
      />
      <input type="submit" />
    </form>
  );
}
