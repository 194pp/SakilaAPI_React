import { useMemo, useState } from "react";
import {
  DefaultTable,
  TDefaultTableProps,
} from "../../../components/table/default-table";
import {
  TPaginationState,
  defaultPaginationState,
} from "../../../constants/pagination-state";
import { FilmSpecialFeatureChips } from "../../../components/chips/film-chips/film-special-feature-chips";
import { FilmRatingChips } from "../../../components/chips/film-chips/film-rating-chips";
import { DefaultStyledDatetime } from "../../../components/styled-datetime/default-styled-datetime";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CustomModal } from "../../../components/modal/custom-modal";

const fetchFilms = (page: number, pageSize: number) =>
  fetch(`api/film?p=${page}&ps=${pageSize}`).then((res) => res.json());

const filmTableHeaders: TDefaultTableProps["headers"] = [
  { id: "filmId", headerNode: <span className="text-balance">Film ID</span> },
  { id: "title", headerNode: "Title" },
  { id: "description", headerNode: "Description" },
  {
    id: "releaseYear",
    headerNode: <span className="text-balance">Release Year</span>,
  },
  {
    id: "rentalDuration",
    headerNode: <span className="text-balance">Rental Duration</span>,
  },
  {
    id: "rentalRate",
    headerNode: <span className="text-balance">Rental Rate</span>,
  },
  { id: "length", headerNode: "Length" },
  {
    id: "replacementCost",
    headerNode: <span className="text-balance">Replacement Cost</span>,
  },
  { id: "rating", headerNode: "Rating" },
  {
    id: "lastUpdate",
    headerNode: <span className="text-balance">Last Update</span>,
  },
  { id: "specialFeatures", headerNode: "Special Features" },
  { id: "actions", headerNode: "" },
];

export const FilmTable = () => {
  const [paginationState, setPaginationState] = useState(
    defaultPaginationState
  );
  const { page, pageSize } = paginationState;
  const { data } = useQuery<TFilmResponse>({
    queryKey: ["film", { page, pageSize }],
    queryFn: () => fetchFilms(page, pageSize),
    placeholderData: keepPreviousData,
  });

  const setPage = (page: TPaginationState["page"]) =>
    setPaginationState((pre) => ({ ...pre, page }));

  const films = data?.films || [];
  const count = data?.count || 0;

  const total = useMemo(() => Math.ceil(count / 10), [count]);

  const actorTableData: TDefaultTableProps["data"] = films?.map((film) => [
    {
      id: film.filmId.toString(),
      dataNode: film.filmId,
      className: "px-0",
    },
    { id: film.title, dataNode: film.title },
    {
      id: film.description,
      dataNode: (
        <div className="max-w-20 overflow-hidden text-ellipsis">
          <CustomModal
            title={film.title}
            modalBody={film.description}
            triggerBody={
              <p className="whitespace-nowrap text-ellipsis w-full max-w-full">
                {film.description}
              </p>
            }
          />
        </div>
      ),
    },
    { id: film.releaseYear, dataNode: film.releaseYear },
    { id: film.rentalDuration.toString(), dataNode: film.rentalDuration },
    {
      id: film.rentalRate.toString(),
      dataNode: (
        <span className="whitespace-nowrap">{film.rentalRate + " €"}</span>
      ),
    },
    { id: film.length.toString(), dataNode: film.length },
    {
      id: film.replacementCost.toString(),
      dataNode: film.replacementCost + " €",
    },
    { id: film.rating, dataNode: <FilmRatingChips data={film.rating} /> },
    {
      id: film.lastUpdate,
      dataNode: <DefaultStyledDatetime datetime={film.lastUpdate} />,
    },
    {
      id: film.specialFeatures,
      dataNode: <FilmSpecialFeatureChips data={film.specialFeatures} />,
    },
    {
      id: film.filmId.toString() + "actions",
      dataNode: (
        <Popover placement="left" offset={20} showArrow backdrop="opaque">
          <PopoverTrigger>
            <Button size="md" variant="light" isIconOnly>
              <BsThreeDots />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col px-1 py-2 gap-1">
              <p>Actions: </p>
              <Button size="sm" variant="bordered" color="danger">
                Delete
              </Button>
              <Button size="sm" variant="bordered" color="warning">
                Edit
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
  ]);

  return (
    <DefaultTable
      headers={filmTableHeaders}
      data={actorTableData}
      paginator={{
        page,
        total,
        onPageChange: setPage,
      }}
    />
  );
};

type TFilmResponse = {
  films: TFilm[];
  count: number;
};

type TFilm = {
  filmId: number;
  title: string;
  description: string;
  releaseYear: string;
  rentalDuration: number;
  rentalRate: number;
  length: number;
  replacementCost: number;
  rating: string;
  lastUpdate: string;
  specialFeatures: string;
  //filmActors?: any;
};
