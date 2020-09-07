import React from "react";

import style from "./BeautyLinksColumn.module.scss";
const BeautyLinksColumn = (props) => {
  return (
    <div clasName={style.BeautyColumn}>
      <div className={style.MainLogoBlock}>
        <img src={"/assets/img/logo-02.png"} alt="logo-2" />
      </div>
      <div className={style.Contacts}>
        <a href="#">
          <img src={"/assets/img/icons/fb.png"} alt="facebook-link"></img>
        </a>
        <a href="#">
          <img src={"/assets/img/icons/insta.png"} alt="instagram-link"></img>
        </a>
      </div>
    </div>
  );
};

export default BeautyLinksColumn;
