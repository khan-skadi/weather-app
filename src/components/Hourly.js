import React from "react";
import Moment from "react-moment";
import Preloader from "./Preloader";

const Hourly = props => {
  const { weatherData } = props;

  if (!weatherData) {
    return <Preloader />;
  }

  return (
    <div className="container">
      <h2 className="center">Hourly stats</h2>
      <div className="divider"></div>

      <h3 className="center blue-grey-text" style={{ marginBottom: "50px" }}>
        {weatherData && weatherData.city.name}
      </h3>
      <table className="striped centered">
        <thead>
          <tr className="flow-text">
            <th>Icon</th>
            <th>Description</th>
            <th>Time</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>

        <tbody>
          {weatherData &&
            weatherData.list.map(e => (
              <tr className="flow-text" key={e.dt}>
                <td>
                  <img
                    src={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`}
                    alt=""
                  />
                </td>
                <td>{e.weather[0].description}</td>
                <td>
                  <Moment format="MMMM Do YYYY, h:mm:ss a">{e.dt}</Moment>
                </td>
                <td>{e.main.temp.toFixed(0)}&deg;C</td>
                <td>{e.main.humidity}%</td>
                <td>{e.wind.speed} km/h</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hourly;
