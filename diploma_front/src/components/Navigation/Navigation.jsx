import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

import gearIcon from "./images/gear.png";
import peaceIcon from "./images/peace.png";
import planeIcon from "./images/plane.png";
import robotIcon from "./images/robot.png";

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavLink
        to={"/"}
        exact
        activeClassName={styles.LinkActive}
        className={styles.Link}
      >
        <img className={styles.Icon} src={planeIcon} alt="nav-icon" /> Vacancies
      </NavLink>
      <NavLink
        to={"/admin/users"}
        activeClassName={styles.LinkActive}
        className={styles.Link}
      >
        <img className={styles.Icon} src={peaceIcon} alt="nav-icon" /> Users
      </NavLink>
      <NavLink
        to={"/admin/admins"}
        activeClassName={styles.LinkActive}
        className={styles.Link}
      >
        <img className={styles.Icon} src={robotIcon} alt="nav-icon" /> Admins
      </NavLink>
      <NavLink
        to={"/admin/settings"}
        activeClassName={styles.LinkActive}
        className={styles.Link}
      >
        <img className={styles.Icon} src={gearIcon} alt="nav-icon" /> Settings
      </NavLink>
    </div>
  );
};

export default Navigation;
