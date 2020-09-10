import React, { useState } from "react";

import TopHeader from "./TopHeader/TopHeader";
import NavBar from "./NavBar/NavBar";
import MobileMenuBar from "./MobileMenuBar/MobileMenuBar";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./Header.module.scss";
import widths from "../../assets/scss/_widths.scss";

const Header = () => {
  const [width] = useWindowSize();
  const [open, setOpen] = useState(width < parseInt(widths.break_md));

  return (
    <header className={styles.header}>
      <TopHeader />
      {width < parseInt(widths.break_md) && (
        <MobileMenuBar open={open} setOpen={setOpen} />
      )}
      <NavBar open={open} />
    </header>
  );
};

export default Header;
