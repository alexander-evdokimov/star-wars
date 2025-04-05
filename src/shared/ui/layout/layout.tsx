import { Outlet } from "react-router";
import { Header } from "../header/header";
import styles from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
