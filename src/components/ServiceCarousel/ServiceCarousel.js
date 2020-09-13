import React from "react";

import styles from "./ServiceCarousel.module.scss";

const ServiceCarousel = ({ serviceCats }) => {
  const em = 18;

  const setCarouselWidth = () => {
    let width = 0;
    serviceCats.forEach((category) => {
      width += category.name.length * em * 0.65 + 2 * em;
    });
    console.log(width);
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
        >
          {serviceCats.map((category, key) => {
            return (
              <li className={styles.carouselItem} key={key} id={category.id}>
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={styles.carouselBtn}
        onClick={() => stepCarousel()}
      ></button>
    </div>
  );
};

export default ServiceCarousel;
