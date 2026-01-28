import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
} from "./table";

export const Table = Object.assign(TableRoot, {
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
};

export namespace Table {
  export interface Props extends TableRoot.Props {}
}
