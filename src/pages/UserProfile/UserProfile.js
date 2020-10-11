import React from "react";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

import MasterCalendar from "./MasterCalendar/MasterCalendar";

import styles from "./UserProfile.module.scss";

const UserProfile = ({ children, type }) => {
  return (
    <div className={styles.UserProfile}>
      <ProfileMenu type={type} />
      <section className={styles.profileContent}>
        {/* {children} */}
        <MasterCalendar />
      </section>
    </div>
  );
};

export default UserProfile;
