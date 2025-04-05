import { cn } from "@/shared/utils";
import styles from "./character-card.module.scss";
import React from "react";
import { Character } from "../../model/types";
import { CharacterTag } from "../character-tag/character-tag";
import { CharacterParameter } from "../character-parameter/character-parameter";

interface Props {
  className?: string;
  name: string;
  gender: Character["gender"];
  height: string;
  mass: string;
  birth_year: Character["birth_year"];
}

export const CharacterCard: React.FC<Props> = ({
  className,
  birth_year,
  gender,
  height,
  mass,
  name,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <h3>{name}</h3>
      <div className={styles.character}>
        <div className={styles.row}>
          <CharacterParameter label="height" value={height} />
          <CharacterParameter label="mass" value={mass} />
        </div>
        <div className={styles.row}>
          <CharacterTag type="gender" value={gender} />
          <CharacterTag type="birth" value={birth_year} />
        </div>
      </div>
    </div>
  );
};
