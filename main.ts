// Entry for the make.fun competition
// "Ridiculous at First Glance, Real by the Second"
// (slug: u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
//
// Writes the winning one-sentence startup pitch (189 chars, max 200)
// to /output/entry.txt.

const fs = require("fs");
const path = require("path");

const ENTRY =
  "An app that auctions naming rights to potholes, paid by local shops whose logo gets stencilled around the hole until the shamed city finally fixes it \u2014 advertising with a built-in deadline.";

const outDir = path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(`Wrote entry (${ENTRY.length} chars) to output/entry.txt`);
