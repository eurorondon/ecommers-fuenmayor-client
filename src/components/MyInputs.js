import React from "react";
import { useState } from "react";
import { Colors } from "../utils/colors";

export default function MyInputs({ label, value, onChange, secureTextEntry }) {
  return (
    <div style={styles.container}>
      <input
        type={secureTextEntry ? "password" : "text"}
        placeholder={label}
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 10,
    border: `1px solid ${Colors.primary}`,
  },
  input: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
  },
};
