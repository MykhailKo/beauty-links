import React, { useState, useCallback, useEffect } from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import CalendarItem from "../../../components/CalendarItem/CalendarItem";

import UseHttp, { useHttp } from "../../../hooks/useHttp";
import styles from "./MasterCalendar.module.scss";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const getMonthName = () => {
  let now = new Date();
  return months[now.getMonth()];
};

const getFirstDayOfMonth = () => {
  let now = new Date();
  let date = new Date(now.getFullYear(), now.getMonth(), 1);
  return date.getDay() - 1;
};

const getCalendar = (bookings) => {
  const now = new Date();
  const firstDay = getFirstDayOfMonth();
  const lastDay =
    (now.getMonth() === 1 ? 27 : (now.getMonth() + 1) % 2 === 0 ? 30 : 29) +
    firstDay;
  let calendar = [];
  for (let i = 0; i < 35; i++) {
    if (i < firstDay || i > lastDay) calendar.push({});
    else {
      let dayBookings = bookings.filter(
        (booking) =>
          booking.date ===
          `${now.getFullYear()}-${now.getMonth() + 1}-${i - firstDay + 1}`
      );
      calendar.push({
        day: i - firstDay + 1,
        bookings: dayBookings,
        status: 0,
      });
    }
  }
  return calendar;
};

const MasterCalendar = ({ masterId }) => {
  // const [bookings, setBookings] = useState([]);
  // const {request, loading} = useHttp();

  // const fetchCalendar = useCallback(async () => {
  //   try {
  //     const response = await request(
  //       "/api/v1.0/",
  //       "GET",
  //       null,
  //       {}
  //     );
  //     if(response.status === 200) {
  //       setBookings(response);
  //     }
  //   }catch(error) {
  //     console.log(error)
  //   }
  // }, [masterId, request])
  // useEffect(() => {
  //   fetchCalendar();
  // }, [fetchCalendar]);

  const bookings = [
    {
      id: 1,
      date: "2020-10-12",
      customer_name: "Петренко Анна",
      start_time: "12:00",
      end_time: "13:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "12:00",
      end_time: "13:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "13:00",
      end_time: "14:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "14:00",
      end_time: "15:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "15:00",
      end_time: "16:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "16:00",
      end_time: "17:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "17:00",
      end_time: "18:00",
    },
    {
      id: 1,
      date: "2020-10-15",
      customer_name: "Петренко Анна",
      start_time: "18:00",
      end_time: "19:00",
    },
    {
      id: 1,
      date: "2020-10-16",
      customer_name: "Петренко Анна",
      start_time: "14:00",
      end_time: "15:00",
    },
    {
      id: 1,
      date: "2020-10-17",
      customer_name: "Петренко Анна",
      start_time: "13:00",
      end_time: "14:00",
    },
    {
      id: 1,
      date: "2020-10-17",
      customer_name: "Петренко Анна",
      start_time: "15:00",
      end_time: "16:00",
    },
  ];

  return (
    <div className={styles.calendarWrap}>
      <ProfileTitle
        title={"Календарь"}
        subTitle={
          "Это ваш календарь. В нём вы можете видеть и планировать свои записи."
        }
      />
      <div className={styles.monthTitle}>{getMonthName()}</div>
      <div className={styles.calendarBorder}>
        <ul className={styles.calendar}>
          <span>понедельник</span>
          <span>вторник</span>
          <span>среда</span>
          <span>четверг</span>
          <span>пятница</span>
          <span>суббота</span>
          <span>воскресенье</span>
          {getCalendar(bookings).map((day, key) => {
            return <CalendarItem key={key} day={day} />;
          })}
          <span className={styles.calendarBottom}></span>
          <span className={styles.calendarBottom}></span>
          <span className={styles.calendarBottom}></span>
          <span className={styles.calendarBottom}></span>
          <span className={styles.calendarBottom}></span>
          <span className={styles.calendarBottom}></span>
          <span className={styles.calendarBottom}></span>
        </ul>
      </div>
    </div>
  );
};

export default MasterCalendar;
