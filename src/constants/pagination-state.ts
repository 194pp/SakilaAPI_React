export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;
export const defaultPaginationState: TPaginationState = {
  page: DEFAULT_PAGE,
  pageSize: DEFAULT_PAGE_SIZE,
};
export type TPaginationState = {
  page: number;
  pageSize: number;
};
