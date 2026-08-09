import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// Crit 2: "Unsolicited redesign" — https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/crits/02-unsolicited-redesign/
// Target: Unity's homepage (unity.com). The brief: a newcomer reading the real
// unity.com homepage can't tell what Unity actually is, or how it compares to
// alternatives like Unreal Engine. This file only covers what's mechanically
// checkable — whether the redesign is actually *better*, and whether it's
// rewritten rather than pasted, are for the crit, not a test.

const REAL_SITE_HOST = "unity.com";

function loadHome() {
  const distPath = resolve("dist/index.html");
  return new JSDOM(readFileSync(distPath, "utf8")).window.document;
}

describe("crit 2: unsolicited redesign of Unity's homepage", () => {
  it("links to the real organisation's own site", () => {
    const doc = loadHome();
    const hrefs = [...doc.querySelectorAll("a[href]")].map((a) =>
      a.getAttribute("href"),
    );
    expect(
      hrefs.some((href) => href?.includes(REAL_SITE_HOST)),
      `expected a link to the real ${REAL_SITE_HOST} somewhere on the page`,
    ).toBe(true);
  });

  it("tells a newcomer what Unity actually is", () => {
    const doc = loadHome();
    const text = doc.body.textContent?.toLowerCase() ?? "";
    expect(
      text.includes("engine"),
      "the real homepage never plainly says Unity is a game engine — this redesign has to",
    ).toBe(true);
  });

  it("positions Unity against its alternatives by name", () => {
    const doc = loadHome();
    const text = doc.body.textContent?.toLowerCase() ?? "";
    expect(
      text.includes("unreal") || text.includes("godot"),
      "the brief is to say where Unity stands relative to other engines, naming at least one",
    ).toBe(true);
  });
});
