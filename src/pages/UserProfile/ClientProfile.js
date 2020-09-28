import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Bookings from "./Bookings/Bookings";

import styles from "./UserProfile.module.scss";

const ClientProfile = (props) => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={"client"} />
      <section className={styles.profileContent}>{props.children}</section>
    </div>
  );
};

export default ClientProfile;
