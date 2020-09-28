import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Achievements from "./Achievements/Achievements";
import Bookings from "./Bookings/Bookings";

import styles from "./UserProfile.module.scss";

const ClientProfile = () => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={"client"} />
      <section className={styles.profileContent}>
        <Achievements />
        <Bookings />
      </section>
    </div>
  );
};

export default ClientProfile;
