import React, { useState } from "react";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./ServiceCarousel.module.scss";
import widths from "../../assets/scss/_widths.scss";

const ServiceCarousel = ({
  serviceCats,
  setServiceCats,
  currentCategory,
  setCurrentCategory,
  clearSearch,
}) => {
  const [width] = useWindowSize();
  const [carouselStyle, setCarouselStyle] = useState({});
  let firstElementRef = null;
  const updateRef = (element) => {
    firstElementRef = element;
  };
  let em = 18;
  if (width < parseInt(widths.break_md)) em = 14;

  const setCarouselWidth = () => {
    let width = 0;
    serviceCats.forEach((category) => {
      width += category.name.length * em * 0.65 + 2 * em;
    });
    return `${width}px`;
  };

  const stepCarousel = () => {
    const firstElementInState = serviceCats[0];
    const arrayWithoutFirst = serviceCats.slice(1);
    arrayWithoutFirst.push(firstElementInState);
    const step = firstElementRef.offsetWidth + 2 * em;
    setCarouselStyle({
      transition: "0.3s",
      transform: `translateX(-${step}px)`,
    });
    setTimeout(() => {
      setCarouselStyle({});
      setServiceCats([...arrayWithoutFirst]);
    }, 300);
  };

  const checkoutCategory = (event) => {
    if (event.target.className === styles.carouselItem) {
      clearSearch();
      setCurrentCategory(parseInt(event.target.getAttribute("id")));
    }
  };
  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselWindow}>
        <ul
          className={styles.carouselTape}
          style={{ width: setCarouselWidth(), ...carouselStyle }}
          id={"carouselTape"}
          onClick={checkoutCategory}
        >
          {serviceCats.map((category, key) => {
            return (
              <li
                className={
                  category.id === currentCategory
                    ? styles.carouselItemActive
                    : styles.carouselItem
                }
                key={key}
                id={category.id}
                ref={key === 0 ? updateRef : null}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={styles.carouselBtn}
        onClick={() => {
          stepCarousel();
        }}
      ></button>
    </div>
  );
};

export default ServiceCarousel;
