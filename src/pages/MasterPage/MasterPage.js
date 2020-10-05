import React, { useCallback, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../../hooks/useHttp";

import Button from "../../components/Button/Button";
import Stars from "../../components/Stars/Stars";
import SecTitle from "../../components//SecTitle/SecTitle";
import MasterContacts from "./MasterContacts/MasterContacts";
import MasterSchedule from "./MasterSchedule/MasterSchedule";
import Preloader from "../../components/Preloader/Preloader";
import MasterServices from "./MasterServices/MasterServices";
import MasterCerts from "./MasterCerts/MasterCerts";
import PagesControl from "../../components/PagesControl/PagesControl";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import SimilarMasterItem from "../../components/SimilarMasterItem/SimilarMasterItem";

import styles from "./MasterPage.module.scss";
import { useEffect } from "react";

const MasterPage = () => {
  const { masterid } = useParams();
  const { request, loading } = useHttp();
  const [reviewsPage, setReviewsPage] = useState(1);
  // const [masterData, setMasterData] = useState(null);

  // const getMaster = useCallback(
  //   async (id) => {
  //     try {
  //       const response = await request(
  //         `/api/v1.0/master/${id}/info`,
  //         "GET",
  //         null,
  //         {}
  //       );
  //       if (response.status === 200) setMasterData({ ...response });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   [request]
  // );
  // useEffect(() => {
  //   getMaster(masterid);
  // }, [getMaster, masterid]);
  const masterData = {
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
    master_reviews_count: 5,
    master_rating: 3.8,
    bio:
      "Работаю массажистом с 2010 года. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

  const services = [
    { id: 17, name: "Маникюр", duration: 1, price: 100 },
    { id: 18, name: "Педикюр", duration: 1, price: 100 },
    { id: 19, name: "SPA Маникюр и Педикюр", duration: 2, price: 200 },
    { id: 20, name: "Наращивание Ногтей", duration: 1, price: 250 },
    { id: 21, name: "Дизайн Ногтей", duration: 1, price: 200 },
  ];

  const reviews = [
    {
      id: 1,
      reviewer_name: "Alina Limo",
      rating: 5,
      date: "2020-10-11 12:45:29",
      text:
        "Всё супер, я довольна, мне понравилось, отличная атфмосфера и безупречный маникюр.",
    },
    {
      id: 1,
      reviewer_name: "Mila Vitney",
      rating: 5,
      date: "2020-10-01 12:45:29",
      text:
        "Отличный мастер своего дела, выполнила маникюр и покрытие матовым гель-лаком, мне понравилось, цена оправдана качеством. Отдельно хочется отметить современное оборудование, вежливость и приветливость мастера.",
    },
    {
      id: 1,
      reviewer_name: "Зоя Петровна",
      rating: 1,
      date: "2020-10-05 12:45:29",
      text:
        "Ужасно, недовольна, маникюр сделали, но мне не понравился цвет, и когда я это поняла, мастер отказалась переделывать свою работу. А я что, виновата, что я сначала захотела розовый, а потом вспомнила что у меня нет ни одного платья под этот цвет маникюра? Осталась в плохом настроении на весь оставшийся день. Не рекомендую!",
    },
    {
      id: 1,
      reviewer_name: "Alina Limo",
      rating: 5,
      date: "2020-10-11 12:45:29",
      text:
        "Всё супер, я довольна, мне понравилось, отличная атфмосфера и безупречный маникюр.",
    },
    {
      id: 1,
      reviewer_name: "Mila Vitney",
      rating: 5,
      date: "2020-10-01 12:45:29",
      text:
        "Отличный мастер своего дела, выполнила маникюр и покрытие матовым гель-лаком, мне понравилось, цена оправдана качеством. Отдельно хочется отметить современное оборудование, вежливость и приветливость мастера.",
    },
  ];

  const similarMasters = [
    {
      name: "Мария Салоедова",
      location: "Харьков, ул. Пушкинская 2",
      img: "/assets/img/sim-master1.png",
    },
    {
      name: "Анжела Сухова",
      location: "Харьков, пр-кт Алёшина 12б",
      img: "/assets/img/sim-master2.png",
    },
    {
      name: "Евгения Многошерстова",
      location: "Харьков, пр-кт Науки, 42, офис 13",
      img: "/assets/img/sim-master3.png",
    },
  ];

  return (
    <div className={styles.MasterPage}>
      {loading || masterData === null ? (
        <Preloader height={"100%"} />
      ) : (
        <div>
          <div className={"container"}>
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
                      style={{
                        backgroundImage: `url(/assets/img/icons/favs.png)`,
                      }}
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
              <section className={styles.masterBookings}>
                <MasterServices services={services} />
              </section>
              <section className={styles.masterCerts}>
                <MasterCerts certs={masterData.certificate_images} />
              </section>
            </div>
            <SecTitle align={"left"} title={"Портфолио мастера"} />
            <ul className={styles.portfolioGallery}>
              {masterData.work_images.map((img, key) => {
                return <li style={{ backgroundImage: `url(${img})` }}></li>;
              })}
            </ul>
            <SecTitle
              align={"left"}
              title={`Отзывы (${masterData.master_reviews_count})`}
            />
            <section className={styles.masterReviews}>
              <ul className={styles.reviewsList}>
                {reviews
                  .slice(
                    reviewsPage === 1 ? reviewsPage - 1 : (reviewsPage - 1) * 3,
                    reviewsPage * 3
                  )
                  .map((review, key) => {
                    return <ReviewItem review={review} key={key} />;
                  })}
              </ul>
              <PagesControl
                page={reviewsPage}
                setPage={setReviewsPage}
                maxPage={Math.ceil(reviews.length / 3)}
              />
            </section>
          </div>
          <section className={styles.simillarMasters}>
            <SecTitle align={"left"} title={"Похожие мастера"} />
            <ul>
              {similarMasters.map((master, key) => {
                return <SimilarMasterItem master={master} key={key} />;
              })}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default MasterPage;
