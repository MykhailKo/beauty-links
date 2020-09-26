import React from "react";

import TimeDisplay from "../TimeDisplay/TimeDisplay";

import styles from "./BookingItem.module.scss";

const BookingItem = ({ bookingData, openDetails }) => {
  return (
    <li className={styles.BookingItem}>
      <div className={styles.masterData}>
        <div
          className={styles.masterAvatar}
          style={
            bookingData.master.avatar !== ""
              ? { backgroundImage: `url(${bookingData.master.avatar})` }
              : { backgroundImage: `url(/assets/img/dummyAvatar.png)` }
          }
        ></div>
        <span className={styles.masterName}>{bookingData.master.name}</span>
      </div>
      <div className={styles.serviceData}>
        <span className={styles.serviceName}>{bookingData.service}</span>
        <span className={styles.serviceLocation}>{bookingData.location}</span>
      </div>
      <div className={styles.timeData}>
        {bookingData.date}
        <TimeDisplay time={bookingData.time} />
      </div>
      <div className={styles.bookingNumber}>№{bookingData.number}</div>
      <ul className={styles.bookingControls}>
        <li onClick={() => openDetails(bookingData)}>Подрoбнее</li>
        <li>Перенести</li>
        <li>Отменить</li>
      </ul>
    </li>
  );
};

export default BookingItem;
