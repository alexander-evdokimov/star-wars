type Override<T, R> = Omit<T, keyof R> & R;

export type MetaInfo<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
};

export type CharacterApi = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: "Male" | "Female" | "unknown" | "n/a";
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
};

export type Character = Override<
  CharacterApi,
  { gender: "male" | "female" | "hermaphrodite" | null; birth_year: string | null }
>;
