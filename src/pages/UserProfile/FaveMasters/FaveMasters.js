import React, { useState, useEffect } from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import FaveItem from "../../../components/FaveItem/FaveItem";
import BookingWindow from "../../../components/BookingWindow/BookingWindow";
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
      { id: 17, name: "Маникюр", duration: 15, price: 100 },
      { id: 18, name: "Педикюр", duration: 10, price: 100 },
      { id: 19, name: "SPA Маникюр и Педикюр", duration: 20, price: 200 },
    ],
  },
  {
    name: "Anna Brown",
    avatar: "/assets/img/anna-brown.png",
    phone: "+38 099 123-45-67",
    rate: 4,
    salonAddress: "Украина, г. Харьков, ул. Сумская 35а",
    servives: [
      { id: 17, name: "Маникюр", duration: 60, price: 100 },
      { id: 18, name: "Педикюр", duration: 60, price: 100 },
      { id: 19, name: "SPA Маникюр и Педикюр", duration: 120, price: 200 },
    ],
  },
];

const FaveMasters = () => {
  const [serviceToBook, setServiceToBook] = useState({});

  return (
    <div>
      <BookingWindow service={serviceToBook} setService={setServiceToBook} />
      <ProfileTitle
        title={"Избранные мастера"}
        subTitle={
          "Здесь находися список избранных мастеров, к которым вы можете вернуться."
        }
      />
      <ul className={styles.favesList}>
        {faveMasters.map((master, key) => {
          return (
            <FaveItem masterData={master} key={key} book={setServiceToBook} />
          );
        })}
      </ul>
    </div>
  );
};

export default FaveMasters;
