"use client";

import { Table as TableUI } from "@jamsrui/react";
import { createContext, use } from "react";
import type { TableVariants } from "./styles";
import { tableStyles } from "./styles";

const TableContext = createContext<{
  styles: ReturnType<typeof tableStyles>;
} | null>(null);

const useTableContext = () => {
  const ctx = use(TableContext);
  if (!ctx) {
    throw new Error("useTableContext must be used within a TableContext");
  }
  return ctx;
};

export const Table = (props: Table.Props) => {
  const {
    variant,
    radius,
    density,
    isHeaderSticky,
    allowHover,
    separateRows,
    className,
    ...restProps
  } = props;
  const styles = tableStyles({
    variant,
    radius,
    density,
    isHeaderSticky,
    allowHover,
    separateRows,
  });

  return (
    <TableContext value={{ styles }}>
      <TableUI {...restProps} className={styles.root({ className })} />
    </TableContext>
  );
};

export namespace Table {
  export interface Props extends TableUI.Props, TableVariants {}
}

export const TableHeader = (props: TableUI.Header) => {
  const { styles } = useTableContext();
  return (
    <TableUI.Header
      {...props}
      className={styles.thead({ className: props.className })}
    />
  );
};

export const TableColumn = (props: TableUI.Column) => {
  const { styles } = useTableContext();
  return (
    <TableUI.Column
      {...props}
      className={styles.th({ className: props.className })}
    />
  );
};

export const TableBody = (props: TableUI.Body) => {
  const { styles } = useTableContext();
  return (
    <TableUI.Body
      {...props}
      className={styles.tbody({ className: props.className })}
    />
  );
};

export const TableRow = (props: TableUI.Row) => {
  const { styles } = useTableContext();
  return (
    <TableUI.Row
      {...props}
      className={styles.tr({ className: props.className })}
    />
  );
};

export const TableCell = (props: TableUI.Cell) => {
  const { styles } = useTableContext();
  return (
    <TableUI.Cell
      {...props}
      className={styles.td({ className: props.className })}
    />
  );
};

export const TableFooter = (props: TableUI.Footer) => {
  const { styles } = useTableContext();
  return (
    <TableUI.Footer
      {...props}
      className={styles.tfoot({ className: props.className })}
    />
  );
};
