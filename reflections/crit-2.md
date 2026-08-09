# Crit 2 reflection

**What was the breakthrough that moved the work forward?**

It was seeing a correction pay for itself. Last week I hit an hour-long
detour caused by `mise` installing pnpm with the wrong Node embedded, and once
I'd found the cause I wrote it into `CLAUDE.md` — mostly on principle, without
knowing whether it would ever matter again. This week that note carried
forward with the harness, and the `.npmrc` fix went in before a single page
existed. The failure that cost me an hour last week cost nothing this week.
Before that I'd been taking the "fix the harness, not the prompt" idea on
faith. Now I've watched it return.

**What did this work change about who I want to be as a developer?**

Measuring before believing. My first thesis about Unity's home page felt
obviously true, and I was about to build an entire site on top of it. The
only reason I didn't is that I checked — counting what was actually clickable
at a real viewport rather than trusting my impression of the page. That check
also caught something else: my earlier measurement had itself been taken at
the wrong viewport, so the belief I was about to build around was wrong twice
over, not once. Being able to generate a whole site in an evening makes it
cheap to build the wrong thing convincingly and have it look finished. The
discipline that actually matters isn't reviewing the output more carefully —
it's verifying the premise before the output exists at all.
