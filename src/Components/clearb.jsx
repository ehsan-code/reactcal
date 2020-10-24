import React from "react";
import "./clearb.css";

export const ClearButton = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);
