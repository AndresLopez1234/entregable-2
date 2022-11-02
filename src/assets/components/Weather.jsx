import React, { useState } from "react";
import UseWeather from "../hooks/UseWeather";

const weather = () => {
  const { time, temperatura } = UseWeather();
  const [celsius, setCelsius]= useState(true)
  const click = ()=> setCelsius(!celsius)
 

  return (
    <div>
      <h1>Weather App</h1>
      <h2>
        {time.name}, {time.sys?.country}
      </h2>
      <p>"{time.weather?.[0].description}"</p>
      <div className="conteiner">
        <img
          src={` http://openweathermap.org/img/wn/${time.weather?.[0].icon}@2x.png`}
          alt=""
        />
        <div className="stile">
          <h4>
            Temperatura: <a>{celsius? temperatura?.celsius : temperatura?.farenheit}</a>
          </h4>
          <h4>
            Humidity: <a>{time.main?.humidity}%</a>{" "}
          </h4>
          <h4>
            Clouds: <a>{time.clouds?.all}%</a>{" "}
          </h4>
          <h4>
            Pressure: <a>{time.main?.pressure} PSI</a>{" "}
          </h4>
        </div>
      </div>

      <button onClick={click}>{celsius ? "Temp to °F": "Temp to °C" }</button>
    </div>
  );
};

export default weather;
