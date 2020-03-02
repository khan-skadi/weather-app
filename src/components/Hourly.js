import React from "react";

const Hourly = props => {
  const { weatherData } = props;

  let icon = weatherData && weatherData.list.map(e => e.weather[0].icon);
  let description =
    weatherData && weatherData.list.map(e => e.weather[0].description);
  let time = weatherData && weatherData.list.map(e => e.dt);
  let temp = weatherData && weatherData.list.map(e => e.main.temp.toFixed(0));
  let humid = weatherData && weatherData.list.map(e => e.main.humidity);
  let windSpeed = weatherData && weatherData.list.map(e => e.wind.speed);
  console.log(time);

  console.log(weatherData);

  return (
    <div>
      <h1>Hourly</h1>
      <table className="striped centered">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Description</th>
            <th>Time</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {icon &&
                icon.map(e => (
                  <div>
                    <img
                      src={`http://openweathermap.org/img/w/${e}.png`}
                      alt=""
                    />
                  </div>
                ))}
            </td>
            <td>
              {description &&
                description.map(e => (
                  <div>
                    <p>{`${e}`}</p>
                  </div>
                ))}
            </td>
            <td>
              {time &&
                time.map(e => (
                  <div>
                    <p>{new Date(e).toString()}</p>
                  </div>
                ))}
            </td>
            <td>
              {" "}
              {temp &&
                temp.map(e => (
                  <div>
                    <p>{e} &deg;C</p>
                  </div>
                ))}
            </td>
            <td>
              {" "}
              {humid &&
                humid.map(e => (
                  <div>
                    <p>{e + "%"}</p>
                  </div>
                ))}
            </td>
            <td>
              {" "}
              {windSpeed &&
                windSpeed.map(e => (
                  <div>
                    <p>{e + "km/h"}</p>
                  </div>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hourly;
