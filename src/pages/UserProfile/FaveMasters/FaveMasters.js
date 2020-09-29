import React from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import FaveItem from "../../../components/FaveItem/FaveItem";
import useHttp from "../../../hooks/useHttp";

import styles from "./FaveMasters.module.scss";

const faveMasters = [
  {
    name: "Anna Brown",
    avatar: "/assets/img/anna-brown.png",
    phone: "+38 099 123-45-67",
    rate: 4,
    salonAddress: "Украина, г. Харьков, ул. Сумская 35а",
    servives: [
      { id: 17, name: "Маникюр", duration: 1, price: 100 },
      { id: 18, name: "Педикюр", duration: 1, price: 100 },
      { id: 19, name: "SPA Маникюр и Педикюр", duration: 2, price: 200 },
    ],
  },
  {
    name: "Anna Brown",
    avatar: "/assets/img/anna-brown.png",
    phone: "+38 099 123-45-67",
    rate: 4,
    salonAddress: "Украина, г. Харьков, ул. Сумская 35а",
    servives: [
      { id: 17, name: "Маникюр", duration: 1, price: 100 },
      { id: 18, name: "Педикюр", duration: 1, price: 100 },
      { id: 19, name: "SPA Маникюр и Педикюр", duration: 2, price: 200 },
    ],
  },
];

const FaveMasters = () => {
  return (
    <div>
      <ProfileTitle
        title={"Избранные мастера"}
        subTitle={
          "Здесь находися список избранных мастеров, к которым вы можете вернуться."
        }
      />
      <ul className={styles.favesList}>
        {faveMasters.map((master, key) => {
          return <FaveItem masterData={master} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default FaveMasters;
