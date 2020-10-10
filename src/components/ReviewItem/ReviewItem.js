import React from "react";

import Stars from "../Stars/Stars";
import ShBox from "../ShBox/ShBox";

import styles from "./ReviewItem.module.scss";

const ReviewItem = ({ review }) => {
  return (
    <div className={styles.reviewWrap}>
      <ShBox padding={"1.5em"} borderRadius={"0"}>
        <div className={styles.reviewBody}>
          <div
            className={styles.authorAvatar}
            style={{ backgroundImage: "url(/assets/img/dummyAvatar.png)" }}
          ></div>
          <div className={styles.authorName}>
            {review.reviewer_name}
            <div className={styles.date}>
              {review.date.split(" ")[0].replace("-", "/")}
            </div>
          </div>
          <div className={styles.rating}>
            <Stars rate={review.rating} />
          </div>
          <div className={styles.text}>{review.text}</div>
        </div>
      </ShBox>
    </div>
  );
};

export default ReviewItem;
