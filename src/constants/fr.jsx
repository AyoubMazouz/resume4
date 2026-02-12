import { mobile, backend, creator, web } from "../assets"

export const linkedinURL = "https://www.linkedin.com/in/ayoubmazouz/"
export const githubURL = "https://github.com/ayoubmazouz"

export const fullName = ["Mazouz", "Ayoub"]
export const title = "Ingénieur Logiciel Full-Stack (Java Spring Boot / React) | Ingénieur DevOps"
export const emailAddress = "ayoub.mazouz@outlook.com"
export const phoneNumber = "+212 7 70 75 91 06"
export const details = [
  "+212 7 70 75 91 06",
  "ayoub.mazouz@outlook.com",
  "https://ayoubmazouz.com",
  "Casablanca, Maroc",
]

export const education = [
  [
    <span className="flex gap-2">2025</span>,
    <p>
      <b>Certifié Scrum Master (CSM) par Oriensys Solutions.</b>
    </p>,
  ],
  [
    <span className="flex gap-2">2025 - 2026</span>,
    <p>
      <b>Master en Génie Logiciel</b> à Supemir — École Supérieure d'Ingénierie et de Management, Casablanca.
    </p>,
  ],
  [
    <span className="flex gap-2">2024</span>,
    <p>
      <b>Certifié en sécurité OWASP (Secure Coding - Secure Application Development)</b> par Oriensys Solutions.
      <br />
    </p>,
  ],
  [
    "2023 - 2024",
    <>
      <b>Licence Professionnelle en Développement Informatique</b> à l'Université Hassan II des Sciences à Casablanca.
    </>,
  ],
  [
    "2021 - 2023",
    <>
      <b>Technicien Spécialisé en Infrastructure Informatique</b> à l'ISFO (OFPPT) à Casablanca.
    </>,
  ],
]

export const experiences = [
  [
    <span className="">
      <div className="flex gap-2">
        <span>Mars 2025</span> <span>-</span>
      </div>
      <div>Présent</div>
    </span>,
    <>
      <div className="font-semibold underline mb-1">
        Temps plein : Ingénieur DevOps chez{" "}
        <a href="https://ariagroup.io/">
          <span className="font-bold italic">AriaTech (Accolade SA)</span>
        </a>
      </div>
      <ul className="list-disc ml-12 space-y-2">
        <li>
          Développement d'une plateforme de formation en ligne sur mesure, permettant aux entreprises de disposer d'un
          espace de formation dédié pour leurs collaborateurs.
        </li>
        <li>
          Mise en place et gestion d'une solution de <b>monitoring serveur et applicatif</b> avec <b>Prometheus</b> et
          <b>Grafana</b>, avec tableaux de bord et alerting pour la production.
        </li>
        <li>
          Conception et déploiement d'une <b>plateforme DevSecOps</b> pour automatiser la sécurité dans les pipelines
          <b>(CI/CD) sur GitLab</b>, avec intégration de <b>SonarQube (SAST)</b>, <b>OWASP ZAP (DAST)</b> et{" "}
          <b>OWASP Dependency-Check (SCA)</b> pour des contrôles de vulnérabilités continus.
        </li>
      </ul>
    </>,
  ],
  [
    <span className="">
      <div className="flex gap-2">
        <span>Juil 2024</span> <span>-</span>
      </div>
      <div>Mars 2025</div>
    </span>,
    <>
      <div className="font-semibold underline mb-1">
        Temps plein : Ingénieur de développement et d'études chez{" "}
        <a href="https://ariagroup.io/">
          <span className="font-bold italic">AriaTech (Accolade SA)</span>
        </a>
      </div>
      <ul className="list-disc ml-12 space-y-2">
        <li>
          Refonte d'une <b>application full-stack</b> d'assurance pour les 'Associations de Bain' avec évolution des
          services backend et des workflows de gestion frontend, et réussite de l'audit annuel avec une
          <b>excellente note</b>.
        </li>
        <li>
          Refactorisation du module de transport dans 'Nawrass', le système principal pour gérer les activités d'
          <b>AFMA</b>, avec amélioration de la maintenabilité et de la vitesse de livraison.
        </li>
        <li className="">
          Développement d'une solution automatisée basée API pour l'échange de données entre <b>AFMA et Autohall.</b>
        </li>
      </ul>
    </>,
  ],
  [
    <span className="flex gap-2 pt-16">
      <div className="w-7">Mai</div>
      <span>-</span>
      <div className="w-8">Juil</div>
      <span>2024</span>
    </span>,
    <>
      <div className="font-semibold underline mb-1 pt-16">
        Stage : Développeur Fullstack & DevOps chez{" "}
        <a href="https://valhko.com">
          <span className="font-bold italic">Valhko</span>
        </a>
      </div>
      <ul className="list-disc ml-12 space-y-2">
        <li>
          <b>Développement d'une plateforme d'actualités alimentée par l'IA</b> centrée sur la finance et les
          investissements sur le continent africain, offrant aux utilisateurs un moyen innovant et accessible de
          consommer les actualités, avec contribution au déploiement et à la fiabilité opérationnelle.
        </li>
      </ul>
    </>,
  ],
  [
    <span className="flex gap-2">
      <div className="w-7">Fév</div>
      <span>-</span>
      <div className="w-8">Avr</div>
      <span>2024</span>
    </span>,
    <>
      <div className="font-semibold underline mb-1">
        Stage : Développeur Fullstack chez{" "}
        <a href="https://rivertech.ma">
          <span className="font-bold italic">Rivertech</span>
        </a>
      </div>
      <ul className="list-disc ml-12 space-y-2">
        <li>Développement du site web principal de l'entreprise.</li>
      </ul>
    </>,
  ],
  [
    <span className="flex gap-2">
      <div className="w-7">Nov</div>
      <span>-</span>
      <div className="w-8">Jan</div>
      <span>2024</span>
    </span>,
    <>
      <div className="font-semibold underline">
        Stage : Développeur Fullstack chez <span className="font-bold italic">AMDD</span>.
      </div>
    </>,
  ],
  [
    <span className="flex gap-2">
      <div className="w-7">Avr</div>
      <span>-</span>
      <div className="w-8">Nov</div>
      <span>2023</span>
    </span>,
    <>
      <div className="font-semibold underline mb-1">
        Stage : Développeur logiciel chez{" "}
        <a href="https://maxmind.ma">
          <span className="font-bold italic">Maxmind</span>
        </a>
      </div>
    </>,
  ],
  [
    <span className="flex gap-2">
      <div className="w-7">Juin</div>
      <span>-</span>
      <div className="w-8">Août</div>
      <span>2022</span>
    </span>,
    <>
      <div className="font-semibold underline mb-1">
        Stage : Développeur Fullstack chez{" "}
        <a href="https://sirecom.ma">
          <span className="font-bold italic">Sirecom</span>
        </a>
      </div>
    </>,
  ],
]

