import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Achivments from "./Achivements/Achivements";
import Bookings from "./Bookings/Bookings";

import styles from "./UserProfile.module.scss";

const ClientProfile = () => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={"client"} />
      <section className={styles.profileContent}>
        {/* <Achivments /> */}
        <Bookings />
      </section>
    </div>
  );
};

export default ClientProfile;
