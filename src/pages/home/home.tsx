import { Button, Container } from "@/shared/ui";
import React from "react";
import styles from "./home.module.scss";
import Banner from "@/shared/assets/images/banner.png";
import { Link } from "react-router";
import { ROUTES } from "@/shared/constants/routes";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = () => {
  return (
    <main className={styles.home}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>
            <span>Find</span> all your favorite <span>character</span>
          </h1>
          <h2>You can find out all the information about your favorite characters</h2>
          <Link to={ROUTES.CHARACTERS}>
            <Button>See more...</Button>
          </Link>
        </div>
        <div className={styles.bannerWrapper}>
          <img src={Banner} alt="Yoda Jedi Master" />
        </div>
      </Container>
    </main>
  );
};
