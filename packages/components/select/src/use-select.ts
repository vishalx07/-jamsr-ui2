"use client";

import {
  Children,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttr, dataAttrDev, mergeProps } from "@jamsrui/utils";

import type {
  FloatingFocusManagerProps,
  FloatingList,
  Placement,
} from "@floating-ui/react";
import type { PropGetter, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { Select } from "./select";
import type { SelectContent } from "./select-content";
import type { SelectIndicator } from "./select-indicator";
import type { SelectItem } from "./select-item";
import type { SelectItemIndicator } from "./select-item-indicator";
import type { SelectPopover } from "./select-popover";
import type { SelectTrigger } from "./select-trigger";
import type { SelectValue } from "./select-value";

export const useSelect = (props: useSelect.Props) => {
  const {
    onValueChange,
    defaultValue,
    value: propValue,
    placeholder = "Select",
    onOpenChange,
    defaultOpen,
    isOpen: isOpenProp,
    isMultiple = false,
    renderValue,
    placement = "bottom-start",
    disabled: isDisabled = false,
    returnFocus = true,
    disableTypeahead = false,
    name,
    form,
    className,
    ...elementProps
  } = props;

  const labelId = useId();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  // Ref for dynamically registered labels (for items that appear after initial render)
  const selectLabelsRef = useRef<Map<string | number, string>>(new Map());
  // Counter to trigger re-render when dynamic items register
  const [, setLabelUpdateTrigger] = useState(0);

  // Synchronous children parsing: extract labels during render (no effects needed)
  // This is the only way to have labels available on the very first render
  const initialLabels = useMemo(() => {
    const labels = new Map<string | number, string>();

    // Recursive function to find all SelectItem components in children tree
    const extractLabels = (node: React.ReactNode): void => {
      Children.forEach(node, (child) => {
        if (!isValidElement(child)) return;

        // Check if this is a SelectItem by looking for value and textValue props
        const props = child.props as Record<string, unknown>;
        if (
          "value" in props &&
          "textValue" in props &&
          props.value != null &&
          typeof props.textValue === "string"
        ) {
          labels.set(props.value as string | number, props.textValue as string);
        }

        // Recursively check children
        if (props.children) {
          extractLabels(props.children as React.ReactNode);
        }
      });
    };

    extractLabels(props.children);
    return labels;
  }, [props.children]);

  const [isOpen = false, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

  const [value, setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: propValue,
  });

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(2),
      flip({
        crossAxis: placement.includes("-"),
        padding: 0,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            height: `${rects.floating.height}px`,
            maxHeight: `${Math.max(50, Math.min(rects.floating.height, 400, availableHeight))}px`,
            minWidth: `${rects.reference.width}px`,
            width: `${rects.reference.width}px`,
            maxWidth: `${rects.reference.width}px`,
          });
        },
        padding: 0,
      }),
    ],
  });

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      if (index === null) return;
      if (!isMultiple) setIsOpen(false);
    },
    [isMultiple, setIsOpen, setSelectedIndex],
  );

  function handleTypeaheadMatch(index: number | null) {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
    virtual: disableTypeahead,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
    enabled: !disableTypeahead,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: true,
  });
  const role = useRole(context, { role: "listbox" });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role],
  );

  const onSelectValue = useCallback(
    (option: string | number) => {
      if (isMultiple) {
        const valueSet = new Set(value);
        if (valueSet.has(option)) {
          valueSet.delete(option);
        } else {
          valueSet.add(option);
        }
        setValue(Array.from(valueSet));
      } else {
        setValue(option);
      }
    },
    [isMultiple, setValue, value],
  );
  const hasValue = Array.isArray(value) ? value.length > 0 : !!value;

  const getRootProps: PropGetter<useSelect.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-component": dataAttrDev("select"),
      "data-slot": dataAttrDev("root"),
      "data-disabled": dataAttr(isDisabled),
      className: cn(className, elementProps.className),
      "data-open": dataAttr(isOpen),
    }),
    [elementProps, isDisabled, className, isOpen],
  );

  const getValueProps: PropGetter<SelectValue.Props> = useCallback(
    (props) => ({
      ...mergeProps(props),
      "data-slot": dataAttrDev("value"),
    }),
    [],
  );

  const getTriggerProps: PropGetter<SelectTrigger.Props> = useCallback(
    (props) => ({
      type: "button",
      id: labelId,
      ...mergeProps(props),
      "data-slot": dataAttrDev("trigger"),
      disabled: isDisabled,
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, isDisabled, labelId, setReference],
  );

  const getIndicatorProps: PropGetter<SelectIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("indicator"),
    }),
    [],
  );

  const getContentProps: PropGetter<SelectContent.Props> = useCallback(
    (props) => ({
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      "data-slot": dataAttrDev("content"),
      ...props,
    }),
    [],
  );

  const getPopoverProps: PropGetter<SelectPopover.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("popover"),
      ref: setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
    }),
    [floatingStyles, getFloatingProps, setFloating],
  );

  const getSelectItemProps: PropGetter<Partial<SelectItem.Props>> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("selectItem"),
    }),
    [],
  );

  const getItemIndicatorProps: PropGetter<SelectItemIndicator.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("itemIndicator"),
      }),
      [],
    );

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: true,
      returnFocus,
      initialFocus: 0,
    }),
    [context, returnFocus],
  );

  const getFloatingListProps = useCallback(
    (): Omit<ComponentProps<typeof FloatingList>, "children"> => ({
      elementsRef,
      labelsRef,
    }),
    [],
  );

  const registerItem = useCallback(
    (itemValue: string | number, textValue: string) => {
      // Store in ref for dynamic items (items added after initial render)
      selectLabelsRef.current.set(itemValue, textValue);
      // Trigger re-render to update label if this is a selected item
      setLabelUpdateTrigger((c) => c + 1);
    },
    [],
  );

  const unregisterItem = useCallback((itemValue: string | number) => {
    selectLabelsRef.current.delete(itemValue);
  }, []);

  const selectedLabels = useMemo(() => {
    const values = Array.isArray(value) ? value : value != null ? [value] : [];
    return values
      .map((v) => {
        // First check synchronously parsed labels from children
        const initialLabel = initialLabels.get(v);
        if (initialLabel) return initialLabel;
        // Fall back to dynamically registered labels
        return selectLabelsRef.current.get(v);
      })
      .filter((label): label is string => label != null);
  }, [value, initialLabels]);

  const getRenderValue = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (Array.isArray(value) ? value.length === 0 : !value) return placeholder;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (renderValue) return renderValue(value as any);
    return selectedLabels.join(",");
  }, [placeholder, renderValue, selectedLabels, value]);

  return useMemo(
    () => ({
      getRootProps,
      getTriggerProps,
      getIndicatorProps,
      getContentProps,
      getPopoverProps,
      getSelectItemProps,
      getValueProps,
      isOpen,
      getFocusManagerProps,
      getFloatingListProps,
      value,
      activeIndex,
      getItemProps,
      handleSelect,
      onSelectValue,
      hasValue,
      placeholder,
      getRenderValue,
      getItemIndicatorProps,
      registerItem,
      unregisterItem,
    }),
    [
      activeIndex,
      getItemIndicatorProps,
      registerItem,
      unregisterItem,
      getContentProps,
      getFloatingListProps,
      getFocusManagerProps,
      getIndicatorProps,
      getItemProps,
      getPopoverProps,
      getRenderValue,
      getRootProps,
      getSelectItemProps,
      getTriggerProps,
      getValueProps,
      handleSelect,
      hasValue,
      isOpen,
      onSelectValue,
      placeholder,
      value,
    ],
  );
};

export namespace useSelect {
  export interface Props extends UIProps<"div"> {
    placement?: Placement;
    placeholder?: string;
    disabled?: boolean;
    value?: Select.Value;
    defaultValue?: Select.Value;
    onValueChange?: (value: Select.Value) => void;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (value: boolean) => void;
    isMultiple?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderValue?: (value: any) => React.ReactElement;
    returnFocus?: boolean;
    disableTypeahead?: boolean;
    name?: string;
    form?: string;
  }
}
