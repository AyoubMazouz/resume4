import React from "react"
import { competencies, details, education, experiences, fullName, languages, title } from "./constants"
import { Icon } from "@iconify/react"

const Container = ({ title, children }) => {
  return (
    <div className={`relative px-4 mt-2`}>
      <div className={`px-4 text-lg border-t border-b border-primary uppercase text-primary font-bold`}>{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  )
}
const App = () => {
  return (
    <div className="py-2 space-y-3 print:space-y-0 print:py-0 text-dark text-sm font-dm leading-[1.2rem] bg-gray-900">
      {/* <CoverLetter /> */}

      <div className="w-[210mm] h-[297mm] mx-auto bg-light rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex gap-x-4 bg-primary p-4  bg-[url('/herobg.png')] bg-cover bg-center">
          <div className="h-[165px] min-w-[165px] aspect-square shadow  rounded-lg overflow-hidden">
            <img src="/profile.jpg" className="w-full h-full object-cover" />
          </div>
          <div className={`flex flex-col justify-between w-full text-light mt-[-.35rem]`}>
            <div className={`text-4xl space-x-2 text-light tracking-widest`}>
              <span className="">{fullName[0]}</span>
              <span className="">{fullName[1]}</span>
            </div>
            <div className={`text-sm tracking-tight text-secondary uppercase`}>{title}</div>
            <div className="grid grid-cols-12 gap-1 text-sm">
              <div className={`bg-light flex items-center gap-x-2 rounded px-2 py-1 text-primary col-span-full`}>
                <Icon icon="carbon:phone" width="22px" />
                {details[0]}
              </div>
              <div className={`col-span-6 flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary`}>
                <Icon icon="carbon:phone" width="22px" />
                {details[2]}
              </div>
              <div className={`col-span-6 flex items-center gap-x-2 bg-light rounded px-2 py-1 text-primary`}>
                <Icon icon="carbon:email" width="22px" />
                {details[1]}
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
          <div className="space-y-2">
            {education?.map((education) => (
              <div key={education[1]} className="grid grid-cols-12">
                <span className="col-span-3">{education[0]}</span>
                <span className="col-span-9">{education[1]}</span>
              </div>
            ))}
          </div>
        </Container>
        {/* Experience */}
        <Container title="Expérience">
          <div className="space-y-2">
            {experiences?.map((experience) => (
              <div key={experience[1]} className="grid grid-cols-12">
                <span className="col-span-3">{experience[0]}</span>
                <span className="col-span-9">{experience[1]}</span>
              </div>
            ))}
          </div>
        </Container>
        {/* Grid */}
        {/* Competencies */}
        <Container title="Compétences">
          <div className="">
            <ul className="list-disc ml-4 space-y-1">
              {competencies.map((competence) => (
                <li key={competence}>{competence}</li>
              ))}
            </ul>
          </div>
        </Container>

        {/* Languages */}
        <Container title="Linguistique">{languages}</Container>

        {/* <Container title="Technical Skills">
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
        </Container> */}
      </div>
    </div>
  )
}

export default App
