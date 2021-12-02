import React, { useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Badge.module.scss";

import userImage from "./images/user.png";
import { useHistory } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";

const Badge = () => {
  const [toggle, setToggle] = useToggle(false);
  const menu = useRef(null);
  const toggleMenu = () => {
    setToggle.toggle();
  };
  const history = useHistory();
  const handleLinkClick = (to) => {
    setToggle.changeToggle(false);
    history.push(to);
  };

  const clickOutside = (event) => {
    if (event.target !== menu.current && toggle) {
      setToggle.changeToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  });

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
        <div ref={menu} className={styles.Menu}>
          <div className={styles.Link} onClick={() => handleLinkClick("/")}>
            Home
          </div>
          <div
            className={styles.Link}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </div>
          <div
            className={styles.Link}
            onClick={() => handleLinkClick("/admin/admins")}
          >
            Admins
          </div>
          <div
            className={styles.Link}
            onClick={() => handleLinkClick("/admin/settings")}
          >
            Settings
          </div>
        </div>
      )}
    </div>
  );
};

export default Badge;
