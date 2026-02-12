---
name: "job-application-packager"
description: "Build a complete package for one selected job post, including tailored resume content, EN/FR resume PDFs, post details, and company hiring research."
---

# Job Application Packager

## Overview

Produce one decision-ready application package per selected role.
Generate tailored resume outputs and a concise research dossier in a deterministic folder layout.

## Inputs

- Require one target job URL and one output date.
- Use candidate profile from local resume sources:
  - `src/constants/en.jsx`
  - `src/constants/fr.jsx`
- Optional: user-provided constraints (location, contract, work mode, seniority target).

## Workflow

1. Validate selected post
- Open the job page directly.
- Capture title, company, role family, location, work mode, contract type, requirements, and post age.
- For Indeed pages, check exact expiration text: `This job has expired on Indeed`.
- If expired, mark as expired and stop package generation unless user explicitly asks to continue.

2. Tailor resume content
- Apply `references/tailoring-rules.md`.
- Re-rank and rewrite only emphasis and ordering; do not fabricate experience.
- Keep EN and FR resume variants aligned in claims and chronology.

3. Build company hiring dossier
- Apply `references/company-research-schema.md`.
- Collect:
  - official website
  - official social accounts
  - LinkedIn company page
  - hiring-chain personnel on LinkedIn (recruiter, hiring manager, team lead, relevant engineers)
- Use `references/source-priority.md` to mark confidence and unresolved unknowns.

4. Generate output package
- Create folder name: `<company>-<role>-<yyyy-mm-dd>` inside `applications/`.
- Generate markdown files using `references/output-spec.md`.
- Generate PDFs (A4, no margin, print backgrounds) using existing exporter:
  - `scripts/export-resume-pdfs.cjs`
- Output filenames:
  - `AyoubMazouz_<yyyy-mm-dd>_en.pdf`
  - `AyoubMazouz_<yyyy-mm-dd>_fr.pdf`

5. Verify package completeness
- Confirm all required files exist.
- Confirm PDFs generated with expected names.
- Confirm post status block and company dossier sections are present.

## Output Contract

For each selected job, create:

- `applications/<company>-<role>-<yyyy-mm-dd>/AyoubMazouz_<yyyy-mm-dd>_en.pdf`
- `applications/<company>-<role>-<yyyy-mm-dd>/AyoubMazouz_<yyyy-mm-dd>_fr.pdf`
- `applications/<company>-<role>-<yyyy-mm-dd>/post-details.md`
- `applications/<company>-<role>-<yyyy-mm-dd>/company-research.md`

## Quality Rules

- Use absolute dates in all markdown outputs.
- Never present expired posts as active opportunities.
- If a field is missing, write `Not shown in posting`.
- Keep claims factual and traceable to resume or cited source.

## Resources

- Output schema: `references/output-spec.md`
- Company dossier schema: `references/company-research-schema.md`
- Tailoring rules: `references/tailoring-rules.md`
- Source confidence rules: `references/source-priority.md`
