import React from "react";
import cn from "classnames";
import styles from "./Badge.module.scss";

import userImage from "./images/user.png";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";

const Badge = () => {
  const [toggle, setToggle] = useToggle(false);
  const toggleMenu = () => {
    setToggle.toggle();
  };
  return (
    <div className={styles.Badge}>
      <div onClick={toggleMenu} className={styles.Info}>
        <img className={styles.Image} src={userImage} alt="user" />
        <div className={styles.Name}>Rostyslav Zosimov</div>
        <svg
          className={cn([styles.Icon], { [styles.ActiveIcon]: toggle })}
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 6L9 1"
            stroke="#3B3D4C"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {toggle && (
        <div className={styles.Menu}>
          <Link className={styles.Link} to="/">
            Home
          </Link>
          <Link className={styles.Link} to="/about">
            About
          </Link>
          <Link className={styles.Link} to="/user/admins">
            Admins
          </Link>
          <Link className={styles.Link} to="/user/settings">
            Settings
          </Link>
        </div>
      )}
    </div>
  );
};

export default Badge;
