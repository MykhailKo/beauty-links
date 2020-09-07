import React from "react";
import mastercard from "../../../../assets/img/mastercard.png";
import visa from "../../../../assets/img/visa.png";

import style from "./CardsAndCopyrightColumn.module.scss";

const CardsAndCopyrightColumn = () => {
  return (
    <div className={style.Column}>
      <div>
        <img src={mastercard} alt="mastercard" />
      </div>
      <div>
        <img src={visa} alt="mastercard" />
      </div>
      <div className={style.Copyright}>© 2020 Beautylinks</div>
    </div>
  );
};

export default CardsAndCopyrightColumn;
