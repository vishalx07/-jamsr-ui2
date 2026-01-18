"use client";

import React from "react";
import { createPortal } from "react-dom";

/* =======================
   Select Context
======================= */

const SelectContext = React.createContext(null);

function useSelect() {
  const ctx = React.useContext(SelectContext);
  if (!ctx) {
    throw new Error("Select components must be inside <SelectRoot />");
  }
  return ctx;
}

/* =======================
   Select Root
======================= */

function SelectRoot({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
}) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? null,
  );

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const setValue = (v) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(v);
    }
    onValueChange && onValueChange(v);
  };

  const [valueSlot, setValueSlot] = React.useState(null);

  return (
    <SelectContext.Provider
      value={{ value, setValue, valueSlot, setValueSlot }}
    >
      {children}
    </SelectContext.Provider>
  );
}

/* =======================
   Trigger + Value
======================= */

function SelectTrigger({ children }) {
  return (
    <button
      type="button"
      style={{
        padding: "8px 12px",
        minWidth: 200,
        textAlign: "left",
        border: "1px solid #ccc",
        borderRadius: 6,
        background: "#fff",
      }}
    >
      {children}
    </button>
  );
}

function SelectValue({ placeholder }) {
  const { valueSlot, setValueSlot } = useSelect();
  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      setValueSlot(ref.current);
    }
  }, [setValueSlot]);

  return (
    <span ref={ref} style={{ color: valueSlot ? "#000" : "#888" }}>
      {!valueSlot && placeholder}
    </span>
  );
}

/* =======================
   Content
======================= */

function SelectContent({ children }) {
  return (
    <div
      style={{
        marginTop: 6,
        border: "1px solid #ccc",
        borderRadius: 6,
        padding: 4,
        width: 200,
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
}

/* =======================
   Item
======================= */

function SelectItem({ value, children }) {
  const { value: selectedValue, setValue } = useSelect();
  const isSelected = selectedValue === value;

  return (
    <div
      role="option"
      aria-selected={isSelected}
      onClick={() => setValue(value)}
      style={{
        padding: "6px 8px",
        borderRadius: 4,
        cursor: "pointer",
        background: isSelected ? "#eee" : "transparent",
      }}
    >
      {children}
    </div>
  );
}

/* =======================
   ItemText (Radix-style magic)
======================= */

function SelectItemText({ value, children }) {
  const { value: selectedValue, valueSlot } = useSelect();
  const ref = React.useRef(null);

  if (selectedValue === value && valueSlot && ref.current) {
    return createPortal(children, valueSlot);
  }

  return <span ref={ref}>{children}</span>;
}

/* =======================
   Demo
======================= */

export function SelectDemo() {
  return (
    <div style={{ padding: 40 }}>
      <h3>Headless Select (Radix-style)</h3>

      <SelectRoot defaultValue="eth">
        <SelectTrigger>
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="btc">
            <SelectItemText value="btc">Bitcoin</SelectItemText>
          </SelectItem>

          <SelectItem value="eth">
            <SelectItemText value="eth">Ethereum</SelectItemText>
          </SelectItem>

          <SelectItem value="sol">
            <SelectItemText value="sol">Solana</SelectItemText>
          </SelectItem>
        </SelectContent>
      </SelectRoot>
    </div>
  );
}
