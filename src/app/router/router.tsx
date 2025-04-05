import { CharactersPage, HomePage, NotFoundPage } from "@/pages";
import { ROUTES } from "@/shared/constants/routes";
import { Layout } from "@/shared/ui";
import { BrowserRouter, Routes, Route } from "react-router";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.CHARACTERS} element={<CharactersPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
