import { cn } from "@/shared/utils";
import React, { PropsWithChildren } from "react";
import styles from "./button.module.scss";

interface Props {
  className?: string;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <button className={cn(styles.button, className)}>{children}</button>;
};
