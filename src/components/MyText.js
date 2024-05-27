import React from "react";
import { Colors } from "../utils/colors";

export default function MyText({ children, type = "body", style, onpress }) {
  return (
    <div onClick={onpress} style={{ ...styles[type], ...style }}>
      {children}
    </div>
  );
}

const styles = {
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
  body: {
    fontSize: 18,
    color: Colors.dark,
  },
  button: {
    fontSize: 18,
    color: "#0000FF",
  },
  caption: {
    fontSize: 14,
    color: Colors.dark,
  },
};
