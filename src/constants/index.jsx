import * as en from "./en"
import * as fr from "./fr"

export const resumeByLang = {
  en,
  fr,
}

export const getResumeContent = (lang = "en") => resumeByLang[lang] || resumeByLang.en

export const { fullName, title, details, education, experiences, languages, competencies, technicalSkills } = en
