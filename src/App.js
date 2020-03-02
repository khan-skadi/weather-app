import React, { Fragment, useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Hourly from "./components/Hourly";
import About from "./components/About";
import Preloader from "./components/Preloader";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    M.AutoInit();
    setLoading(true);
    getWeather();

    //eslint-disable-next-line
  }, []);

  const text = useRef("");

  const onChange = () => {
    setInput(text.current.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getWeather(input);
    setLoading(false);
    setInput("");
  };

  const getWeather = async input => {
    const apiKey = "d7c859b227a5e86abcd30697f4c17f80";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input ||
      "Skopje"}&units=metric&APPID=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    setWeatherData(data);
    setLoading(false);
  };

  // Find average temperature today
  let temp = 0;
  temp = weatherData && weatherData.list.map(e => (temp += e.main.temp));
  let averageTemp = temp && (temp[39] / temp.length).toFixed(2);

  // Find average humidity today
  let humidity = 0;
  humidity =
    weatherData && weatherData.list.map(e => (humidity += e.main.humidity));
  let averageHumidity = humidity && (humidity[39] / humidity.length).toFixed(2);

  // Find highest temp
  let highestTemp = 0;
  highestTemp =
    weatherData &&
    weatherData.list.map(e =>
      highestTemp < e.main.temp_max ? (highestTemp = e.main.temp_max) : null
    );
  let highestTempArr =
    temp &&
    Object.keys(highestTemp).map(function(key) {
      return highestTemp[key];
    });
  let max = Math.max.apply(null, highestTempArr);

  // Find lowest temp
  let lowestTemp = max;
  lowestTemp =
    weatherData &&
    weatherData.list.filter(e =>
      lowestTemp > e.main.temp_min ? (lowestTemp = e.main.temp_min) : null
    );
  let lta = lowestTemp && lowestTemp.map(e => e.main.temp_min);
  let ltaa = lta && Math.min(...lta);

  // Find highest humidity
  let highestHumidity =
    weatherData && weatherData.list.map(e => e.main.humidity);
  let highestHumidArr =
    highestHumidity &&
    Object.keys(highestHumidity).map(function(key) {
      return highestHumidity[key];
    });
  let highestHumid = Math.max.apply(null, highestHumidArr);

  // Find lowest humidity
  let lowestHumid = Math.min.apply(null, highestHumidArr);

  // Find warmest time of day
  let warmestTimeFind =
    weatherData &&
    weatherData.list.find(e => (e.main.temp === max ? e.dt : null));
  let warmestTime = warmestTimeFind && new Date(warmestTimeFind.dt).toString();

  // Find coldest time of day
  let coldestTimeFind =
    weatherData &&
    weatherData.list.find(e => (e.main.temp === ltaa ? e.dt : null));
  let coldestTime = coldestTimeFind && new Date(coldestTimeFind.dt).toString();
  console.log(weatherData);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar onChange={onChange} onSubmit={onSubmit} text={text} />
        <Switch>
          <Route exact path="/">
            <Statistics
              weatherData={weatherData}
              max={max}
              averageTemp={averageTemp}
              ltaa={ltaa}
              highestHumid={highestHumid}
              averageHumidity={averageHumidity}
              lowestHumid={lowestHumid}
              warmestTime={warmestTime}
              coldestTime={coldestTime}
            />
          </Route>
          <Route path="/hourly">
            <Hourly weatherData={weatherData} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
