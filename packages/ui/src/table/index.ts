import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
  TableTable,
  TableWrapper,
} from "./table";

export const Table = Object.assign(TableRoot, {
  Wrapper: TableWrapper,
  Table: TableTable,
  Header: TableHeader,
  Column: TableColumn,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Footer: TableFooter,
});

export {
  TableBody,
  TableCell,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
  TableTable,
  TableWrapper,
};
