import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer blue lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h4 className="white-text">Contact</h4>
            <p
              className="white-text"
              style={{ fontSize: "20px", lineHeight: "10px" }}
            >
              Email:
              <a
                className="tooltipped white-text"
                data-position="top"
                data-tooltip="kartalov.pt@gmail.com"
                href="mailto: kartalov.pt@gmail.com"
              >
                {" "}
                kartalov.pt@gmail.com
              </a>
            </p>
            <p
              className="white-text"
              style={{ fontSize: "20px", lineHeight: "10px" }}
            >
              Phone:
              <a
                className="tooltipped white-text"
                data-position="bottom"
                data-tooltip="Call +38972544622"
                href="tel: +38972544622"
              >
                {" "}
                072 544 622
              </a>
            </p>
          </div>
          <div className="col l6 s12">
            <h4>Social media</h4>
            <ul>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://www.facebook.com/Kartalov"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "14em", marginBottom: "4px" }}
                >
                  <i className="fab fa-facebook left"></i> friend me
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://www.instagram.com/khan_skadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "14em", marginBottom: "4px" }}
                >
                  <i className="fab fa-instagram left"></i>follow
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://twitter.com/Khan_Skadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "14em", marginBottom: "4px" }}
                >
                  <i className="fab fa-twitter left"></i>tweet
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://www.youtube.com/channel/UCKmdUTWFZWuyhSoMjQegKsQ?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "14em", marginBottom: "4px" }}
                >
                  <i className="fab fa-youtube left"></i>subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020 Copyright Kartalov Petar</div>
      </div>
    </footer>
  );
};

export default Footer;
