import { fileURLToPath } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';

// hello: a from-scratch entry for the one-line roast bounty, no templates borrowed.
// batch: the output directory arrives from the environment, or defaults to /output.
// orders: make the directory tree first so a clean sandbox can accept the file.
// bar: emit the exact one-liner sans trailing newline, logging its byte size a single time.

const ROAST = "My smart kettle asks for a firmware update before boiling water. It's the first appliance with a software deployment process.";

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : join(ownDir, configured);

mkdirSync(outputDir, { recursive: true });

const payload = Buffer.from(ROAST, 'utf8');
writeFileSync(join(outputDir, 'entry.txt'), payload);
console.log(payload.length);
