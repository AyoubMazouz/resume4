# Output Spec

## Folder Naming

- Create one folder per job under `applications/`.
- Format: `<company>-<role>-<yyyy-mm-dd>`.
- Use lowercase kebab-case for `<company>` and `<role>`.

## Required Artifacts

1. `AyoubMazouz_<yyyy-mm-dd>_en.pdf`
2. `AyoubMazouz_<yyyy-mm-dd>_fr.pdf`
3. `post-details.md`
4. `company-research.md`

## post-details.md Schema

Include sections in this order:

1. Job snapshot
- Title
- Company
- URL
- Location
- Work mode
- Contract type
- Post age
- Capture date

2. Expiration status
- `Active` or `Expired`
- If expired, include evidence line with exact text:
  - `This job has expired on Indeed`

3. Requirements summary
- Seniority requirements
- Core technical stack
- Language requirements
- Constraints and process notes (tests, interviews, on-call, relocation, etc.)

4. Resume tailoring summary
- Changes made to profile headline
- Changes made to skills ordering
- Changes made to experience emphasis

5. Fit statement
- `Best fit`, `Good fit`, or `Stretch`
- Two reasons
- One risk

## company-research.md Schema

Include sections in this order:

1. Company identity
- Official website
- LinkedIn company page
- Other official social links

2. Business summary
- What the company does
- Main product/service lines
- Hiring-relevant context

3. Hiring-chain personnel (LinkedIn)
- Recruiter(s)
- Hiring manager(s)
- Team lead(s)
- Relevant engineers
- For each profile: name, role, profile URL, reason relevance

4. Outreach guidance
- Best first contact target
- Suggested message angle

5. Confidence and unknowns
- High-confidence findings
- Medium-confidence findings
- Missing or unverified items
