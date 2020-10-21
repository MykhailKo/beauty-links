import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import PopUpBtn from "../PopUpBtn/PopUpBtn";
import Registration from "../RegistrationBtn/RegistrationBtn";
import LanguageBlock from "../LanguageBlock/LanguageBlock";
import ContactBtn from "../ContactBtn/ContactBtn";
import useWindowSize from "../../../hooks/useWindowSize";

import widths from "../../../assets/scss/_widths.scss";
import styles from "./top-header.module.scss"; 
import authContext from "../../../context/auth.context";

const TopHeader = () => {
  const { isAuthenticated, full_name } = useContext(authContext);

  const [width] = useWindowSize();
  const history = useHistory();
  return (
    <div className={styles.topHeader}>
      <div className={styles.container}>
        <Logo />
        <Search />
        <PopUpBtn />
        {isAuthenticated ? (
          <div>
            <b>{full_name}</b>
          </div>
        ) : (
          <Registration />
        )}

        {width >= parseInt(widths.break_md) && <LanguageBlock />}
        <ContactBtn />
      </div>
    </div>
  );
};

export default TopHeader;
