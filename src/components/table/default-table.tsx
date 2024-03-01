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

const DEFAULT_PAGE = 1;

export const CustomTable = (props: TDefaultTableProps) => {
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
      className={twMerge("w-full", className)}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={total}
            onChange={onPageChange}
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
  paginator?: {
    onPageChange?: (page: number) => void;
    total?: number;
    page?: number;
  };
  noDataMessage?: string;
  className?: string;
};
