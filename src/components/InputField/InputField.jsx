import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => (
  <label className={styles.label}>
    {props.label}
    <input {...props} className={styles.input} />
  </label>
);

export default InputField;
