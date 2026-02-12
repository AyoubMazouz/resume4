import React from "react"
import { Icon } from "@iconify/react"
import { getResumeContent } from "./constants"

const sectionLabels = {
  en: {
    education: "EDUCATION",
    experience: "EXPERIENCE",
    competencies: "Competencies",
    languages: "Languages",
  },
  fr: {
    education: "FORMATION",
    experience: "EXPÉRIENCE",
    competencies: "Compétences",
    languages: "Langues",
  },
}

const Container = ({ title, children }) => {
  return (
    <div className="relative px-5 py-4" style={{ breakInside: "auto", pageBreakInside: "auto" }}>
      <div className="px-5 py-1 text-lg border-t border-b border-primary uppercase text-primary font-bold">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

const getRequestedLang = () => {
  if (typeof window === "undefined") {
    return "en"
  }

  const raw = new URLSearchParams(window.location.search).get("lang")
  if (!raw) {
    return "en"
  }

  const lang = raw.toLowerCase()
  return lang === "fr" || lang === "both" ? lang : "en"
}

const ResumePage = ({ lang, isLast }) => {
  const content = getResumeContent(lang)
  const labels = sectionLabels[lang] || sectionLabels.en
  const { competencies, details, education, experiences, fullName, languages, title } = content
  const pageEdgeBalanceStyle = {
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
    paddingTop: "4mm",
    paddingBottom: "4mm",
    ...(isLast ? {} : { pageBreakAfter: "always" }),
  }

  return (
    <div className="w-[210mm] min-h-[594mm] mx-auto bg-light overflow-visible mb-6 print:mb-0" style={pageEdgeBalanceStyle}>
      <div className="flex gap-x-4 bg-primary p-4 bg-[url('/herobg.png')] bg-cover bg-center">
        <div className="h-[175px] min-w-[175px] aspect-square shadow rounded-lg overflow-hidden">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-between w-full text-light mt-[-.35rem]">
          <div>
            <div className="text-5xl space-x-2 text-light tracking-widest">
              <span className="font-black">{fullName[0]}</span>
              <span className="font-light">{fullName[1]}</span>
            </div>
            <div className="text-xl text-secondary tracking-[.25rem] uppercase">{title}</div>
          </div>
          <div className="grid grid-cols-3 gap-1 text-sm">
            <div className="bg-light flex items-center gap-x-2 rounded px-2 py-1 text-primary">
              <Icon icon="carbon:phone" width="22px" />
              {details[0]}
            </div>
            <div className="col-span-2 flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary">
              <Icon icon="carbon:email" width="22px" />
              {details[1]}
            </div>
            <a
              href={details[2]}
              target="_blank"
              rel="noreferrer"
              className="col-span-full flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary"
            >
              <Icon icon="carbon:link" width="22px" />
              {details[2]}
            </a>
            <div className="col-span-full flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary">
              <Icon icon="carbon:location-person" width="22px" />
              {details[3]}
            </div>
          </div>
        </div>
      </div>

      <Container title={labels.education}>
        <div className="grid gap-y-3">
          {education?.map((educationItem, index) => (
            <div
              key={`edu-${lang}-${index}`}
              className="grid grid-cols-12"
              style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
            >
              <span className="col-span-3">{educationItem[0]}</span>
              <span className="col-span-9 -ml-4">{educationItem[1]}</span>
            </div>
          ))}
        </div>
      </Container>

      <Container title={labels.experience}>
        <div className="grid gap-y-3">
          {experiences?.map((experienceItem, index) => (
            <div
              key={`exp-${lang}-${index}`}
              className="grid grid-cols-12"
              style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
            >
              <span className="col-span-3">{experienceItem[0]}</span>
              <span className="col-span-9 -ml-4">{experienceItem[1]}</span>
            </div>
          ))}
        </div>
      </Container>

      <Container title={labels.competencies}>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <ul className="list-disc ml-4 space-y-1">
            {competencies.slice(0, competencies.length / 2)?.map((competence, index) => (
              <li key={`comp-left-${lang}-${index}`} style={{ breakInside: "avoid", pageBreakInside: "avoid" }}>
                {competence}
              </li>
            ))}
          </ul>
          <ul className="list-disc ml-4 space-y-1">
            {competencies.slice(competencies.length / 2)?.map((competence, index) => (
              <li key={`comp-right-${lang}-${index}`} style={{ breakInside: "avoid", pageBreakInside: "avoid" }}>
                {competence}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container title={labels.languages}>{languages.join(", ")}</Container>
    </div>
  )
}

const App = () => {
  const requestedLang = getRequestedLang()
  const langsToRender = requestedLang === "both" ? ["en", "fr"] : [requestedLang]

  return (
    <div className="py-2 space-y-5 print:space-y-0 print:py-0 text-dark text-sm font-dm leading-[1.3rem] bg-gray-900">
      {langsToRender.map((lang, index) => (
        <ResumePage key={lang} lang={lang} isLast={index === langsToRender.length - 1} />
      ))}
    </div>
  )
}

export default App
