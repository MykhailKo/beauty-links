import React from "react";

import style from "./SubGuarantie.module.scss";

const SubGuarantie = (props) => {
  return (
    <div className={style.SubGuarantie}>
      <div className={style.image}>
        <img src={props.imgLink} alt={props.imgAlt} />
      </div>
      <div className={style.title}>{props.title}</div>
    </div>
  );
};

export default SubGuarantie;
