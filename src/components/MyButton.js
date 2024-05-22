import React from "react";
import { Colors } from "../utils/colors";

export default function MyButton({ title, onPress }) {
  return (
    <button style={styles.button} onClick={onPress}>
      <span style={styles.buttonText}>{title}</span>
    </button>
  );
}

const styles = {
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.ligth,
    fontSize: 16,
    fontWeight: "bold",
  },
};
