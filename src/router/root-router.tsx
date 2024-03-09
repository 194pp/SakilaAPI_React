import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageHome } from "../pages/home/page-home";
import { DefaultLayout } from "../components/ui/layout/default-layout/default-layout";
import { PageActor } from "../pages/actor/page-actor";
import { PageCategory } from "../pages/category/page-category";
import { PageNotFound } from "../pages/not-found/page-not-found";
import { PageFilm } from "../pages/film/page-film";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/actor" element={<PageActor />} />
          <Route path="/category" element={<PageCategory />} />
          <Route path="/film" element={<PageFilm />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};
