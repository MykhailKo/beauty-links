import React, { useState } from "react";

import styles from "./RegInput.module.scss";

const RegInput = ({
  label,
  name,
  type = "text",
  required = false,
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
          required
        />
      ) : (
        <input
          type={visible ? "text" : type}
          id={name}
          name={name}
          className={styles.regInput}
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
