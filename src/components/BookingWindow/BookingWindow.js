import React, { useState, useEffect, useContext } from "react";

import PopUpWindow from "../PopUpWindow/PopUpWindow";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { useHttp } from "../../hooks/useHttp";
import authContext from "../../context/auth.context";

import styles from "./BookingWindow.module.scss";

const BookingWindow = ({ service, setService }) => {
  const { token } = useContext(authContext);
  const { request } = useHttp();
  const [openBooking, setOpenBooking] = useState(false);
  const [now, setNow] = useState(new Date());
  const [curDay, setCurDay] = useState(now);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [freeTimes, setFreeTimes] = useState(["12:00", "13:00", "14:00"]);
  const masterId = service.master;
  useEffect(() => {
    if (!openBooking) setService({});
  }, [openBooking]);
  useEffect(
    () =>
      Object.keys(service).length !== 0
        ? setOpenBooking(true)
        : setOpenBooking(false),
    [service]
  );
  // const fetchFreeTimes = async () => {
  //   try {
  //     const response = await request("/api/v1.0/",
  //           "GET",
  //           null,
  //           {Authorization: `Bearer ${token}`});
  //     if(response.status === 200) {
  //       setFreeTimes(response);
  //     }
  //   }catch(error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    setBookedTimes([]);
    //fetchFreeTimes();
  }, [curDay]);

  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

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

  const bookingWeek = [];
  for (let i = 0; i < 7; i++) {
    let today = new Date();
    today.setDate(now.getDate() + i);
    bookingWeek.push(today);
  }

  return (
    <PopUpWindow opened={openBooking} setOpened={setOpenBooking}>
      <div className={styles.bookingWrap}>
        <div className={styles.title}>Выберите дату и время</div>
        <div className={styles.month}>
          {months[now.getMonth()]},{now.getFullYear()}
        </div>
        <div className={styles.datesBlock}>
          <ul className={styles.dayNames}>
            {bookingWeek.map((day, key) => {
              return <li key={key}>{days[day.getDay()]}</li>;
            })}
          </ul>
          <ul className={styles.dayNumbers}>
            {bookingWeek.map((day, key) => {
              return (
                <li
                  key={key}
                  className={
                    day.getDate() === curDay.getDate()
                      ? styles.curDay
                      : styles.day
                  }
                  onClick={() => {
                    setCurDay(day);
                  }}
                >
                  {day.getDate()}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={styles.freeTimes}>
          <div>Доступное время</div>
          {freeTimes.map((time, key) => {
            return (
              <li
                className={bookedTimes.includes(time) ? styles.bookedTime : ""}
                key={key}
                onClick={() => {
                  if (!bookedTimes.includes(time))
                    setBookedTimes([...bookedTimes, time]);
                }}
              >
                {time}
              </li>
            );
          })}
        </ul>
        <ul className={styles.bookedTimes}>
          {bookedTimes.map((time, key) => {
            return (
              <li>
                <div>{service.name}</div>
                <div>{service.master.name}</div>
                <div>{service.price}грн</div>
                <div>
                  {time}-{parseInt(time.split(":")[0]) + 1}:{time.split(":")[1]}
                </div>
                <button
                  onClick={() => {
                    setBookedTimes(bookedTimes.filter((t) => t !== time));
                  }}
                ></button>
              </li>
            );
          })}
        </ul>
        <div className={styles.promoCode}>
          <label>Промо-код</label>
          <Input name={"promoCode"} />
        </div>
        <Button text={"Подтвердить"} onClick={() => {}} />
      </div>
    </PopUpWindow>
  );
};

export default BookingWindow;
