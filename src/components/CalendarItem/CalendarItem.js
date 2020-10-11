import React from "react";
import BookingItem from "../BookingItem/BookingItem";

import styles from "./CalendarItem.module.scss";

const CalendarItem = ({ day }) => {
  const statusColors = ["#FFF", "#D6FFDF", "#FFD6D6", "#EDEDED"];

  return (
    <div
      className={styles.dayBlock}
      style={{ backgroundColor: statusColors[day.status] }}
    >
      <span>{day.day}</span>
      <ul className={styles.bookingsList}>
        {day.bookings &&
          day.bookings.map((booking, key) => {
            return (
              <li key={key}>
                {booking.start_time}
                <span>{booking.customer_name.split(" ")[0]}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CalendarItem;
