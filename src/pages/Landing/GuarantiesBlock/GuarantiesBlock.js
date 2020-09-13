import React from "react";

import SecTitle from "../../../components/SecTitle/SecTitle";
import SubGuarantie from "../SubGuarantie/SubGuarantie";

import styles from "./GuarantiesBlock.module.scss";

const GuarantiesBlock = () => {
  return (
    <div className={styles.container}>
      <SecTitle title={"Быстро, качественно, безопасно"} />
      <div className={styles.GuarantiesBlock}>
        <SubGuarantie
          title={"Удобный поиск по геолокации"}
          imgLink={"/assets/img/location.png"}
          imgAlt={"locationLogo"}
        />
        <SubGuarantie
          title={"Сертифицированные мастера"}
          imgLink={"/assets/img/certified.png"}
          imgAlt={"cerificate"}
        />
        <SubGuarantie
          title={"Гарантия возврата*"}
          imgLink={"/assets/img/warranty.png"}
          imgAlt={"warranty"}
        />
      </div>
    </div>
  );
};

export default GuarantiesBlock;
