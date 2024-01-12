import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  reactjs,
  tailwind,
  laravel,
  mysql,
  go,
  php,
  java,
  cSharp,
  git,
  docker,
  school,
  ofppt,
  fsac,
  sericome,
  maxmind,
  amdd,
} from "../assets"

export const fullName = ["Mazouz", "Ayoub"]
export const emailAddress = "ayoub2000mazouz@gmail.com"

export const heroSection = "I develop 3d User interfaces and web applications"

export const aboutSection = `I'm Ayoub, a proficient software developer who ventured into programming independently driven by a profound love for computers. A rapid learner who thrives with minimal supervision, I enjoy pushing my boundaries by tackling diverse challenges, ranging from crafting high-performance web applications to exploring the intricacies of transistors. Feel free to reach out – I'm always open to new opportunities and collaborations.
`

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "JavaScript Master",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "System Administrator",
    icon: creator,
  },
]

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "Golang",
    icon: go,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "ReactJs",
    icon: reactjs,
  },
  {
    name: "TailwindCss",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Bachelor's degree in Life and Earth Sciences (SVT)",
    company_name: "Qadi Ayad, Casablanca",
    icon: school,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [],
  },
  {
    title: "Specialized Technician in IT Infrastructure",
    company_name: "ISFO (OFPPT), Casablanca",
    icon: ofppt,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Administration of Linux/Windows servers and virtual machines.",
      "Learning the fundamentals of programming with Python.",
      "Create and administrate cloud infrastructure with Openstack and Asur.",
      "Create and administrate Network infrastructure with Cisco.",
    ],
  },
  {
    title: "Internship: Fullstack Developer",
    company_name: "Sirecom",
    icon: sericome,
    iconBg: "#E6DEDD",
    date: "Jui - Août 2022",
    points: ["Creating and maintaining web applications using Laravel and other related technologies."],
  },
  {
    title: "Internship: Software Developer",
    company_name: "Maxmind",
    icon: maxmind,
    iconBg: "#383E56",
    date: "Avr - Nov 2023",
    points: [
      "Creating web applications using React, Laravel, Svelte and other related technologies.",
      "Creating automation scripts using Python.",
      "Creating browser extensions using JavaScript and Svelte.",
      "Scraping data from single page application using Puppeteer.",
      "Consuming graphql APIs to create Modules for a CRM.",
    ],
  },
  {
    title: "Licence professionnelle en développement informatique",
    company_name: "l'université des sciences hassan II, Casablanca",
    icon: fsac,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Learning Java, C# and there perspective web frameworks.",
      "Deep dive into sql databases and how to use them at scale.",
      "Learning UML and creating diagrams for practice.",
      "Creating highly scalable web applications using previously known technologies.",
      "etc...",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "AMDD",
    icon: amdd,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - à présent",
    points: [
      "Creating and maintaining the new OFPPT platform using Laravel, React and other related technologies.",
      "Structure Project to be scalable and maintainable.",
      "Create highly optimized algorithms to solve complex problems.",
    ],
  },
]

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, projects }
