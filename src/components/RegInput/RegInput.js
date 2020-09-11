import React, { useState } from "react";

import styles from "./RegInput.module.scss";

const RegInput = ({
  label,
  name,
  type = "text",
  required = false,
  minLength = 0,
  maxlength = 200,
  pattern = ".*",
  title = "",
  error = null,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.inputWrap}>
      <label for={name} className={styles.inputLabel}>
        {label}
      </label>
      {required ? (
        <input
          type={visible ? "text" : type}
          id={name}
          name={name}
          className={styles.regInput}
          minlength={minLength}
          maxLength={maxlength}
          pattern={pattern}
          title={title}
          required
        />
      ) : (
        <input
          type={visible ? "text" : type}
          id={name}
          name={name}
          className={styles.regInput}
          minlength={minLength}
          maxLength={maxlength}
          title={title}
          pattern={pattern}
        />
      )}
      {type == "password" && (
        <div
          className={styles.seePassword}
          onClick={() => setVisible(!visible)}
          style={
            !visible
              ? { backgroundImage: `url('/assets/img/icons/unvis.png')` }
              : { backgroundImage: `url('/assets/img/icons/vis.png')` }
          }
        ></div>
      )}
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};

export default RegInput;
