import React from "react";
import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";

import styles from "./WorkingHoursPage.module.scss";

const WorkingHoursPage = () => {
  return (
    <div>
      <ProfileTitle
        title={"Рабочие часы"}
        subTitle={
          "Здесь вы можете  контролировать своё время  и вносить изменения в свой рабочий график."
        }
      />
    </div>
  );
};

export default WorkingHoursPage;
