import React from "react";

import styles from "./CardsAndCopyrightColumn.module.scss";

const CardsAndCopyrightColumn = () => {
  return (
    <div className={styles.Column}>
      <div>
        <img src={"/assets/img/mastercard.png"} alt="mastercard" />
      </div>
      <div>
        <img src={"/assets/img/visa.png"} alt="mastercard" />
      </div>
      <div className={styles.Copyright}>© 2020 Beautylinks</div>
    </div>
  );
};

export default CardsAndCopyrightColumn;
