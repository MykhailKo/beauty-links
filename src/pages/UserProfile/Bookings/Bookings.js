import React, { useState } from "react";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import BookingItem from "../../../components/BookingItem/BookingItem";
import PopUpWindow from "../../../components/PopUpWindow/PopUpWindow";
import Button from "../../../components/Button/Button";
import SecTitle from "../../../components/SecTitle/SecTitle";
import TimeDisplay from "../../../components/TimeDisplay/TimeDisplay";

import styles from "./Bookings.module.scss";

const currentBookings = [
  {
    master: { name: "Петренко Анна", phone: "+38 099 123-45-67", avatar: "" },
    number: "0017296",
    location: "В салоне",
    service: "Маникюр гель-лак",
    date: "04 сентября",
    time: "8:00",
  },
  {
    master: { name: "Петренко Анна", phone: "+38 099 123-45-67", avatar: "" },
    number: "0017296",
    location: "г.Харьков, ул. Пушкинская, 69",
    service: "Маникюр гель-лак",
    date: "07 сентября",
    time: "19:00",
  },
];

const Bookings = () => {
  const [policyOpened, setPolicyOpened] = useState(false);

  const [bookingDetails, setBookingDetails] = useState(false);

  return (
    <div>
      <ProfileTitle
        title={"Бронирования"}
        subTitle={
          "Это ваш список забронированных заказов. Здесь также отображаются ваши предыдущие заказы."
        }
      />
      <div className={styles.bookingsTitle}>Текущие бронирования</div>
      <ul className={styles.bookingList}>
        {currentBookings.map((booking, key) => {
          return (
            <BookingItem
              bookingData={booking}
              key={key}
              openDetails={setBookingDetails}
            />
          );
        })}
      </ul>
      <div className={styles.bookingsTitle}>Предыдущие бронирования</div>
      <ul className={styles.bookingList}>Нет данных</ul>
      <a className={styles.policyLink} onClick={() => setPolicyOpened(true)}>
        Условия отмены/переноса бронирования
      </a>
      <PopUpWindow size={"l"} opened={policyOpened} setOpened={setPolicyOpened}>
        <SecTitle title={"Отмена бронирования:"} />
        <p>
          1) Если вы совершили бронирование услуги{" "}
          <strong>более чем за 24 часа</strong> – вы имеете право отменить
          бронирование <strong>не позже разницы эквивалентной 24 часам.</strong>
        </p>
        <p className={styles.smallItalic}>
          <em>
            То есть, если вы забронировали услугу 01.01.2020 16:00 на 03.01.2020
            16:00, вы сможете отменить бронирование не позже 02.01.2020 16:00.
          </em>
        </p>
        <p>
          2) Если вы совершили бронирование услуги{" "}
          <strong>менее чем за 24 часа</strong> - вы имеете право отменить
          бронирование{" "}
          <strong>
            не позже разницы эквивалентной половине от времени до бронирования.
          </strong>
        </p>
        <p className={styles.smallItalic}>
          <em>
            То есть, если вы забронировали услугу 01.01.2020 08:00 на 01.01.2020
            16:00, вы сможете отменить бронирование не позже 01.01.2020 12:00.
          </em>
        </p>
        <SecTitle title={"Перенос бронирования:"} />
        <p>
          1) Если вы совершили бронирование услуги{" "}
          <strong>более чем за 24 часа</strong> - вы имеете право перенести
          бронирование <strong>не позже, чем за 4 часа до бронирования.</strong>
        </p>
        <p className={styles.smallItalic}>
          <em>
            То есть, если вы забронировали услугу 01.01.2020 16:00 на 03.01.2020
            16:00, вы сможете перенести бронирование не позже 03.01.2020 12:00.
          </em>
        </p>
        <p>
          2) Если вы совершили бронирование услуги{" "}
          <strong>менее чем за 24 часа</strong> - вы имеете право перенести
          бронирование{" "}
          <strong>
            не позже разницы эквивалентной 20% от времени до бронирования,
            округляя до 30 минут.
          </strong>
        </p>
        <p className={styles.smallItalic}>
          <em>
            То есть, если вы забронировали услугу 01.01.2020 08:00 на 01.01.2020
            16:00, вы сможете перенести бронирование не позже 01.01.2020 14:00.
          </em>
        </p>
        <p>
          <strong>
            Если одна из кнопок не активна - значит свою возможность
            перенести/отменить бронирование вы уже упустили. Вы имеете право
            перенести бронирования только 1 раз, в дальнейшем возможности
            вернуть Вам деньги не будет.
          </strong>
        </p>
        <p>
          Мы стараемся сделать наш сервис удобным и справедливым как по
          отношению к клиентам, так и по отношению к мастерам. Цените свое и
          чужое время!
        </p>
      </PopUpWindow>
      <PopUpWindow opened={bookingDetails} setOpened={setBookingDetails}>
        <div className={styles.detailsTitle}>Детали вашего заказа</div>
        {bookingDetails && (
          <div className={styles.bookingDetailsWrap}>
            <ul className={styles.detailsList}>
              <li>
                <span className={styles.detailLabel}>Услуга:</span>
                {bookingDetails.name}
              </li>
              <li>
                <span className={styles.detailLabel}>Когда:</span>
                {bookingDetails.date}
                <span>с</span>
                <TimeDisplay time={bookingDetails.time} />
                <span>до</span>
                <TimeDisplay
                  time={`${parseInt(bookingDetails.time.split(":")[0]) + 1}:${
                    bookingDetails.time.split(":")[1]
                  }`}
                />
                {}
              </li>
              <li>
                <span className={styles.detailLabel}>Где:</span>
                {bookingDetails.location}
              </li>
              <li>
                <span className={styles.detailLabel}>Ваш мастер:</span>
                {bookingDetails.master.name}
                <a href="">Профиль мастера</a>
              </li>
              <li>
                <span className={styles.detailLabel}>Телефон:</span>
                {bookingDetails.master.phone}
              </li>
              <li>
                <span className={styles.detailLabel}>Номер заказа:</span>№
                {bookingDetails.number}
              </li>
            </ul>
            <iframe
              className={styles.map}
              id={"gmap_canvas"}
              src={`https://maps.google.com/maps?q=${bookingDetails.location}&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed`}
              frameborder={"0"}
              scrolling={"no"}
              marginheight={"0"}
              marginwidth={"0"}
            ></iframe>
            <Button text={"Отменить"} />
            <Button text={"Перенести"} />
            <a
              className={styles.policyLink}
              onClick={() => setPolicyOpened(true)}
            >
              &#9432;Условия отмены/переноса бронирования
            </a>
          </div>
        )}
      </PopUpWindow>
    </div>
  );
};

export default Bookings;
