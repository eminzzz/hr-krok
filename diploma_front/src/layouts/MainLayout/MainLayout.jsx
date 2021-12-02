import React from "react";
import styles from "./MainLayout.module.scss";
import { Logo } from "../../components/Logo";
import Header from "../../components/Header/Header";
import Badge from "../../components/Badge/Badge";
import Content from "../../components/Content/Content";
import Navigation from "../../components/Navigation/Navigation";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Header>
        <Logo to="/" />
        <Badge />
      </Header>
      <Content>
        <Navigation />
        {children}
      </Content>
    </div>
  );
};
