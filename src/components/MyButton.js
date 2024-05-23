import React from "react";
import { Colors } from "../utils/colors";

export default function MyButton({ title, onPress, variant = "primary" }) {
  return (
    <button style={styles[variant]} onClick={onPress}>
      <span style={styles.buttonText}>{title}</span>
    </button>
  );
}

const styles = {
  primary: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.ligth,
  },
  secondary: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.secondary,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.dark,
  },
  buttonText: {
    // color: Colors.ligth,
    fontSize: 16,
    fontWeight: "bold",
  },
};
