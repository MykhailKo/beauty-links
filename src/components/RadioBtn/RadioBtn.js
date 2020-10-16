import React from "react";

import styles from "./RadioBtn.module.scss";

const RadioBtn = ({ name, value, id, label, checkedId, setChecked }) => {
  return (
    <div className={styles.radioWrap}>
      <label
        htmlFor={id}
        className={styles.radioLabel}
        onClick={() => setChecked({ gender: value, id })}
      >
        <div
          className={styles.radioBtn}
          style={
            checkedId === id
              ? {
                  backgroundColor: "var(--main-blue)",
                  backgroundImage: `url('/assets/img/icons/check.png')`,
                }
              : { backgroundColor: "", backgroundImage: `` }
          }
        ></div>
        {label}
      </label>
      <input type={"radio"} name={name} value={value} id={id} hidden />
    </div>
  );
};

export default RadioBtn;
