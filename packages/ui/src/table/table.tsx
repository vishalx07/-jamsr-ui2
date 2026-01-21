"use client";

import { Table as TableUI } from "@jamsrui/react";
import { createContext, useContext } from "react";
import { tableStyles } from "./styles";
import type { TableVariants } from "./styles";

const TableStyleContext = createContext<{
  styles: ReturnType<typeof tableStyles>;
} | null>(null);

const useTableStyleContext = () => {
  return useContext(TableStyleContext) || { styles: tableStyles() };
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
    <TableStyleContext.Provider value={{ styles }}>
      <TableUI {...restProps} className={styles.root({ className })} />
    </TableStyleContext.Provider>
  );
};

export namespace Table {
  export interface Props extends TableUI.Props, TableVariants {}
}

export const TableWrapper = (props: TableUI.Wrapper) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Wrapper
      {...props}
      className={styles.wrapper({ className: props.className })}
    />
  );
};

export const TableTable = (props: TableUI.Table) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Table
      {...props}
      className={styles.table({ className: props.className })}
    />
  );
};

export const TableHeader = (props: TableUI.Header) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Header
      {...props}
      className={styles.thead({ className: props.className })}
    />
  );
};

export const TableColumn = (props: TableUI.Column) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Column
      {...props}
      className={styles.th({ className: props.className })}
    />
  );
};

export const TableBody = (props: TableUI.Body) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Body
      {...props}
      className={styles.tbody({ className: props.className })}
    />
  );
};

export const TableRow = (props: TableUI.Row) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Row
      {...props}
      className={styles.tr({ className: props.className })}
    />
  );
};

export const TableCell = (props: TableUI.Cell) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Cell
      {...props}
      className={styles.td({ className: props.className })}
    />
  );
};

export const TableFooter = (props: TableUI.Footer) => {
  const { styles } = useTableStyleContext();
  return (
    <TableUI.Footer
      {...props}
      className={styles.tfoot({ className: props.className })}
    />
  );
};
