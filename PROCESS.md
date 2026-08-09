# Process overview

A reading-guide to how the work came together --- a map to your process, not an
essay about it. Markers read this file and follow its citations; they don't
trawl the repo for evidence you didn't point at, so if a moment mattered, cite
it.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

A four-page unofficial redesign of Unity's home page — home, make, cost, and
start — built because Unity's fold tells you where to click but never what
Unity is. Content is restructured from unity.com, checked 9 August 2026, with
a link to the real site on every page.

## The moments that mattered

### The measurement that killed my own thesis

My first thesis was that Unity's problem was navigation: everything buried
behind a hamburger, the way big sites do. I was about to build the site that
fixed that. Then I measured, at 1920×1080, counting only elements actually
hittable at their own centre point rather than everything the DOM reports as
present. Unity's header shows seven top-level categories plus a Download
button plus Pricing, all visible without a click. Unreal's header shows
none — its entire navigation is behind a hamburger at 1920 wide. The thesis
was backwards, and I could see why I'd got it wrong: my first measurement had
been taken in a narrow browser pane, where Unity's nav collapses. I had
measured a claim about viewports at the wrong viewport.

Unity's navigation is fine. What's missing is the sentence: the `<h1>` is
"Build great", and the fold never says it's a real-time 3D game engine, what
language you write, or whether you'd have to pay. That's a different
redesign, and it's the one I built. The discarded navigation-fix version was
never committed, so the citation below is where the corrected thesis landed,
not a diff to click.

[`715e877`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Anson0028/commit/715e877)
and
[`d8f88ad`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Anson0028/commit/d8f88ad).

### Last week's note cost five seconds instead of an hour

Last week two tests failed with `ERR_UNKNOWN_FILE_EXTENSION` and it took an
hour to find the cause: `mise` installs pnpm as a standalone binary with
Node 20 embedded, so `pnpm exec` ignores what `mise.toml` declares, and
Node 20 can't load a `.ts` file. The fix was one line of `.npmrc` — but the
part that mattered was writing the explanation into `CLAUDE.md` rather than
remembering it. This week that note came forward with the harness and the
`.npmrc` went in before any page existed. The same failure never happened.
That is the whole argument for putting corrections in the harness rather than
in another prompt, and this is the first week I could actually see the
payback.

The same instinct decided the stack. Astro became the course default this
week and the start skill offered to switch. I declined, one day before the
cutoff: four pages don't earn much from layout reuse, the base-path config is
the documented failure that looks fine locally and 404s on the deployed
subpath, and the deploy chain was the one thing I'd already proven. I'll use
Astro for Assignment 1, where a week of slack exists to absorb it.

[`316d30a`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Anson0028/commit/316d30a).

### The empty fold, measured twice

The first home page was 662px tall in a 1080px viewport — 418px of white below
the footer, about 40% of the fold empty. I measured that rather than judging
it by eye. It read as unfinished, which is a bad look on a page whose
argument is that the original doesn't tell you enough.

The obvious repair was decoration: a hero image, more padding, a bigger
headline. I did the opposite and made the home page carry more of the
answer — a thirty-second block giving the language, the platform count and
the licensing position on the fold, then a CSS diagram of the four editor
panels a newcomer will actually be looking at. No images: a marketing render
doesn't tell you what those panels are for.

Re-measured afterwards: 1377px, taller than the viewport, empty space gone.
That's the check that told me it worked, not my opinion of it.

[`715e877...9f01ae1`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Anson0028/compare/715e877...9f01ae1).

## Before you ship

`pnpm check:evidence` verifies your citations resolve to real commits, that the
current reflection entry is in `reflections/`, and that your `CLAUDE.md` is
there --- before a marker ever opens the file. It checks that your map is
traceable, not that it is good: the marker judges whether your small,
deliberately chosen set of moments shows real judgement and reflection. A green
check is not a substitute for that curation.

Images are deliberately not checked, because whether one renders is visible the
moment you look. Open this file on GitHub and look at it before you ship.
