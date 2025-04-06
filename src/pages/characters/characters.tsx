import { Container, LanguageSwitcher, Loader } from "@/shared/ui";
import React, { useCallback, useEffect, useState } from "react";
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
    threshold: 0.2,
  });

  const { t } = useTranslation();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [getCharacters, { isFetching }] = useLazyGetCharactersQuery();

  const { filtredCharacters, handleChangeFilterColorEye, filterColorEye } =
    useCharacterFilters(characters);

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

  const getMoreCharacters = useCallback(async () => {
    if (isFetching || !hasMore) {
      return;
    }

    const response = await getCharacters(page);
    const isHasMore = !!response.data?.next;
    setHasMore(isHasMore);
    setPage((prev) => prev + 1);
    setCharacters((prev) => [...prev, ...(response.data?.results || [])]);
  }, [page, hasMore, isFetching]);

  useEffect(() => {
    if (inView && !isFetching && filterColorEye === "all") {
      getMoreCharacters();
    }
  }, [inView]);

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
        {isFetching && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
      </Container>
      <div ref={ref} style={{ height: "20px" }}></div>
      <CharacterDetailsModal
        isOpen={isModalOpen}
        onClose={closeCharacterModal}
        character={selectedCharacter}
      />
    </main>
  );
};
