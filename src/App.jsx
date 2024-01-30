import React from "react"
import { competencies, details, education, experiences, fullName, languages, technologies, title } from "./constants"
import { Icon } from "@iconify/react"

const Container = ({ title, children }) => {
  return (
    <div className={`relative px-4 py-4`}>
      <div className={`px-4 text-dark text-lg border-t border-b border-primary uppercase font-semibold`}>{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  )
}
const App = () => {
  return (
    <div className="py-2 space-y-4 print:space-y-0 print:py-0 text-dark text-sm font-dm leading-[.rem]">
      {/* <CoverLetter /> */}

      <div className="w-[210mm] h-[297mm] mx-auto bg-light">
        {/* Header */}
        <div className="flex gap-x-4 bg-primary p-4">
          <div className="h-[175px] min-w-[175px] aspect-square shadow  rounded-lg overflow-hidden">
            <img src="/profile.jpg" className="w-full h-full object-cover" />
          </div>
          <div className={`flex flex-col justify-between w-full text-light mt-[-.35rem]`}>
            <div>
              <div className={`text-5xl space-x-2 text-light tracking-widest`}>
                <span className="font-black">{fullName[0]}</span>
                <span className="font-light">{fullName[1]}</span>
              </div>
              <div className={`text-xl text-secondary tracking-widest uppercase`}>{title}</div>
            </div>
            <div className="grid grid-cols-3 gap-1 text-sm">
              <div className={`bg-light flex items-center gap-x-2 rounded px-2 py-1 text-primary`}>
                <Icon icon="carbon:phone" width="22px" />
                {details[0]}
              </div>
              <div className={`col-span-2 flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary`}>
                <Icon icon="carbon:email" width="22px" />
                {details[1]}
              </div>
              <div className={`col-span-full flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary`}>
                <Icon icon="carbon:link" width="22px" />
                {details[2]}
              </div>
              <div className={`col-span-full flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary`}>
                <Icon icon="carbon:location-person" width="22px" />
                {details[3]}
              </div>
            </div>
          </div>
        </div>
        {/* Formation */}
        <Container title="Formation">
          <div className="space-y-1.5">
            {education?.map((education) => (
              <div key={education[1]} className="grid grid-cols-12 my-1.5">
                <span className="col-span-3">{education[0]}</span>
                <span className="col-span-9">{education[1]}</span>
              </div>
            ))}
          </div>
        </Container>
        {/* Experience */}
        <Container title="expériences">
          {experiences?.map((experience) => (
            <div key={experience[1]} className="grid grid-cols-12 my-1.5">
              <span className="col-span-3">{experience[0]}</span>
              <span className="col-span-9">{experience[1]}</span>
            </div>
          ))}
        </Container>
        {/* Grid */}
        {/* Competencies */}
        <Container title="Compétences">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <ul className="list-disc ml-4">
              {competencies.slice(0, competencies.length / 2 + 1)?.map((competence) => (
                <li key={competence}>{competence}</li>
              ))}
            </ul>
            <ul className="list-disc ml-4">
              {competencies.slice(competencies.length / 2 + 1)?.map((competence) => (
                <li>{competence}</li>
              ))}
            </ul>
          </div>
        </Container>

        {/* Languages */}
        <Container title="langues">{languages.join(", ")}</Container>

        <Container title="Compétences Techniques">
          <div className="flex flex-wrap items-center grid-cols-12 gap-4 justify-center overflow-hidden">
            {technologies.map((tech, index) =>
              tech?.name ? (
                <div key={tech.icon} className="tech-grid-item w-8 h-8 group flex justify-center items-center">
                  <Icon icon={tech.icon} width={tech?.scale ? tech?.scale * 96 : 96} className={`${tech.class}`} />
                </div>
              ) : (
                <div className="h-8 w-8"></div>
              ),
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default App
