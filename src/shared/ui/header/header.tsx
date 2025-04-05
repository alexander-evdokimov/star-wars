import React from "react";
import { cn } from "@/shared/utils";
import { navLinks } from "@/shared/constants/routes";
import { NavLink } from "react-router";
import styles from "./header.module.scss";
import { Container } from "../container/container";
import Logo from "@assets/images/logo.png";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <img src={Logo} />
        <nav className={cn(styles.nav, className)}>
          {navLinks.map(({ label, href }) => (
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              key={href}
              to={href}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
};
