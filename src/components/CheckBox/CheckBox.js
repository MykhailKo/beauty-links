import React from "react";

import styles from "./CheckBox.module.scss";

const CheckBox = ({ id, required = false, checked, setChecked }) => {
  return (
    <div className={styles.checkBoxWrap}>
      <label
        htmlFor={id}
        className={styles.checkBoxLabel}
        onClick={() => setChecked(!checked)}
        style={
          checked
            ? {
                backgroundColor: "var(--main-blue)",
                backgroundImage: `url('/assets/img/icons/check.png')`,
              }
            : { backgroundColor: "", backgroundImage: `` }
        }
      ></label>
      {required ? (
        <input type={"checkbox"} id={id} name={id} hidden required />
      ) : (
        <input type={"checkbox"} id={id} name={id} hidden />
      )}
    </div>
  );
};

export default CheckBox;
