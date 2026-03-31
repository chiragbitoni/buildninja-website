const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const glob = require("glob");

const projectRoot = process.cwd();

const globalCounts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };
const fileReports = [];

const files = glob.sync("**/*.{js,jsx,ts,tsx}", {
  cwd: projectRoot,
  ignore: ["node_modules/**", ".next/**"],
});

files.forEach((file) => {
  const fullPath = path.join(projectRoot, file);
  const code = fs.readFileSync(fullPath, "utf-8");

  let ast;

  try {
    ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });
  } catch (err) {
    console.warn(`Skipping (parse error): ${file}`);
    return;
  }

  const localCounts = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };

  traverse(ast, {
    JSXOpeningElement(p) {
      const name = p.node.name.name;

      if (localCounts[name] !== undefined) {
        localCounts[name]++;
        globalCounts[name]++;
      }
    },
  });

  const totalHeadings = Object.values(localCounts).reduce((a, b) => a + b, 0);

  if (totalHeadings > 0) {
    fileReports.push({
      file,
      ...localCounts,
      total: totalHeadings,
    });
  }
});

// SEO checks
const issues = {
  multipleH1: [],
  missingH1: [],
};

fileReports.forEach((report) => {
  if (report.h1 > 1) issues.multipleH1.push(report.file);
  if (report.h1 === 0) issues.missingH1.push(report.file);
});

console.log("\n=== GLOBAL HEADING COUNT ===");
console.table(globalCounts);

console.log("\n=== FILE REPORTS ===");
console.table(fileReports);

console.log("\n=== SEO ISSUES ===");

console.log("\n❌ Multiple H1:");
issues.multipleH1.forEach((f) => console.log(" -", f));

console.log("\n⚠️ Missing H1:");
issues.missingH1.forEach((f) => console.log(" -", f));

console.log("\n✅ Audit complete!\n");