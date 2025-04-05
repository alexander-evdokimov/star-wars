import { FilterEyeColor } from "../model/constants";
import { useMemo, useState } from "react";
import { Character } from "./types";

export const useCharacterFilters = (characters: Character[]) => {
  const [filterColorEye, setFilterColorEye] = useState<FilterEyeColor>("all");

  const filtredCharacters = useMemo(() => {
    return characters.filter((character) => {
      if (filterColorEye === "all") {
        return true;
      }
      return character.eye_color === filterColorEye;
    });
  }, [filterColorEye, characters]);

  const handleChangeFilterColorEye = (value: FilterEyeColor) => {
    setFilterColorEye(value);
  };

  return { filtredCharacters, filterColorEye, handleChangeFilterColorEye };
};
