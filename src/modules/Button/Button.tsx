import React, { ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${style.button} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

export default Button;
