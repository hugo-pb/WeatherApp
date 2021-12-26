import React, { useState } from "react";
import "/src/style/ChangeCity.css";
import "/src/components/LeftCard";
import "/src/components/RightCard";
import "/src/App";
export default function ChangeCity() {
  let [city, setCity] = useState("");

  function newCity(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form className="ChangeCity" onSubmit={newCity}>
      <input
        type="search"
        placeholder="      Change City"
        onChange={updateCity}
      />
      <input type="submit" />
    </form>
  );
}
