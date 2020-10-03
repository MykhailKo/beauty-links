import React, { useState } from "react";

import Button from "../../components/Button/Button";
import TimeDisplay from "../../components/TimeDisplay/TimeDisplay";
import Stars from "../../components/Stars/Stars";

import useHttp from "../../hooks/useHttp";

import styles from "./MasterPage.module.scss";

const MasterPage = () => {
  // const {request, loading} = useHttp();
  // const getMaster = async (id) => {
  //   try {
  //   const response = await request(
  //     `/api/v1.0/master${id}/info`,
  //     "GET",
  //     null,
  //     {}
  //   )
  //   if(response.status === 200) return response;
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  const master = {
    full_name: "Алина Т.",
    call_out_charge: 0,
    avatar: "/assets/img/anna-brown.png",
    work_images: [
      "/assets/img/port1.png",
      "/assets/img/port2.png",
      "/assets/img/port3.png",
      "/assets/img/port4.png",
      "/assets/img/port5.png",
      "/assets/img/port6.png",
    ],
    certificate_images: [],
    master_reviews_count: 11,
    master_rating: 3.8,
    bio: "Работаю массажистом с 2010 года",
    phone: "0935111841",
    qualifications: ["Массаж"],
    experience: 141,
    work_location_types: {
      salon: true,
      mobile: false,
    },
    schedules: {
      salon: {
        652: {
          friday: {
            available: {
              to: "20:00",
              from: "08:00",
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
          saturday: {
            available: {
              to: "17:00",
              from: "09:00",
            },
          },
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
        },
      },
    },
    geoposition: {
      salon: {
        lon: 36.25125,
        lat: 49.97904,
      },
    },
  };

  return (
    <div className={"container"}>
      <section className={styles.masterDescription}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${master.avatar})` }}
        ></div>
        <Stars rate={4} />
        <span className={styles.reviewsCount}>
          {master.reviewsCount} отзывов
        </span>
        <a href>(Показать все)</a>
        <h2 className={styles.name}>{master.full_name}</h2>
        <ul className={styles.masterActions}>
          <li onClick={() => true}>
            <div
              className={styles.actionIcon}
              style={{ backgroundImage: `url(/assets/img/icons/favs.png)` }}
            ></div>
            <span>В избранное</span>
          </li>
          <li>
            <div
              className={styles.actionIcon}
              style={{ backgroundImage: `url(/assets/img/icons/reviews.png)` }}
            ></div>
            <span>Отзывы</span>
          </li>
          <li>
            <div
              className={styles.actionIcon}
              style={{
                backgroundImage: `url(/assets/img/icons/complaints.png)`,
              }}
            ></div>
            <span>Жалобы</span>
          </li>
          <li onClick={() => true}>
            <div
              className={styles.actionIcon}
              style={{ backgroundImage: `url(/assets/img/icons/share.png)` }}
            ></div>
            <span>Поделиться</span>
          </li>
        </ul>
        <div style={styles.masterText}>{master.bio}</div>
      </section>
    </div>
  );
};
