import { cn } from "@/shared/utils";
import React from "react";
import styles from "./loader.module.scss";

interface Props {
  className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => {
  return <span className={cn(styles.loader, className)}></span>;
};
