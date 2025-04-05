import { Modal } from "@/shared/ui/modal/modal";
import { cn } from "@/shared/utils";
import React from "react";
import styles from "./character-details-modal.module.scss";
import Ufo from "@assets/images/ufo.png";
import Male from "@assets/images/male.png";
import Female from "@assets/images/female.png";
import { CharacterTag } from "../character-tag/character-tag";
import { CharacterParameter } from "../character-parameter/character-parameter";
import { Character } from "../../model/types";

interface Props {
  className?: string;
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const switchAvatarByGender = (gender: Character["gender"]) => {
  switch (gender) {
    case "male":
      return Male;
    case "female":
      return Female;
    case "hermaphrodite":
      return Ufo;
    default:
      return Ufo;
  }
};

export const CharacterDetailsModal: React.FC<Props> = ({
  className,
  character,
  onClose,
  isOpen,
}) => {
  if (!character) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={cn(className)}>
      <div className={styles.modalBody}>
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <img src={switchAvatarByGender(character.gender)} alt="" />
            <div className={styles.tags}>
              <CharacterTag type="gender" value={character.gender} />
              <CharacterTag type="birth" value={character.birth_year} />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.info}>
            <h2>{character.name}</h2>
            <ul className={styles.attributes}>
              <li>hair color: {character.hair_color}</li>
              <li>eye color: {character.eye_color}</li>
              <li>skin color: {character.skin_color}</li>
            </ul>
          </div>
          <ul className={styles.parameters}>
            <li>
              <CharacterParameter label="height" value={character.height} />
            </li>
            <li>
              <CharacterParameter label="mass" value={character.mass} />
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
