import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

import styles from "./UserProfile.module.scss";

const UserProfile = (props) => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={props.type} />
      <section className={styles.profileContent}>{props.children}</section>
    </div>
  );
};

export default UserProfile;
