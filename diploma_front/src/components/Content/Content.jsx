import React from "react";
import styles from "./Content.module.scss";

const Content = ({ children }) => {
  return <div className={styles.Content}>{children}</div>;
};

export default Content;
