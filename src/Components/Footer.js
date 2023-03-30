import React from "react";
import fish from "../Images/fish.png";

import "../Components/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="upperfoot">
        <div className="lfoot">
          <img src={fish} alt="img" />
        </div>
        <div className="rfoot">
          <div className="llfoot">
            <h4>Get In Touch</h4>
            <span>
              <img src="https://mycatch.ca/assets/icons/mail.svg" alt="img" />{" "}
              sean@anglersatlas.com
            </span>
          </div>
          <div className="rrfoot">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="/">
                  <img
                    src="https://mycatch.ca/assets/icons/facebook.svg"
                    alt="img"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://mycatch.ca/assets/icons/instagram.svg"
                    alt="img"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://mycatch.ca/assets/icons/youtube.svg"
                    alt="img"
                  />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="blank"></div>
      <p>c 2021 MyCatch.All rights reserved</p>
    </div>
  );
}
