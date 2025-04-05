import React from "react";
import styles from "./not-found.module.scss";
import NotFoundImage from "@assets/images/404.png";
import { Button } from "@/shared/ui";
import { Link } from "react-router";
import { ROUTES } from "@/shared/constants/routes";

interface Props {
  className?: string;
}

export const NotFound: React.FC<Props> = () => {
  return (
    <main className={styles.notFound}>
      <div className={styles.imageWrapper}>
        <img src={NotFoundImage} alt="404 error" />
      </div>
      <Link to={ROUTES.HOME}>
        <Button>Return</Button>
      </Link>
    </main>
  );
};
