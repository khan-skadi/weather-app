import React from "react";
import Footer from "./Footer";
import "../App.css";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column"
      }}
    >
      <div className="container" style={{ flex: "1 0 auto" }}>
        <h2 className="center">About us</h2>
        <div className="row">
          <div className="col s12">
            <p className="flow-text">
              This exceedingly accurate weather app is developed by a Seavus
              student Peter Kartalov. It's point is to give you accurate weather
              information for your weekend plans quickly and on the go.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
