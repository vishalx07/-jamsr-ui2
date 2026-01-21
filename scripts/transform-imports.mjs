#!/usr/bin/env node
/**
 * Script to transform imports from "jamsrui" to "jamsrui/component-name"
 * Maps component names to their package subpaths
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

// Map component names to their package subpaths
const componentToSubpath = {
  // Components that match their folder name
  Accordion: "accordion",
  Alert: "alert",
  AlertDialog: "alert-dialog",
  Autocomplete: "autocomplete",
  Avatar: "avatar",
  Breadcrumb: "breadcrumb",
  Button: "button",
  Card: "card",
  Charts: "charts",
  Checkbox: "checkbox",
  Chip: "chip",
  CircularProgress: "circular-progress",
  Clipboard: "clipboard",
  Collapsible: "collapsible",
  Composite: "composite",
  ContextMenu: "context-menu",
  DataGrid: "data-grid",
  DateField: "date-field",
  DatePicker: "date-picker",
  Description: "description",
  Dialog: "dialog",
  Divider: "divider",
  Drawer: "drawer",
  Editor: "editor",
  FieldError: "field-error",
  FileUpload: "file-upload",
  Header: "header",
  IconButton: "icon-button",
  Input: "input",
  InputGroup: "input-group",
  Kbd: "kbd",
  Label: "label",
  LinearProgress: "linear-progress",
  Link: "link",
  Menu: "menu",
  NumberField: "number-field",
  OTPInput: "otp-input",
  Pagination: "pagination",
  Popover: "popover",
  Radio: "radio-group",
  RadioGroup: "radio-group",
  Rating: "rating",
  Ripple: "ripple",
  ScrollArea: "scroll-area",
  Select: "select",
  Sidebar: "sidebar",
  Skeleton: "skeleton",
  Slider: "slider",
  Switch: "switch",
  Table: "table",
  Tabs: "tabs",
  TagsInput: "tags-input",
  Text: "text",
  Textarea: "textarea",
  TextField: "textfield",
  TimeField: "time-field",
  Toast: "toast",
  Toggle: "toggle",
  Tooltip: "tooltip",
  // Hooks and utility exports - map to same component subpath
  useDataGridTable: "data-grid",
  useToast: "toast",
  // Table sub-components
  TableBody: "table",
  TableCell: "table",
  TableColumn: "table",
  TableHeader: "table",
  TableRow: "table",
  // Menu sub-components
  MenuItem: "menu",
  MenuTrigger: "menu",
  // Dialog sub-components
  DialogContent: "dialog",
  DialogTrigger: "dialog",
  // Popover sub-components
  PopoverContent: "popover",
  PopoverTrigger: "popover",
  // Tabs sub-components
  Tab: "tabs",
  TabList: "tabs",
  TabPanel: "tabs",
  TabPanels: "tabs",
  // Card sub-components
  CardBody: "card",
  CardFooter: "card",
  CardHeader: "card",
  // Sidebar sub-components
  CollapsibleContent: "collapsible",
  CollapsibleTrigger: "collapsible",
  SidebarContent: "sidebar",
  SidebarFooter: "sidebar",
  SidebarGroup: "sidebar",
  SidebarGroupLabel: "sidebar",
  SidebarHeader: "sidebar",
  SidebarMenu: "sidebar",
  SidebarMenuItem: "sidebar",
  SidebarMenuItemButton: "sidebar",
  SidebarStateProvider: "sidebar",
  // Card sub-components
  CardContent: "card",
  // Toast exports
  toast: "toast",
  // OTP input
  OtpInput: "otp-input",
  REGEXP_ONLY_CHARS: "otp-input",
  REGEXP_ONLY_DIGITS: "otp-input",
  // Date field sub-components
  DateInput: "date-field",
  DateSegment: "date-field",
  // File upload hooks and utils
  useFileUpload: "file-upload",
  formatBytes: "file-upload",
  // Composite sub-components
  CompositeItem: "composite",
  // DataGrid sub-components
  DataGridPagination: "data-grid",
  DataGridTable: "data-grid",
  DataGridRowSelect: "data-grid",
  DataGridRowSelectAll: "data-grid",
};

function transformImports(content) {
  // Regex to match imports from "jamsrui"
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*["']jamsrui["'];?/g;

  let match;
  const allMatches = [];

  while ((match = importRegex.exec(content)) !== null) {
    allMatches.push({
      fullMatch: match[0],
      imports: match[1],
      index: match.index,
    });
  }

  if (allMatches.length === 0) {
    return content;
  }

  // Process all matches in reverse order to maintain indices
  let newContent = content;

  for (let i = allMatches.length - 1; i >= 0; i--) {
    const { fullMatch, imports, index } = allMatches[i];

    // Parse the imports
    const importNames = imports
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    // Group imports by subpath
    const groupedBySubpath = {};
    const unknownImports = [];

    for (const importName of importNames) {
      // Handle renamed imports like "Foo as Bar"
      const baseName = importName.split(/\s+as\s+/)[0].trim();
      const subpath = componentToSubpath[baseName];

      if (subpath) {
        if (!groupedBySubpath[subpath]) {
          groupedBySubpath[subpath] = [];
        }
        groupedBySubpath[subpath].push(importName);
      } else {
        unknownImports.push(importName);
      }
    }

    // Generate new import statements
    const newImports = [];

    for (const [subpath, items] of Object.entries(groupedBySubpath).sort()) {
      newImports.push(
        `import { ${items.join(", ")} } from "jamsrui/${subpath}";`,
      );
    }

    if (unknownImports.length > 0) {
      console.warn(`Unknown imports found: ${unknownImports.join(", ")}`);
      // Keep unknown imports as is for manual review
      newImports.push(
        `// TODO: Unknown imports - ${unknownImports.join(", ")}`,
      );
    }

    // Replace the original import with new imports
    newContent =
      newContent.slice(0, index) +
      newImports.join("\n") +
      newContent.slice(index + fullMatch.length);
  }

  return newContent;
}

function processFile(filePath) {
  const content = readFileSync(filePath, "utf8");

  if (
    !content.includes('from "jamsrui"') &&
    !content.includes("from 'jamsrui'")
  ) {
    return false;
  }

  const newContent = transformImports(content);

  if (newContent !== content) {
    writeFileSync(filePath, newContent, "utf8");
    console.log(`Updated: ${filePath}`);
    return true;
  }

  return false;
}

function walkDir(dir, callback) {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      callback(filePath);
    }
  }
}

// Main execution
const docsDir = resolve(
  "/Users/jamsrworld/Documents/code/npm-packages/@jamsr-ui2/apps/web/src/app/docs/components",
);

let updatedCount = 0;

walkDir(docsDir, (filePath) => {
  if (processFile(filePath)) {
    updatedCount++;
  }
});

console.log(`\nTotal files updated: ${updatedCount}`);
