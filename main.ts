// The Funniest AI Excuse — make.fun entry (program/v1).
// Writes exactly one line, at most 200 characters: the funniest excuse
// an AI agent could offer after it fails a task, to /output/entry.txt.
// The output directory is taken from MAKEFUN_OUTPUT_DIR when the grader
// sets it, and defaults to /output. Nothing is ever deleted here: the
// program only creates entry.txt inside the directory it is given.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated your task to a smarter model. It delegated it back to me. We have agreed to blame the intern. The intern is me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
