import React, { useCallback, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../../hooks/useHttp";

import Button from "../../components/Button/Button";
import TimeDisplay from "../../components/TimeDisplay/TimeDisplay";
import Stars from "../../components/Stars/Stars";
import ShBox from "../../components/ShBox/ShBox";
import SecTitle from "../../components//SecTitle/SecTitle";
import MasterContacts from "./MasterContacts/MasterContacts";
import MasterSchedule from "./MasterSchedule/MasterSchedule";

import styles from "./MasterPage.module.scss";
import { useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";

const MasterPage = () => {
  const { masterid } = useParams();
  const { request, loading } = useHttp();
  const [masterData, setMasterData] = useState(null);

  const getMaster = useCallback(
    async (id) => {
      try {
        const response = await request(
          `/api/v1.0/master/${id}/info`,
          "GET",
          null,
          {}
        );
        if (response.status === 200) setMasterData({ ...response });
      } catch (error) {
        console.log(error);
      }
    },
    [request]
  );
  useEffect(() => {
    getMaster(masterid);
  }, [getMaster, masterid]);
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
      {loading || masterData === null ? (
        <Preloader />
      ) : (
        <div className={styles.masterInfoWrap}>
          <section className={styles.masterDescription}>
            <div
              className={styles.avatar}
              style={{ backgroundImage: `url(${masterData.avatar})` }}
            ></div>
            <Stars rate={masterData.master_rating} />
            <span className={styles.reviewsCount}>
              {masterData.master_reviews_count} отзывов
            </span>
            <a href={"#"}>(Показать все)</a>
            <h2 className={styles.name}>{masterData.full_name}</h2>
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
                  style={{
                    backgroundImage: `url(/assets/img/icons/reviews.png)`,
                  }}
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
                  style={{
                    backgroundImage: `url(/assets/img/icons/share.png)`,
                  }}
                ></div>
                <span>Поделиться</span>
              </li>
            </ul>
            <div className={styles.masterBio}>{masterData.bio}</div>
          </section>
          <section className={styles.locationContacts}>
            <MasterContacts
              address={masterData.geoposition.salon}
              phone={masterData.phone}
            />
          </section>
          <section className={styles.masterSchedule}>
            <MasterSchedule schedule={masterData.schedules.salon[652]} />
          </section>
          <section className={styles.titleSec}>
            <SecTitle align="left" title={"Забронируйте визит "} />
          </section>
          <section className={styles.masterBookings}></section>
          <section className={styles.masterCerts}></section>
        </div>
      )}
    </div>
  );
};

export default MasterPage;
