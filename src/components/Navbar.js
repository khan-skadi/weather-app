import React from "react";
import { NavLink } from "react-router-dom";
import sun from "../img/sun.png";

const Navbar = props => {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <form className="left" onSubmit={props.onSubmit}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search by city.."
              ref={props.text}
              onChange={props.onChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>

        <div className="brand-logo center">
          <a href="/">
            <img src={sun} width="60px" alt="" />
          </a>
        </div>
        <ul className="right">
          <li>
            <NavLink to="/" activeStyle={backgroundStyle}>
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink to="/hourly" activeStyle={backgroundStyle}>
              Hourly
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={backgroundStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const backgroundStyle = { backgroundColor: "rgba(0, 0, 0, 0.1)" };

export default Navbar;
