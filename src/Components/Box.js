import React from "react";

import "../Components/Box.css";

export default function Box({ image, title, para }) {
  return (
    <div className="boxbody">
      <span>{image}</span>
      <h4>{title}</h4>
      <p>{para}</p>
    </div>
  );
}
