import React from "react";

import styles from "./PagesControl.module.scss";

const PagesControl = ({ page, setPage, maxPage }) => {
  return (
    <div className={styles.pagesWrap}>
      <button
        className={styles.pageButton}
        onClick={() => setPage(page - 1 > 0 ? page - 1 : page)}
      >
        Предыдущая страница
      </button>
      <ul className={styles.pagesNumbers}>
        {Array.from(Array(maxPage).keys()).map((num) => {
          return (
            <li
              onClick={() => setPage(num + 1)}
              className={num + 1 === page ? styles.activePage : ""}
            >
              {num + 1}
            </li>
          );
        })}
      </ul>
      <button
        className={styles.pageButton}
        onClick={() => setPage(page + 1 > maxPage ? page : page + 1)}
      >
        Следующая страница
      </button>
    </div>
  );
};

export default PagesControl;