export const languages = ["Anglais", "Français", "Arabe"]

export const technicalSkills = [
  "Java",
  "Spring Boot",
  "React.js",
  "Redux",
  "Conception et intégration d'API REST",
  "SQL (PostgreSQL/MySQL)",
  "Git & GitLab",
  "Méthodologies Agile/Scrum",
  "DevOps & DevSecOps",
  "GitLab CI/CD",
  "Docker",
  "Kubernetes (bases)",
  "Terraform (bases)",
  "Linux & scripting Bash",
  "Prometheus",
  "Grafana",
  "SonarQube (SAST)",
  "OWASP ZAP (DAST)",
  "OWASP Dependency-Check (SCA)",
  "Monitoring applicatif & alerting",
  "Intégration et automatisation d'API",
  "Développement Full-Stack (JavaScript/TypeScript, PHP/Laravel, React)",
]

export const competencies = [
  <p>Bonne maîtrise des architectures logicielles et des modèles de conception orientés scalabilité.</p>,
  <p>
    Expérience concrète dans la livraison de fonctionnalités full-stack sur <b>APIs backend</b>, logique métier et UI.
  </p>,
  <p>Bonne compréhension des patterns <b>backend Java</b> et <b>frontend React</b> pour des applications maintenables.</p>,
  <p>Bonne compréhension des standards web, des contrats d'API, des tests et des bonnes pratiques de maintenabilité.</p>,
  <p>
    Capacité à concevoir et optimiser des <b>pipelines CI/CD</b> pour des livraisons fiables et sécurisées.
  </p>,
  <p>
    Maîtrise des principes <b>DevSecOps</b>, du secure coding et des contrôles alignés OWASP.
  </p>,
  <p>Approche orientée résolution d'incidents production via logs, métriques et observabilité.</p>,
  <p>
    <b>Apprenant continu</b>, <b>autodidacte</b> et adaptation rapide aux nouveaux outils.
  </p>,
  <p>
    <b>Écoute active</b> et <b>bonne communication</b> dans des équipes Agile pluridisciplinaires.
  </p>,
  <p>
    Fortes <b>compétences organisationnelles</b> et attention aux détails.
  </p>,
]
