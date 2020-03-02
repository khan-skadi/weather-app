import React from "react";

const Statistics = props => {
  return (
    <div>
      <ul className="with-header">
        <li className="collection-header center">
          <h2>Weather Today</h2>
          <h5>awesome weather app</h5>
        </li>
        <div className="divider"></div>
      </ul>

      <h3 className="center blue-grey-text" style={{ marginBottom: "50px" }}>
        {props.weatherData && props.weatherData.city.name}
      </h3>
      <table className="striped centered">
        <thead>
          <tr>
            <th>Highest Temp</th>
            <th>Average Temp</th>
            <th>Lowest Temp</th>
            <th>Highest Humidity</th>
            <th>Average Humidity</th>
            <th>Lowest Humidity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{props.max} &deg;C</td>
            <td>{props.averageTemp} &deg;C</td>
            <td>{props.ltaa} &deg;C</td>
            <td>{props.highestHumid}</td>
            <td>{props.averageHumidity}</td>
            <td>{props.lowestHumid}</td>
          </tr>
        </tbody>
      </table>

      <div className="row">
        <div className="col s12 center">
          <h5>
            {" "}
            <span className="grey-text">
              {" "}
              Warmest time of the following period:
            </span>{" "}
            {props.warmestTime}
          </h5>
          <h5>
            {" "}
            <span className="grey-text">
              Coldest time of the following period:
            </span>{" "}
            {props.coldestTime}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
