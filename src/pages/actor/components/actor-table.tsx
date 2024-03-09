import { useMemo, useState } from "react";
import {
  DefaultTable,
  TDefaultTableProps,
} from "../../../components/table/default-table";
import {
  TPaginationState,
  defaultPaginationState,
} from "../../../constants/pagination-state";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchActors = (page: number, pageSize: number) =>
  fetch(`api/actor?p=${page}&ps=${pageSize}`).then((res) => res.json());

const actorTableHeaders: TDefaultTableProps["headers"] = [
  { id: "actorId", headerNode: "Actor ID" },
  { id: "firstName", headerNode: "First Name" },
  { id: "lastName", headerNode: "Last Name" },
  { id: "lastUpdate", headerNode: "Last Update" },
];

export const ActorTable = () => {
  const [paginationState, setPaginationState] = useState(
    defaultPaginationState
  );
  const { page, pageSize } = paginationState;
  const setPage = (page: TPaginationState["page"]) =>
    setPaginationState((pre) => ({ ...pre, page }));
  const { data } = useQuery<TActorResponse>({
    queryKey: ["actors", page, pageSize],
    queryFn: () => fetchActors(page, pageSize),
    placeholderData: keepPreviousData,
  });
  const actors = data?.actors;
  const count = data?.count || 0;

  const total = useMemo(() => Math.ceil(count / 10), [count]);

  const actorTableData: TDefaultTableProps["data"] =
    actors?.map((actor) => [
      { id: actor.actorId.toString(), dataNode: actor.actorId },
      { id: actor.firstName, dataNode: actor.firstName },
      { id: actor.lastName, dataNode: actor.lastName },
      { id: actor.lastUpdate, dataNode: actor.lastUpdate },
    ]) || [];

  return (
    <DefaultTable
      headers={actorTableHeaders}
      data={actorTableData}
      paginator={{
        page,
        total,
        onPageChange: setPage,
      }}
    ></DefaultTable>
  );
};

type TActorResponse = {
  actors: TActor[];
  count: number;
};

type TActor = {
  actorId: number;
  firstName: string;
  lastName: string;
  lastUpdate: string;
  //filmActors?: any;
};
