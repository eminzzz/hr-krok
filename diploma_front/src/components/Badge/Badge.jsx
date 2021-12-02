import React from "react";
import cn from "classnames";
import styles from "./Badge.module.scss";

import userImage from "./images/user.png";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";

const Badge = () => {
  const [toggle, setToggle] = useToggle(false);
  const toggleMenu = () => {
    setToggle.toggle();
  };
  const navigate = useNavigate();
  const handleLinkClick = (to) => {
    setToggle.changeToggle(false);
    navigate(to);
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
