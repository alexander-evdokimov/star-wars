import { Container, LanguageSwitcher, Loader } from "@/shared/ui";
import React, { useEffect, useState } from "react";
import styles from "./characters.module.scss";
import {
  CharacterCard,
  CharacterDetailsModal,
  CharacterFilters,
  useCharacterFilters,
} from "@/features/character";
import { Character } from "@/features/character/model/types";
import { Trans, useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useLazyGetCharactersQuery } from "@/features/character/model/character-api-slice";

interface Props {
  className?: string;
}

export const Characters: React.FC<Props> = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { t } = useTranslation();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [page, setPage] = useState(1);
  const [getCharacters, { data, isSuccess, isFetching }] = useLazyGetCharactersQuery();

  const { filtredCharacters, handleChangeFilterColorEye } = useCharacterFilters(characters);

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeCharacterModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  const openCharacterModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (inView && !isFetching) {
      getCharacters(page);
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (isSuccess) {
      setCharacters((prev) => [...prev, ...data.results]);
    }

    if (isSuccess && !data.next) {
      setIsLoaderActive(false);
    }
  }, [data]);

  return (
    <main className={styles.page}>
      <Container>
        <LanguageSwitcher className={styles.languageSwitcher} />
        <h1>
          <Trans
            t={t}
            i18nKey="characters.character"
            count={filtredCharacters.length}
            components={{ span: <span /> }}
          />
        </h1>
        <CharacterFilters
          onChangeEyeColor={handleChangeFilterColorEye}
          className={styles.filters}
        />

        <ul className={styles.characters}>
          {filtredCharacters.map((character) => (
            <li
              key={character.name}
              onClick={() => openCharacterModal(character)}
              className={styles.character}
            >
              <CharacterCard {...character} />
            </li>
          ))}
        </ul>
        {isLoaderActive && (
          <div className={styles.loader} ref={ref}>
            <Loader />
          </div>
        )}
      </Container>
      <CharacterDetailsModal
        isOpen={isModalOpen}
        onClose={closeCharacterModal}
        character={selectedCharacter}
      />
    </main>
  );
};
