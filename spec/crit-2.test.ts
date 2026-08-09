import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// Crit 2: "Unsolicited redesign" — https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/crits/02-unsolicited-redesign/
// Target: Unity's homepage (unity.com). The thesis: a newcomer reading the
// real unity.com can't tell what Unity is, what they can ship to, or whether
// they'd have to pay. Four pages answer those in turn: index, make, cost,
// start. This file only covers what's mechanically checkable — whether the
// redesign is actually *better*, and whether it's rewritten rather than
// pasted, are for the crit, not a test.

const REAL_SITE_HOST = "unity.com";
const PAGES = ["index.html", "make.html", "cost.html", "start.html"];

function loadPage(name: string) {
  const distPath = resolve("dist", name);
  expect(
    existsSync(distPath),
    `${distPath} not found yet — this page hasn't been built.`,
  ).toBe(true);
  return new JSDOM(readFileSync(distPath, "utf8")).window.document;
}

describe("crit 2: unofficial redesign of Unity's site", () => {
  for (const page of PAGES) {
    it(`${page} carries the unofficial-redesign disclaimer, linking to the real site`, () => {
      const doc = loadPage(page);
      const hrefs = [...doc.querySelectorAll("a[href]")].map((a) =>
        a.getAttribute("href"),
      );
      expect(
        hrefs.some((href) => href?.includes(REAL_SITE_HOST)),
        `expected a link to the real ${REAL_SITE_HOST} somewhere on ${page}`,
      ).toBe(true);
    });
  }

  it("index.html tells a newcomer what Unity actually is", () => {
    const doc = loadPage("index.html");
    const text = doc.body.textContent?.toLowerCase() ?? "";
    expect(
      text.includes("game engine"),
      "the real homepage never plainly says Unity is a game engine — this redesign has to",
    ).toBe(true);
  });

  it("start.html names a real alternative engine, honestly", () => {
    const doc = loadPage("start.html");
    const text = doc.body.textContent?.toLowerCase() ?? "";
    expect(
      text.includes("unreal") || text.includes("godot"),
      "getting-started copy should help a newcomer choose, by naming at least one alternative engine",
    ).toBe(true);
  });
});
