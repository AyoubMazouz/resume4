---
name: job-fit-post-finder
description: Find and rank job posts that match a candidate resume and target roles. Use when the user asks to search job boards (especially Indeed), filter by location/date/role, detect expired posts, summarize candidate-relevant details, and prioritize best-fit applications.
---

# Job Fit Post Finder

## Overview

Find active job posts and turn them into a shortlist the candidate can decide from quickly.
Prioritize fit quality, recency, and application readiness over raw post volume.

## Workflow

1. Build candidate profile
- Read resume sources first (for example `src/constants/en.jsx`, `src/constants/fr.jsx`, resume PDFs, or user-provided profile text).
- Extract target roles, seniority level, core stack, certifications, languages, location preference, and constraints.
- Infer primary and secondary role tracks when user intent is broad.

2. Define search slices
- Run separate queries for each track (for example: `DevOps`, `DevSecOps`, `Platform Engineer`, `Software Engineer`, `Full-Stack Developer`).
- Apply user filters exactly (location, date range, contract type, remote/hybrid).
- Prefer focused queries over one broad query.

3. Collect and verify posts
- Open individual job pages, not only listing cards.
- For Indeed, check each page for exact expiration text: `This job has expired on Indeed`.
- Mark as `Expired` if present and exclude from active recommendations.

4. Extract candidate-critical details
- Capture: title, company, location, work mode, contract type.
- Capture: required experience, required stack/tools, language expectations.
- Capture: salary/range if visible and application constraints (assessment steps, email requirements, on-call, relocation).
- Capture post age; if unavailable, state `Not shown in posting` and include observation date.

5. Score fit
- Use `references/fit-scoring.md`.
- Label each post as `Best fit`, `Good fit`, or `Stretch`.
- Include two short reasons and one concrete risk.

6. Produce shortlist
- Use `references/output-template.md`.
- Order active posts by fit, then by recency.
- Add an `Excluded as expired` section when applicable.

## Quality Bar

- Use absolute dates for relative requests such as `today`, `this month`, or `latest`.
- Never present expired posts as active options.
- Do not hide missing information; write `Not shown in posting`.
- Keep each summary concise but decision-ready for a candidate.

## Resources

- Scoring rubric: `references/fit-scoring.md`
- Output format: `references/output-template.md`
