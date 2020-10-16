import React, { useState, useCallback, useEffect, useContext } from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import CalendarItem from "../../../components/CalendarItem/CalendarItem";
import authContext from "../../../context/auth.context";

import { useHttp } from "../../../hooks/useHttp";
import styles from "./MasterCalendar.module.scss";

const MasterCalendar = () => {
  // const [bookings, setBookings] = useState([]);
  // const [schedule, setSchedule] = useSatte({});
  // const {request, loading} = useHttp();
  // const {id} = useContext(authContext);
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
  // }, [id, request])

  // const fetchSchedule = useCallback(async () => {
  //   try {
  //     const response = await request(
  //       "/api/v1.0/",
  //       "GET",
  //       null,
  //       {}
  //     );
  //     if(response.status === 200) {
  //       setSchedule(response);
  //     }
  //   }catch(error) {
  //     console.log(error)
  //   }
  // }, [id, request])

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

  const schedule = {
    friday: {
      available: {
        to: "17:00",
        from: "09:00",
      },
    },
    monday: {
      available: {
        to: "20:00",
        from: "08:00",
      },
    },
    sunday: [],
    tuesday: {
      available: {
        to: "20:00",
        from: "08:00",
      },
    },
    saturday: [],
    thursday: {
      available: {
        to: "20:00",
        from: "08:00",
      },
    },
    wednesday: {
      available: {
        to: "20:00",
        from: "08:00",
      },
    },
  };

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
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const now = new Date();
  const getMonthName = () => {
    return months[now.getMonth()];
  };

  const getFirstDayOfMonth = () => {
    let date = new Date(now.getFullYear(), now.getMonth(), 1);
    return date.getDay() - 1;
  };

  const getDayStatus = (day) => {
    let dayDate = new Date(day);
    let weekAhead = new Date();
    weekAhead.setDate(now.getDate() + 6);
    if (schedule[days[dayDate.getDay()]].length === 0) return 3;
    if (dayDate <= weekAhead && dayDate >= now) return 1;
    //if (callToEndpoint(dayDate).length === 0) return 2;
    return 0;
  };

  const getCalendar = () => {
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
          status: getDayStatus(
            `${now.getFullYear()}-${now.getMonth() + 1}-${i - firstDay + 1}`
          ),
        });
      }
    }
    return calendar;
  };

  return (
    <div className={styles.calendarWrap}>
      <ProfileTitle
        title={"Календарь"}
        subTitle={
          "Это ваш календарь. В нём вы можете видеть и планировать свои записи."
        }
      />
      <div className={styles.monthTitle}>{getMonthName()}</div>
      <ul className={styles.calendarLegend}>
        <li>Выходной</li>
        <li>Запись закрыта</li>
        <li>Запись открыта</li>
      </ul>
      <div className={styles.calendarBorder}>
        <ul className={styles.calendar}>
          <span>понедельник</span>
          <span>вторник</span>
          <span>среда</span>
          <span>четверг</span>
          <span>пятница</span>
          <span>суббота</span>
          <span>воскресенье</span>
          {getCalendar().map((day, key) => {
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
