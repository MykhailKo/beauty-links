import React from "react";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./ServiceCarousel.module.scss";
import widths from "../../assets/scss/_widths.scss";

const ServiceCarousel = ({ serviceCats, setCat, currentCat }) => {
  const [width] = useWindowSize();

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
    let $carouselTape = document.querySelector("#carouselTape");
    let step = $carouselTape.children[0].offsetWidth + 2 * em;
    $carouselTape.style.transition = `0.3s`;
    $carouselTape.style.transform = `translateX(-${step}px)`;
    setTimeout(() => {
      const $firstChild = $carouselTape.children[0].cloneNode(true);
      $carouselTape.children[0].remove();
      $carouselTape.style.transition = `0s`;
      $carouselTape.style.transform = `translateX(0px)`;
      $carouselTape.appendChild($firstChild);
    }, 300);
  };

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselWindow}>
        <ul
          className={styles.carouselTape}
          style={{ width: setCarouselWidth() }}
          id={"carouselTape"}
          onClick={(event) => {
            if (event.target !== styles.carouselItem) {
              setCat(event.target.getAttribute("id"));
              document.querySelector(
                `.${styles.carouselItemActive}`
              ).className = styles.carouselItem;
              event.target.className = styles.carouselItemActive;
            }
          }}
        >
          {serviceCats.map((category, key) => {
            return (
              <li
                className={
                  category.id === currentCat
                    ? styles.carouselItemActive
                    : styles.carouselItem
                }
                key={key}
                id={category.id}
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
