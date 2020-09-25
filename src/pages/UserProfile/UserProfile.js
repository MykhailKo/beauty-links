import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

import styles from "./UserProfile.module.scss";

const ClientProfile = () => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={"client"} />
    </div>
  );
};

export default ClientProfile;
