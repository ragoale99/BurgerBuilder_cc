import React from "react";
import "./BuildControl.css";

export default function BuildControl(props) {
  return (
    <div className="build-control">
      <div className="label">{props.label}</div>
      <button
        className="less"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Togli
      </button>
      <button className="more" onClick={props.added}>
        Metti
      </button>
    </div>
  );
}
