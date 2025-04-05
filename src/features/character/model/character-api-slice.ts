import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Character, MetaInfo } from "./types";
import { transofrmCharacters } from "./transforms";

export const characterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/people" }),
  reducerPath: "characterApi",
  endpoints: (build) => ({
    getCharacters: build.query<MetaInfo<Character[]>, number | void>({
      query: (page = 1) => {
        return {
          url: "/",
          params: {
            page,
          },
        };
      },
      transformResponse: transofrmCharacters,
    }),
  }),
});

export const { useLazyGetCharactersQuery } = characterApi;
