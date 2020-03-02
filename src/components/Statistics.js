import React from "react";
import Moment from "react-moment";

const Statistics = props => {
  return (
    <div className="container">
      <h2 className="center">Weather Today</h2>
      <h5 className="center">Poor man's weather app &copy;</h5>
      <div className="divider"></div>

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
            <td>{props.highestHumid} %</td>
            <td>{props.averageHumidity} %</td>
            <td>{props.lowestHumid} %</td>
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
            <Moment format="MMMM Do YYYY, h:mm:ss a">
              {props.warmestTime}
            </Moment>
          </h5>
          <h5>
            {" "}
            <span className="grey-text">
              Coldest time of the following period:
            </span>{" "}
            <Moment format="DMMMM Do YYYY, h:mm:ss a">
              {props.coldestTime}
            </Moment>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
