import { cn } from "@/shared/utils";
import React from "react";
import styles from "./character-parameter.module.scss";

interface Props {
  className?: string;
  label: string;
  value: string;
}

export const CharacterParameter: React.FC<Props> = ({ className, label, value }) => {
  return (
    <div className={cn(styles.parameter, className)}>
      <div className={styles.circle}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
