import React from "react";
import { NavLink } from "react-router-dom";

import MainLogo from "./images/logo.png";
import styles from "./Logo.module.scss";

export const Logo = ({ to }) => {
  if (!to) {
    return <img className={styles.Logo} src={MainLogo} alt="logo-brand" />;
  }
  return (
    <NavLink className={styles.Link} to={to}>
      <img className={styles.Logo} src={MainLogo} alt="logo-brand" />
    </NavLink>
  );
};
