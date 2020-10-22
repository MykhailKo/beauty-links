import React from "react";
import { Link } from "react-router-dom";

import styles from "./BeautyLinksColumn.module.scss";

const BeautyLinksColumn = (props) => {
  return (
    <div className={styles.BeautyColumn}>
      <div className={styles.MainLogoBlock}>
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={"/assets/img/logo-02.png"} alt="logo-2" />
        </Link>
      </div>
      <div className={styles.Contacts}>
        <a
          href="https://www.facebook.com/BeautyLinks.Official/?modal=admin_todo_tour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/assets/img/icons/fb.png"} alt="facebook-link"></img>
        </a>
        <a
          href="https://www.instagram.com/beautylinks_official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/assets/img/icons/insta.png"} alt="instagram-link"></img>
        </a>
      </div>
    </div>
  );
};

export default BeautyLinksColumn;
