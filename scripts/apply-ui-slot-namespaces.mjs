import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const uiSrcDir = path.join(repoRoot, "packages/ui/src");
const isCheck = process.argv.includes("--check");

const walk = (dir, files = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
};

const normalizeType = (value) => {
  return value.replace(/\s+/g, " ").replace(/,\s*$/, "").trim();
};

const findNamespaceBlock = (text, name) => {
  const keyword = `export namespace ${name}`;
  const start = text.indexOf(keyword);
  if (start === -1) return null;

  const braceStart = text.indexOf("{", start);
  if (braceStart === -1) return null;

  let depth = 0;
  for (let index = braceStart; index < text.length; index += 1) {
    const char = text[index];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;

    if (depth === 0) {
      return {
        start,
        braceStart,
        end: index + 1,
        body: text.slice(braceStart + 1, index),
      };
    }
  }

  return null;
};

const hasPropsInterface = (namespaceBody) => {
  return /export interface\s+Props\b/.test(namespaceBody);
};

const ensureNamespaceProps = (text, name, extendsType) => {
  const block = findNamespaceBlock(text, name);

  if (block && hasPropsInterface(block.body)) {
    return { text, changed: false };
  }

  if (!extendsType) {
    return { text, changed: false };
  }

  const propsLine = `  export interface Props extends ${normalizeType(extendsType)} {}`;

  if (!block) {
    let nextText = text;
    if (!nextText.endsWith("\n")) {
      nextText += "\n";
    }
    nextText += `\nexport namespace ${name} {\n${propsLine}\n}\n`;
    return { text: nextText, changed: true };
  }

  const nextText =
    text.slice(0, block.end - 1) + `\n${propsLine}\n` + text.slice(block.end - 1);

  return { text: nextText, changed: true };
};

const parseObjectAssignInfo = (declarationText) => {
  const match = declarationText.match(
    /Object\.assign\s*\(\s*([A-Za-z0-9_]+)\s*,\s*\{([\s\S]*)\}\s*\)/,
  );
  if (!match) return null;

  const rootAlias = match[1];
  const objectBody = match[2];
  const slotEntries = [];
  const pairRe = /([A-Za-z0-9_]+)\s*:\s*([A-Za-z0-9_]+)/g;

  for (const pair of objectBody.matchAll(pairRe)) {
    slotEntries.push({ slotName: pair[1], componentName: pair[2] });
  }

  return { rootAlias, slotEntries };
};

