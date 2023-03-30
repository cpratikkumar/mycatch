import React from "react";
import "../Components/Introbox.css";
export default function Introbox({ para, name, sur }) {
  return (
    <div className="cardbody">
      <p>{para}</p>
      <div className="emp"></div>
      <h3>{name}</h3>
      <p>{sur}</p>
    </div>
  );
}
