import { cn } from "@/shared/utils";
import React from "react";
import { Character } from "../../model/types";
import styles from "./character-tag.module.scss";

interface Props {
  className?: string;
  type: "gender" | "birth";
  value: Character["gender"] | Character["birth_year"];
}

export const CharacterTag: React.FC<Props> = ({ className, type, value }) => {
  if (!value) {
    return null;
  }
  const classByType =
    type === "gender"
      ? {
          male: styles.male,
          female: styles.female,
          hermaphrodite: styles.hermaphrodite,
        }[value]
      : styles.birth;

  return (
    <div data-testid={`tag-${type}`} className={cn(styles.tag, classByType, className)}>
      {value}
    </div>
  );
};