const findObjectAssignDeclarations = (text) => {
  const declarations = [];
  const re = /export const\s+([A-Za-z0-9_]+)\s*=\s*Object\.assign\s*\(/g;

  for (const match of text.matchAll(re)) {
    const componentName = match[1];
    const start = match.index;
    const openParen = text.indexOf("(", start + match[0].length - 1);
    if (openParen === -1) continue;

    let depth = 0;
    let closeParen = -1;
    for (let index = openParen; index < text.length; index += 1) {
      const char = text[index];
      if (char === "(") depth += 1;
      if (char === ")") depth -= 1;
      if (depth === 0) {
        closeParen = index;
        break;
      }
    }

    if (closeParen === -1) continue;

    const semicolon = text.indexOf(";", closeParen);
    const end = semicolon === -1 ? closeParen + 1 : semicolon + 1;
    const declarationText = text.slice(start, end);
    const parsed = parseObjectAssignInfo(declarationText);
    if (!parsed) continue;

    declarations.push({
      componentName,
      rootAlias: parsed.rootAlias,
      slotEntries: parsed.slotEntries,
      declarationEnd: end,
    });
  }

  return declarations;
};

const collectNamesWithProps = (filePaths) => {
  const names = new Set();

  for (const filePath of filePaths) {
    const text = fs.readFileSync(filePath, "utf8");
    for (const match of text.matchAll(/export namespace\s+([A-Za-z0-9_]+)\s*\{/g)) {
      const block = findNamespaceBlock(text, match[1]);
      if (block && hasPropsInterface(block.body)) {
        names.add(match[1]);
      }
    }
  }

  return names;
};

const processComponentFile = (filePath) => {
  const original = fs.readFileSync(filePath, "utf8");
  let text = original;
  let changed = false;

  const baseTypeByName = new Map();
  const componentRe =
    /export const\s+([A-Za-z0-9_]+)\s*=\s*\(\s*props:\s*([\s\S]*?)\s*,?\s*\)\s*=>\s*\{/g;
  const componentMatches = [...original.matchAll(componentRe)];

  for (let index = componentMatches.length - 1; index >= 0; index -= 1) {
    const match = componentMatches[index];
    const name = match[1];
    const propType = normalizeType(match[2]);
    const expectedType = `${name}.Props`;

    if (propType !== expectedType) {
      const replacement = `export const ${name} = (props: ${expectedType}) => {`;
      text = text.slice(0, match.index) + replacement + text.slice(match.index + match[0].length);
      changed = true;
    }

    if (propType !== expectedType && !baseTypeByName.has(name)) {
      baseTypeByName.set(name, propType);
    }
  }

  const aliasRe =
    /export const\s+([A-Za-z0-9_]+)\s*:\s*typeof\s+([A-Za-z0-9_.]+)\s*=\s*[\s\S]*?;/g;
  for (const match of original.matchAll(aliasRe)) {
    const name = match[1];
    if (!baseTypeByName.has(name)) {
      baseTypeByName.set(name, `React.ComponentProps<typeof ${match[2]}>`);
    }
  }

  const names = new Set([...componentMatches.map((match) => match[1]), ...baseTypeByName.keys()]);
  for (const name of names) {
    const result = ensureNamespaceProps(text, name, baseTypeByName.get(name));
    text = result.text;
    changed = changed || result.changed;
  }

  if (changed && !isCheck) {
    fs.writeFileSync(filePath, text);
  }

  return changed;
};

const cleanupUnusedReactTypeImports = (text) => {
  return text.replace(
    /^import type\s*\{\s*([^}]+)\s*\}\s*from\s*"@jamsrui\/react";\n?/gm,
    (fullMatch, rawSpecifiers, offset, source) => {
      const remainingSource = source.slice(0, offset) + source.slice(offset + fullMatch.length);
      const specifiers = rawSpecifiers
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
        .map((value) => {
          const parts = value.split(/\s+as\s+/);
          return {
            imported: parts[0],
            local: parts[1] ?? parts[0],
          };
        });

      const usedSpecifiers = specifiers.filter(({ local }) => {
        return new RegExp(`\\b${local}\\b`).test(remainingSource);
      });

      if (usedSpecifiers.length === 0) {
        return "";
      }

      if (usedSpecifiers.length === specifiers.length) {
        return fullMatch;
      }

      const nextSpecifiers = usedSpecifiers
        .map(({ imported, local }) => {
          return imported === local ? imported : `${imported} as ${local}`;
        })
        .join(", ");

      return `import type { ${nextSpecifiers} } from "@jamsrui/react";\n`;
    },
  );
};

const processIndexFile = (filePath, componentsWithProps) => {
  const original = fs.readFileSync(filePath, "utf8");
  const declarations = findObjectAssignDeclarations(original);

  if (declarations.length === 0) {
    return false;
  }

  let text = original;
  let changed = false;

  for (let index = declarations.length - 1; index >= 0; index -= 1) {
    const declaration = declarations[index];
    const lines = [`  export interface Props extends ${declaration.rootAlias}.Props {}`];

    for (const entry of declaration.slotEntries) {
      if (componentsWithProps.has(entry.componentName)) {
        lines.push(
          `  export interface ${entry.slotName} extends ${entry.componentName}.Props {}`,
        );
      }
    }

    const nextNamespace =
      `export namespace ${declaration.componentName} {\n` +
      `${lines.join("\n")}\n` +
      `}`;

    const existingBlock = findNamespaceBlock(text, declaration.componentName);
    if (!existingBlock) {
      text =
        text.slice(0, declaration.declarationEnd) +
        `\n\n${nextNamespace}` +
        text.slice(declaration.declarationEnd);
      changed = true;
      continue;
    }

    if (text.slice(existingBlock.start, existingBlock.end) !== nextNamespace) {
      text =
        text.slice(0, existingBlock.start) +
        nextNamespace +
        text.slice(existingBlock.end);
      changed = true;
    }
  }

  const cleanedText = cleanupUnusedReactTypeImports(text);
  if (cleanedText !== text) {
    text = cleanedText;
    changed = true;
  }

  if (changed && !isCheck) {
    fs.writeFileSync(filePath, text);
  }

  return changed;
};

const main = () => {
  const allFiles = walk(uiSrcDir);
  const componentFiles = allFiles.filter((filePath) => filePath.endsWith(".tsx"));
  const indexFiles = allFiles.filter((filePath) => path.basename(filePath) === "index.ts");

  const changedFiles = [];

  for (const filePath of componentFiles) {
    if (processComponentFile(filePath)) {
      changedFiles.push(path.relative(repoRoot, filePath));
    }
  }

  const componentsWithProps = collectNamesWithProps(componentFiles);

  for (const filePath of indexFiles) {
    if (processIndexFile(filePath, componentsWithProps)) {
      changedFiles.push(path.relative(repoRoot, filePath));
    }
  }

  const uniqueChangedFiles = [...new Set(changedFiles)].sort();

  if (uniqueChangedFiles.length === 0) {
    console.log(isCheck ? "No pending ui slot namespace updates." : "No ui slot namespace changes needed.");
    return;
  }

  const label = isCheck ? "Pending ui slot namespace updates:" : "Updated ui slot namespace files:";
  console.log(label);
  for (const filePath of uniqueChangedFiles) {
    console.log(`- ${filePath}`);
  }

  if (isCheck) {
    process.exitCode = 1;
  }
};

main();