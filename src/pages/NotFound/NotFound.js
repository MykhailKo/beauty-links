import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={"/assets/img/404.png"} alt={"404 Page Not Found"} />
      <div className={styles.errorCode}>404</div>
      <div className={styles.description}>
        Ой! Что-то пошло не так!
        <br /> Не расстраивайтесь. Просто вернитесь{" "}
        {
          <Link to={"/"} className={styles.link}>
            на главную.
          </Link>
        }
      </div>
    </div>
  );
};

export default NotFound;
