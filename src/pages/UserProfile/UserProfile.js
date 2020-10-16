import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

import styles from "./UserProfile.module.scss";

const UserProfile = ({ children, type }) => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={type} />
      <section
        className={styles.profileContent}
        style={
          type === "master" ? { minHeight: "55em" } : { minHeight: "30em" }
        }
      >
        {children}
      </section>
    </div>
  );
};

export default UserProfile;
