---
target: projects grid / landing page (src/routes/index.tsx)
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
target_identity: "file:C:\\Users\\anthe\\.myscripts\\netovieira\\src\\routes\\index.tsx"
target_fingerprint: "sha256:2dcce3ee9c50895997114c68945321f68f19c9d0be52e8924191ed58a710f5fe"
target_path: "C:\\Users\\anthe\\.myscripts\\netovieira\\src\\routes\\index.tsx"
timestamp: 2026-09-19T19-24-55Z
slug: src-routes-index-tsx
---
Method: dual-agent (A: general-purpose design-review agent · B: general-purpose detector+evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section indicator in nav while scrolling |
| 2 | Match System / Real World | 3 | JuriSuit fallback icon (braces) doesn't represent a legal-SaaS product |
| 3 | User Control and Freedom | 3 | No back-to-top after long single-page scroll |
| 4 | Consistency and Standards | 2 | 3 different visual treatments across 5 project cards; grid sizing is position-keyed, not content-keyed |
| 5 | Error Prevention | 2 | JuriSuit tagged "Projeto em desenvolvimento" while its own copy describes a shipped, Stripe-billed product |
| 6 | Recognition Rather Than Recall | 3 | `0{index+1}` numbering motif reused consistently across sections, aids orientation |
| 7 | Flexibility and Efficiency | n/a | single static route, not applicable to a Persuade-mode landing page |
| 8 | Aesthetic and Minimalist Design | 2 | Projects section runs a second, uncontrolled typographic system (headlines baked into JPEGs) plus an unstyled empty grid track |
| 9 | Error Recovery | 2 | No functional error states; the miscalibrated "Work in progress" label acts as a false status message |
| 10 | Help and Documentation | n/a | not applicable to a single-page portfolio |
| **Total** | | **20/32** | **Acceptable (62.5%)** |

## Design Specificity Verdict

**LLM assessment**: Mostly authored, not templated. Real project names, bilingual PT-first copy with a synced `<html lang>`, and a numbered-eyebrow motif (`0{index+1}`) reused across capability cards, project cards, and timeline rows all read as built for this person specifically. The one place genericness leaks through is the projects grid: 2 of 5 cards bake marketing headlines into raster screenshots, 1 of 5 has no image at all (falls back to a generic braces-icon + concentric-circle decoration that reads as stock "dev portfolio filler," not JuriSuit-specific).

**Deterministic scan**: `impeccable detect --json` on `src/routes/index.tsx` + `src/routes/__root.tsx` → exit 0, 1 finding: `overused-font` (severity: warning, category: slop) at `__root.tsx:97` — Space Grotesk + DM Sans are flagged as fonts so common they read as template defaults, which cuts against the "distinctive/professional" upgrade you're after. No false positives.

**Visual overlays**: not available — no browser automation tool is exposed in this session, so no live `[Human]`-tab overlay was injected. Assessment B substituted static-HTML evidence from the actual prerendered build output (`.output/public/index.html`) instead of a live browser pass. Flagging this per protocol rather than silently skipping it.

## Overall Impression

The page's foundation (semantics, i18n architecture, heading discipline, the numbering system) is well above average for a solo portfolio. But the *one section built to prove competence to a hiring evaluator* — Projects — is measurably the weakest, least consistent part of the page, exactly matching what you flagged unprompted. There's also a real accessibility regression (landmark roles) neither of us would have caught from a screenshot alone, which is the value of running the detector pass.

## What's Working

- **The numbering motif as a design system**: `0{index+1}` eyebrow tags recur in capability cards, project cards, and timeline rows, styled once via `.section-eyebrow`. Cheap, consistent, reinforces a "systems engineer" identity.
- **Correct semantic/heading discipline**: exactly one `<h1>`, section titles consistently `<h2>` via a shared `SectionHeader` component, sub-items consistently `<h3>`. Rare for a marketing page to get this right unprompted.
- **Bilingual architecture done properly**: one `content.pt`/`content.en` object with parallel keys/array lengths, `document.documentElement.lang` synced in a `useEffect` — an SEO/a11y detail most bilingual sites skip.

## Priority Issues

**[P0] Projects grid has a real layout bug, not just "inconsistent sizing."**
Why it matters: `.project-grid` is a 12-col grid. `project-wide` (span 8) is hardcoded to `index === 0 || index === 3` (MeuWatt, Thero); `nth-child(2)`/`nth-child(5)` (JuriSuit, Mouraverse) get span 4; Nexo (`nth-child(3)`) keeps the base span 5 plus an unrelated `margin-top: 4rem`. Running the browser's row-placement math: Row 1 = MeuWatt(8)+JuriSuit(4) = 12, fills exactly. Row 2 = Nexo(5) alone — Thero (span 8) can't fit the remaining 7 columns, so it wraps to Row 3 with Mouraverse(4). **Nexo renders at ~42% width with a 7-column dead zone of raw background beside it** — a visible empty rectangle, not a design choice.
Fix: replace the `index === 0 || index === 3` + `nth-child` overrides (which don't compose) with an explicit, content-aware layout — either `grid-template-areas` sized by real signal (traction/complexity/recency) or a `size` field per project in the data.
Suggested command: `/impeccable layout`

**[P0] Card treatment is 3 inconsistent systems, not a deliberate bento grid.**
Why it matters: MeuWatt/Mouraverse use plain photography; Nexo/Thero embed large marketing headlines directly into the raster image; JuriSuit has no `image` key at all and falls back to a generic braces-icon placeholder. There's no shared rule for when headline-in-image applies, so the section reads as unfinished rather than curated.
Fix: pick one pattern — headline text lives in the DOM everywhere (consistent, accessible, matches the rest of the page's type system) — and get a real JuriSuit screenshot or an intentional non-photo treatment applied consistently, not by omission.
Suggested command: `/impeccable layout`

**[P1] `<header>` and `<footer>` both nest inside `<main>`, losing their ARIA landmark roles.**
Why it matters: confirmed in the actual prerendered `.output/public/index.html` — `<header>` is a direct child of `<main>` (loses the `banner` role to assistive tech), and `<footer>` is a descendant of `<section id="contato">` and `<main>` (loses `contentinfo`). Screen-reader users navigating by landmark lose two of the page's main orientation points.
Fix: move `<header>` to be a sibling of `<main>`, and move `<footer>` outside both the last `<section>` and `<main>`.
Suggested command: `/impeccable audit`

**[P1] JuriSuit's "Work in progress" label actively contradicts its own copy.**
Why it matters: `copy.privateProject` ("Projeto em desenvolvimento") shows whenever a project has no `href` — but JuriSuit's `statement`/`solution` copy describes a live, Stripe-integrated SaaS product in present tense. To an evaluator this reads as an unfinished portfolio entry, which is the worst possible read for a hire decision.
Fix: depends on the real status — either a distinct "Privado / projeto de cliente" label with matching tone, or if genuinely unshipped, softer forward-looking copy. This needs your call on which is true.
Suggested command: `/impeccable clarify`

**[P1] Baked-in marketing headlines are invisible to screen readers.**
Why it matters: Nexo's and Thero's `imageAlt` describes the screenshot generically ("Página do Nexo...") but never transcribes the headline rendered inside the image itself (WCAG 1.1.1 gap). Sighted visitors get the pitch; screen-reader visitors get none of it, specifically on your two flagship projects.
Fix: resolved as a side effect of the P0 fix above once headline text moves into the DOM; if that's deferred, transcribe the headline into the alt text as an interim fix.
Suggested command: `/impeccable audit`

**[P2] Leftover desktop margin bleeds into mobile.**
Why it matters: `.project-card:nth-child(3) { margin-top: 4rem }` has higher specificity than the mobile-reset rule, so the stacked mobile list still shows an unexplained ~64px gap above the Nexo card — reads as a rendering bug at exactly the point a mobile visitor decides whether to keep scrolling.
Fix: fold the margin reset into the same breakpoint that collapses the grid to `display: block`.
Suggested command: `/impeccable adapt`

**[P2] Font pairing reads as template-default.**
Why it matters: the detector flagged Space Grotesk + DM Sans specifically as an "overused" combination — directly relevant to your ask for something more distinctive/professional-feeling.
Fix: either commit harder to the current pair with more editorial sizing/weight contrast, or swap one face for something less common. Your call — this is a taste decision, not a bug.
Suggested command: `/impeccable typeset`

## Persona Red Flags

**Recruiter/client doing a 30-60s skim**: Lands on Projects — the section built to prove competence — and the very first row pairs real photography (MeuWatt) against no image at all (JuriSuit). That specific adjacency, in the most-scrutinized row, reads as "didn't finish their own portfolio."

**Mobile visitor**: Hits an unexplained blank gap before the Nexo card mid-scroll (the leftover desktop margin bleeding through) — looks like a bug, not a choice, right when they're deciding whether to keep scrolling.

**Accessibility-dependent visitor (screen reader)**: On Nexo and Thero — the two cards with the strongest marketing copy — that copy exists only as pixels inside a JPEG; alt text never transcribes it. Weakest pitch of the whole page, landing on the two flagship projects.

## Minor Observations

- `project.stack.slice(0, 3)` silently drops tags past the third — Mouraverse loses "Python" and "Kubernetes" from display even though the data has them.
- `principle.number` values are hardcoded strings ("01","02","03") instead of computed from index like everywhere else — works today only because it happens to match position.
- The `consulting` array (capability-card copy) lives as a local const instead of inside `content.pt`/`content.en` like the rest of the copy — an i18n inconsistency easy to forget when maintaining translations.
- Contact button (`bg-accent text-accent-foreground`, "Conversar no LinkedIn") pairs a mid-lightness saturated blue with near-white text — not measured exactly, but worth a real contrast-ratio spot check since it's less clear-cut than the muted-text-on-near-black pairings used elsewhere.
- A claimed "third timeline row permanently highlighted blue" in the initial screenshot read has no basis in the source (`.timeline-row h3` only colors on `:hover`) — likely a hover-state artifact from how that screenshot was captured, not a real bug. Worth a quick live look to confirm nothing is actually stuck in a hover/focus state.

## Questions to Consider

1. If the "headline baked into the screenshot" treatment is meant to signal "hero project," why does the most enterprise-credible product (MeuWatt) not get it?
2. Is JuriSuit actually live behind an NDA, or genuinely pre-launch? The fix is completely different depending on the answer.
3. Should the projects grid become a deliberately authored bento layout (sized by real signal) instead of the current position-keyed overrides that don't compose?
