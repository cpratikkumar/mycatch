import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import play from "../Images/google-play.png";
import ios from "../Images/apple.png";
import "../Components/Dropdown.css";

export default function Dropdown() {
  const [isopen, setIsopen] = useState(true);
  const btntoggle = () => {
    setIsopen(!isopen);
  };
  return (
    <div className="dropmenu">
      <button className="bg-success" onClick={btntoggle}>
        Download The App{"  "}
        {isopen ? (
          <i class="fa-solid fa-caret-down"></i>
        ) : (
          <i class="fa-solid fa-caret-up"></i>
        )}
      </button>
      {isopen ? null : (
        <div className="dropli">
          <ul>
            <li>
              <NavLink to="/ios">
                <img src={ios} alt="iOS" /> iOS App Store
              </NavLink>
            </li>
            <li>
              <NavLink to="/play">
                <img src={play} alt="Play Store" /> Google Play Store
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
