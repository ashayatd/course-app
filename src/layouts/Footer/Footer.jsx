import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="container-footer w-container">
      <div className="w-row">
        <div className="footer-column w-clearfix w-col w-col-4">
          <img
            src="https://o.remove.bg/downloads/18f2a577-4a1f-4256-aff7-7940d695b8e6/image_2023-07-31_200826193-removebg-preview.png"
            alt=""
            width="40"
            className="failory-logo-image"
          />
          <h3 className="footer-failory-name">Course Factory</h3>
          <p className="footer-description-failory">
            E-Commerce for selling and purchasing learnings
            <br />
          </p>
        </div>
        <div className="footer-column w-col w-col-8">
          <div className="w-row">
            <div className="w-col w-col-8">
              <div className="w-row">
                <div className="w-col w-col-7 w-col-small-6 w-col-tiny-7">
                  <h3 className="footer-titles">Learn</h3>
                  <p className="footer-links">
                    <a href="" target="_blank">
                      <span className="footer-link">
                        Premium Courses
                        <br />
                      </span>
                    </a>
                    <a href="">
                      <span className="footer-link">
                        Free Courses
                        <br />
                      </span>
                    </a>
                    <a href="">
                      <span className="footer-link">Blog</span>
                    </a>
                    <span>
                      <br />
                    </span>
                    <a href="">
                      <span className="footer-link">
                        Entrepreneurial Tools
                        <br />
                      </span>
                    </a>
                    <a href="">
                      <span className="footer-link">
                        Startup News
                        <br />
                      </span>
                    </a>
                    <a href="">
                      <span className="footer-link">Podcast</span>
                    </a>
                    <strong>
                      <br />
                    </strong>
                  </p>
                </div>
                <div className="w-col w-col-5 w-col-small-6 w-col-tiny-5">
                  <h3 className="footer-titles">Mentor?</h3>
                  <p className="footer-links">
                    <a href="">
                      <Link to="/sellerlogin" className="footer-link">
                        Mentor Login
                        <br />
                      </Link>
                    </a>
                    <a href="">
                      <Link to="/sellerregister" className="footer-link">
                        Mentor Register
                        <br />
                      </Link>
                    </a>
                    <a href="">
                      <span className="footer-link"></span>
                    </a>
                    <a href="">
                      <span className="footer-link">
                        Contribute
                        <br />
                      </span>
                    </a>
                    <a href="">
                      <span className="footer-link">FAQ</span>
                    </a>
                    <strong>
                      <br />
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="column-center-mobile w-col w-col-4">
              <h3 className="footer-titles">Follow Us!</h3>
              <a
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg"
                  width="20"
                  alt="Twitter icon"
                />
              </a>
              <a
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg"
                  width="20"
                  alt="Instagram icon"
                />
              </a>
              <a
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbe42e1e6034fdaba46f6_Facebook%20Icon.svg"
                  width="20"
                  alt="Facebook Icon"
                />
              </a>
              <a
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg"
                  width="20"
                  alt="LinkedIn Icon"
                />
              </a>
              <a
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0112f2b6739c9ba0871_Pinterest%20Icon.svg"
                  width="20"
                  alt="Pinterest Icon"
                  className=""
                />
              </a>
              <p className="footer-description">
                Email:{" "}
                <a href="">
                  <strong className="link-email-footer">
                    course.factory@gmail.com
                  </strong>
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
