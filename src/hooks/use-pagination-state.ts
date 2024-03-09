import { useState } from "react";
import { defaultPaginationState } from "../constants/pagination-state";

export const usePaginationState = (
  props: TUsePaginationStateProps | undefined = defaultPaginationState
) => {
  const [paginationState, setPaginationState] = useState(props);

  const setPage = (page: number) =>
    setPaginationState((pre) => ({ ...pre, page }));
  const setPageSize = (pageSize: number) =>
    setPaginationState((pre) => ({ ...pre, pageSize }));

  return [paginationState, setPage, setPageSize];
};

type TUsePaginationStateProps = {
  page: number;
  pageSize: number;
};
