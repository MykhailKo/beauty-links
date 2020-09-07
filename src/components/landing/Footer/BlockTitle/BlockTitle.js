import React from "react";
import style from "./BlockTitle.module.scss";

const BlockTitle = (props) => {
  return <div className={style.BlockTitle}>{props.text}</div>;
};

export default BlockTitle;
