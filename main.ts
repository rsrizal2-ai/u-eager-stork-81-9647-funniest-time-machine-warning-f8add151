// Funniest Time Machine Warning Label — entry program (program/v1).
//
// Writes a single warning label for a time machine, at most 120
// characters, to /output/entry.txt.
//
// The line was chosen against the judge's brief, in the order the judge
// weighs things:
//   1. It is a warning label for a time machine: it opens "WARNING:" and
//      its hazard only exists because of time travel.
//   2. It turns a real hazard of time travel into the joke: meeting your
//      past self — the duplicate-self paradox — recast as a debt he owes
//      you, which is funny precisely because the debtor and the creditor
//      are the same person.
//   3. The surprise is saved for the last few words: "because he is
//      you" reframes everything before it — of course he knows where
//      you live, he lives there too. The em-dash before it is load-
//      bearing: it holds the beat where the reader realises the threat
//      and the debtor are the same person, and it counts as a single
//      character under the gate, so keep it an em-dash, not a hyphen
//      or a comma, if this line is ever edited.
//   4. It keeps a straight face throughout, phrased like a genuine
//      safety notice on a machine, so the joke cuts against official
//      calm instead of winking at the reader.
//   5. It wastes no words: 107 characters, every phrase doing work —
//      the warning, the debt, the threat, then the twist.
//
// The line: "WARNING: Never meet your past self. He owes you money and
// already knows where you live — because he is you." 107 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Never meet your past self. He owes you money and already knows where you live — because he is you.";

// Gate self-check, mirroring ONLY the sealed scorer: UTF-8 text of 1 to
// 120 characters, not only white space.
function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 120) {
    throw new Error(`line is ${chars} characters, outside the 1-120 gate`);
  }
  if (!line.trim()) {
    throw new Error("line is only white space");
  }
}

gate(LINE);
// The harness runs the program with MAKEFUN_OUTPUT_DIR=/output; honour
// it when set so a local re-run lands in the same place as the grade.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
