import React from "react";

import styles from "./ProfileTitle.module.scss";

const ProfileTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.titleWrap}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subTitle}>{subTitle}</h4>
    </div>
  );
};

export default ProfileTitle;
