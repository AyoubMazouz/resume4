# Company Research Schema

Use this schema to keep company dossiers consistent and useful.

## Required Fields

### 1) Corporate Presence

- `official_website`
- `linkedin_company_page`
- `social_accounts`:
  - `x_or_twitter`
  - `facebook`
  - `instagram`
  - `youtube`
  - `github`
  - `other`

If unavailable, write `Not found`.

### 2) Company Profile

- `industry`
- `business_model`
- `products_or_services`
- `geographic_presence`
- `hiring_signal_summary`

### 3) Hiring-Chain Personnel (LinkedIn Focus)

Target this order:
1. Recruiter or Talent Acquisition
2. Engineering Manager or Department Manager
3. Team Lead / Tech Lead
4. Relevant engineers in similar stack/domain

For each person include:
- `name`
- `current_role`
- `linkedin_url`
- `relevance_reason`
- `confidence` (`high`, `medium`, `low`)

### 4) Candidate Action Guidance

- `priority_contact`
- `contact_sequence`
- `short_outreach_angle`
- `portfolio_or_resume_emphasis`

### 5) Risks and Unknowns

- `data_gaps`
- `unverified_claims`
- `watch_items`

## Research Rules

- Prefer first-party sources first.
- Keep role relevance explicit for each person listed.
- Do not infer employment details without evidence.
- Mark uncertain findings with `confidence: low`.
