import { Character, CharacterApi, MetaInfo } from "./types";

export const transofrmCharacters = (response: MetaInfo<CharacterApi[]>): MetaInfo<Character[]> => ({
  ...response,
  results: response.results.map((character) => {
    let gender: Character["gender"];

    switch (character.gender) {
      case "unknown":
        gender = "hermaphrodite";
        break;
      case "n/a":
        gender = null;
        break;
      default:
        gender = character.gender.toLowerCase() as Character["gender"];
    }

    return {
      ...character,
      gender,
      birth_year: character.birth_year === "unknown" ? null : character.birth_year,
    };
  }),
});
