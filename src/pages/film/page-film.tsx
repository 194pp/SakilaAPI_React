import { DefaultPageContentWrapper } from "../../components/ui/page-content-helpers/default-page-content-wrapper";
import { FilmTable } from "./components/film-table";
import { CustomButton } from "../../components/button/custom-button";

export const PageFilm = () => {
  return (
    <DefaultPageContentWrapper>
      <div className="flex w-full justify-between items-center">
        <div className="pb-6">
          <h1 className="text-3xl font-bold">Films</h1>
          <p className="">This page shows all the films in the database.</p>
        </div>

        <div className="">
          <CustomButton type="add">Add New</CustomButton>
        </div>
      </div>

      <FilmTable />
    </DefaultPageContentWrapper>
  );
};
