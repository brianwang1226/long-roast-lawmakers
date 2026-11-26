// The Long Roast: Lawmakers and the Forgotten — make.fun one-liner.
// A long roast of lawmakers who promised everything and delivered nothing:
// the roads, the rent, and the rain were all meant to be fixed, and two
// years on only the rain still shows up on time. The punchline lands on
// the contrast: the one thing nobody voted for is the only thing that
// keeps its word, while the people paid to fix things quietly forgot us.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 320;

const LINE =
  "They promised to fix the roads, the rent, and the rain. Two years later the roads have potholes, the rent doubled, and the rain is the only thing that still shows up on time. At least something in this town keeps its promises.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
