import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
} from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { DEFAULT_PAGE } from "../../constants/pagination-state";

export const DefaultTable = (props: TDefaultTableProps) => {
  const {
    headers,
    data,
    noDataMessage = "No data",
    paginator = {},
    className,
  } = props;
  const { onPageChange = () => {}, total = 0, page = DEFAULT_PAGE } = paginator;

  return (
    <Table
      classNames={{
        base: twMerge("", className),
        td: "px-2 py-1",
      }}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={total}
            initialPage={1}
            siblings={5}
            onChange={onPageChange}
            classNames={{
              // wrapper:
              // "gap-0 overflow-visible h-8 rounded border border-divider",
              // item: "w-8 h-8 text-small rounded-none bg-transparent",
              cursor:
                "bg-gradient-to-b from-primary to-default-800 dark:from-default-300 dark:to-secondary text-white font-bold",
            }}
          />
        </div>
      }
    >
      <TableHeader>
        {headers.map((item) => (
          <TableColumn key={item.id}>{item?.headerNode}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={!data?.length ? noDataMessage : ""}>
        {data.map((row) => (
          <TableRow
            key={`r${row[0].id}`}
            className={twMerge(
              "dark:text-white text-black",
              row?.[0]?.className
            )}
          >
            {row.map((col) => (
              <TableCell key={col.id}>{col.dataNode}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export type TDefaultTableProps = {
  headers: {
    id: string;
    headerNode?: React.ReactNode;
  }[];
  data: {
    id: string;
    dataNode?: React.ReactNode;
    className?: string;
  }[][];
  paginator?: TPaginatorProps;
  noDataMessage?: string;
  className?: string;
};

export type TPaginatorProps = {
  onPageChange?: (page: number) => void;
  total?: number;
  page?: number;
};
