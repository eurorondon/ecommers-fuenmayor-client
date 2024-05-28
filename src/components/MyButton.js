import React from "react";
import { Colors } from "../utils/colors";

export default function MyButton({
  title,
  onPress,
  variant = "primary",
  style,
  otherProps,
}) {
  return (
    <button
      style={{ ...styles[variant], ...style }}
      onClick={onPress}
      {...otherProps}
    >
      <span style={styles.buttonText}>{title}</span>
    </button>
  );
}

const styles = {
  primary: {
    width: "100%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.ligth,
  },
  secondary: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.secondary,
    padding: 10,
    marginBottom: 10,
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
