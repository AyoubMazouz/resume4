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

export const linkedinURL = "https://www.linkedin.com/in/ayoubmazouz/"
export const githubURL = "https://github.com/ayoubmazouz"

export const fullName = ["Mazouz", "Ayoub"]
export const emailAddress = "ayoub2000mazouz@gmail.com"
export const phoneNumber = "07 70 75 91 06"

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

export const services = [
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

export const technologies = [
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

export const experiences = [
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

export const project = [
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
]

export const projects = [
  {
    name: "Schedule Maker",
    technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "React", "Firebase"],
    demoURL: "https://schedule-maker.netlify.app/",
    repoURL: "https://github.com/AyoubMazouz/schedule-maker",
    videoId: "inX4ehepKd0",
    numOfImgs: 7,
    description: `
      <p>
        This project represents my <b>end-of-year project for 2023 at ISFOO (OFPPT)</b>, and I take great pride in its development. It stands out due to its significant utility in solving a real problem we encountered, especially considering that many other projects created during that time were relatively straightforward.
        Before the creation of this application, we relied on a Python script that I developed to convert existing schedules in Excel format to PDF, as depicted in the last image and video.
        This project is a (SaaS) that empowers users to create schedules using either the ISFOO template or a public school template. It also offers seamless integration of new templates, allowing for easy additions through the config file.
      </p>
      <p>
        To streamline the scheduling process, the application offers a smooth user experience and various utilities for efficient schedule management and creation. Notable features include:
      </p>
      <ul>
        <li>
          <b>Tracking availability:</b> The app incorporates a specialized algorithm to check the availability of professors, classrooms, and other relevant statistics. This ensures the prevention of duplicates, conflicts, or complications when using the app.
        </li>
        <li>
          <b>User-friendly interface:</b> The application allows for exporting various settings, which is particularly useful for development purposes. Additionally, it provides the ability to import and export data to and from Excel.
        </li>
        <li>
          <b>Import, export capability, and Excel support:</b> All essential features related to creating schedules have been designed with ease and speed in mind. For instance, once a schedule is completed, users can publish their work and share a link to their personal page, where students can conveniently download the schedule.
        </li>
      </ul>
      <p>
        In addition to these significant features, there are also smaller elements that enhance the overall user experience.
        By developing this project, my aim was to address a genuine need within the education sector and provide an efficient solution that enhances the scheduling process while streamlining administrative tasks.
      </p>
    `,
  },
  {
    name: "Facebook Extension",
    technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "Svelte"],
    demoURL: "",
    repoURL: "",
    videoId: "p2KLoL9hSwI",
    numOfImgs: 7,
    description: `
      <p>
        During my tenure at <b>Maxmind.ma</b>, I undertook a challenging solo project involving the development of a <b>Facebook scraper extension</b>. The primary objective was to <b>extract information from Facebook groups and seamlessly integrate it into a new website</b>. The core focus of this project was on <b>speed, user-friendliness, and reliability</b>.      
      </p>
      <p>
        Throughout the development process, I encountered several iterations and faced numerous trials and errors. This was my first experience with a project of this nature, which brought its own set of challenges. However, my determination and dedication allowed me to overcome these hurdles and deliver an exceptional end product.
      </p>
      <p>
        To implement the extension, I opted to use the efficient Svelte framework, which proved to be a wise choice for its simplicity and performance. Although optional, I also integrated <b>Chat GPT into </b>the project, further enhancing its capabilities.
      </p>
      <p>
        By the project's conclusion, we achieved a remarkable extension capable of efficiently scraping multiple websites with minimal configuration. This enabled us to seamlessly inject data into multiple other websites or endpoints, making it a versatile and powerful solution.
      </p>
    `,
  },
  {
    name: "burgerlo",
    technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "ReactJS", "FireBase"],
    demoURL: "https://burgerlo.netlify.app",
    repoURL: "https://github.com/AyoubMazouz/ecommerce",
    videoId: "2TGz7KO95EQ",
    numOfImgs: 6,
    description: `
      <p>
        I developed this website for a <b>local business</b> owner seeking a streamlined ordering system for their hungry customers. The website features a comprehensive menu and provides a convenient way for customers to place orders directly. Customers can also contact the business through a contact form or alternative communication channels. On the <b>Admin Panel</b>, <b>the owner can efficiently manage the website, view and update orders, add/delete/modify items, and respond to messages, reviews, and more.</b>
      </p>
    `,
  },
  {
    name: "Resume Maker",
    technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "ReactJS"],
    demoURL: "https://resume-maker3.netlify.app/",
    repoURL: "https://github.com/ayoubmazouz/resume-maker",
    videoId: "uEZ--CUj2dI",
    numOfImgs: 6,
    description: `
     <p>
      The purpose of this app is to create professional-looking resumes (CV) quickly and easily. With user-friendly input fields and a streamlined structure, you can generate a polished resume in less than <b>3 minutes</b>.
     </p>
    <p>
      Customize your resume with options to add sections, choose from over <b>30 colors</b> in the color palette, and select from <b>5 unique designs</b> to make it truly stand out.
    </p>
    <p>
      This app has been highly valuable, with over 150+ resumes created for friends, family, coworkers, and students.
    </p>
    <p>
      It is a <b>free and open-source</b> project, like many of my other projects.
    </p>
    <p>
      Notably, some of my friends have successfully sold resumes created using this app.
    </p>
    <p>
      For a more detailed guide on using the app, please refer to the concise documentation provided within.
    </p>
    `,
  },
  {
    name: "Sudoku Solver Visualizer",
    technologies: ["HTML/CSS", "Javascript", "Canvas API"],
    demoURL: "https://sudoku-solver-visualizer.netlify.app/",
    repoURL: "https://github.com/AyoubMazouz/sudoku-solver-visualizer",
    videoId: "C37ie6U3iV8",
    numOfImgs: 3,
    description: `
      <p>    
        <b>Sudoku Solver Visualizer</b> is a web application built with <b>Vanilla JavaScript</b> and the <b>Canvas API.</b> It allows you to play sudoku as usual, but with the added <b>functionality of solving</b> any board using the <b>BackTrack algorithm</b>. Moreover, you can <b>visualize</b> each step of the algorithm as it solves the board, providing a deeper understanding of the process.
      </p>
    `,
  },
  {
    name: "Dental Care",
    lastUpdate: "jul 5 2022",
    demoURL: "https://dentalwebsite.netlify.app/",
    repoURL: "https://github.com/AyoubMazouz/dental-website",
    videoId: "oQcCGjpY84s",
    technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "ReactJS", "React MarkDown", "FireBase"],
    numOfImgs: 9,
    description: `
      <p>
        I created a visually appealing website using ReactJS and Firebase for a client on <b>Upwork.com</b>. The site includes multiple pages such as <b>Services, Gallery, Blog, and Contact</b>.
      </p>
    `,
  },
  {
    name: "Tetris",
    technologies: ["HTML/CSS", "Javascript", "Canvas API"],
    demoURL: "https://tetris3.netlify.app/",
    repoURL: "https://github.com/AyoubMazouz/tetris-js",
    videoId: "w2HoJzcJX9Q",
    numOfImgs: 3,
    description: `
    <ul className="pl-4 list-disc indent-0">
    <li>
    Developed Tetris game with <b>29 challenging levels</b> where <b>speed</b> and <b>score</b> progressively increase..
    </li>
    <li>
    Implemented a tracking system to count the number of cleared rows and reward bonus points based on the <b>Tetris Rate</b>.
    </li>
    <li>
    Incorporated local storage to store and display high scores.
    </li>
    <li>
    Included a next Tetromino display for enhanced gameplay experience.
    </li>
    <li>
    Added convenient controls for pausing or resetting the game.
    </li>
    </ul>
    `,
  },
  // {
  //   id: 6,
  //   name: "CasaDiag",
  //   lastUpdate: "jul 5 2022",
  //   demoURL: "https://casadiag.vercel.app",
  //   repoURL: "https://github.com/AyoubMazouz/casadiag",
  //   videoId: "",
  //   technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "SvelteKit", "MarkDown", "Maria DB"],
  //   numOfImgs: 9,
  //   description: `
  //     <p>
  //       I made this website for a group of close friends who wants to start there own business.
  //     </p>
  //     <p>
  //       This website has couple of pages, contact form and a blog. it is very optimized for SEO and very fast to load.
  //     </p>
  //   `,
  // },
]

export const colors = [
  "text-[#3498db]",
  "text-[#f39c12]",
  "text-[#38a169]",
  "text-[#61dafb]",
  "text-[#ff6347]",
  "text-[#af6aaf]",
]
