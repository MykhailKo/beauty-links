import React from "react";
import logo02 from "../../../../assets/img/logo-02.png";
import facebook from "../../../../assets/img/icons/fb.png";
import instagram from "../../../../assets/img/icons/insta.png";

import style from "./BeautyLinksColumn.module.scss";
const BeautyLinksColumn = (props) => {
  return (
    <div clasName={style.BeautyColumn}>
      <div className={style.MainLogoBlock}>
        <img src={logo02} alt="logo-2" />
      </div>
      <div className={style.Contacts}>
        <a href="#">
          <img src={facebook} alt="facebook-link"></img>
        </a>
        <a href="#">
          <img src={instagram} alt="instagram-link"></img>
        </a>
      </div>
    </div>
  );
};

export default BeautyLinksColumn;
