import React from "react";
import { Link, NavLink } from "react-router-dom";
import sun from "../img/sun.png";

const Navbar = props => {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <form className="left valign-wrapper" onSubmit={props.onSubmit}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search by city.."
              ref={props.text}
              onChange={props.onChange}
              required
              style={{ width: "20em" }}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
          <button
            className="btn waves-effect waves-light valign-wrapper yellow darken-2"
            type="submit"
            name="action"
            style={{ marginLeft: "5px" }}
          >
            Submit
            <i class="material-icons right" style={{ marginTop: "-14px" }}>
              send
            </i>
          </button>
        </form>

        <Link to="/">
          <div className="brand-logo center">
            <img src={sun} width="60px" alt="" />
          </div>
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/" activeStyle={backgroundStyle}>
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
