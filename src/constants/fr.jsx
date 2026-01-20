import { mobile, backend, creator, web } from "../assets"

export const linkedinURL = "https://www.linkedin.com/in/ayoubmazouz/"
export const githubURL = "https://github.com/ayoubmazouz"

export const fullName = ["Mazouz", "Ayoub"]
export const title = "Ingénieur DevOps | Ingénieur Etudes et Développement"
export const emailAddress = "ayoub.mazouz@outlook.com"
export const phoneNumber = "07 70 75 91 06"
export const details = [
  "07 70 75 91 06",
  "ayoub.mazouz@outlook.com",
  "https://ayoubmazouz.com",
  "Sidi-Maârouf Lot Anna 4, 14_6, Casablanca.",
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
        Temps plein : Ingénieur DevSecOps chez{" "}
        <a href="https://ariagroup.io/">
          <span className="font-bold italic">AriaTech (Accolade SA)</span>
        </a>
      </div>
      <ul className="list-disc ml-12 space-y-2">
        <li>
          Développement d'une plateforme de formation en ligne sur mesure, permettant aux entreprises de disposer d'un
          espace de formation dédié pour leurs collaborateurs.{" "}
        </li>
        <li>
          Mise en place et gestion d'une solution de <b>monitoring serveur et applicatif</b> avec <b>Prometheus</b> et{" "}
          <b>Grafana</b>.
        </li>
        <li>
          Conception et déploiement d'une <b>plateforme DevSecOps</b> pour automatiser la sécurité dans les pipelines
          <b>(CI/CD) sur GitLab</b>.
          <li>
            Intégration d'outils de sécurité pour l'analyse automatisée :
            <ul className="list-disc ml-12 space-y-2">
              <li>
                <b>SAST</b> (Analyse Statique) avec <b>SonarQube</b>.
              </li>
              <li>
                <b>DAST</b> (Analyse Dynamique) avec <b>OWASP ZAP</b>.
              </li>
              <li>
                <b>SCA</b> (Analyse des Dépendances) avec <b>OWASP Dependency-Check</b>.
              </li>
            </ul>
          </li>
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
          Refonte d'une <b>application full-stack</b> d'assurance pour les 'Associations de Bain' — fonctionnalités
          étendues, gestion améliorée et réussite de l'audit annuel avec une <b>excellente note</b>.
        </li>
        <li>
          Refactorisation du module de transport dans 'Nawrass', le système principal pour gérer les activités d'
          <b>AFMA.</b>
        </li>
        <li className="pt-16">
          Développement d'une solution automatisée pour l'échange de données entre <b>Afma et Autohall.</b>
        </li>
      </ul>
    </>,
  ],
  [
    <span className="flex gap-2">
      <div className="w-7">Mai</div>
      <span>-</span>
      <div className="w-8">Jul</div>
      <span>2024</span>
    </span>,
    <>
      <div className="font-semibold underline mb-1">
        Stage : Développeur Fullstack & DevOps chez{" "}
        <a href="https://valhko.com">
          <span className="font-bold italic">Valhko</span>
        </a>
      </div>
      <ul className="list-disc ml-12 space-y-2">
        <li>
          <b>Développement d'une plateforme d'actualités alimentée par l'IA</b> centrée sur la finance et les
          investissements sur le continent africain, offrant aux utilisateurs un moyen innovant et accessible de
          consommer les actualités.
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
      <div className="w-7">Jun</div>
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

export const competencies = [
  <p>Bonne compréhension des différentes architectures logicielles et des modèles de conception.</p>,
  <p>
    Bon sens de la <b>conception UI et de l'expérience utilisateur</b>.
  </p>,
  <p>Expérience générale et compréhension des différents langages de programmation et frameworks.</p>,
  <p>Bonne compréhension des normes web et des meilleures pratiques.</p>,
  <p>
    <b>Apprenant continu</b> et <b>autodidacte</b>.
  </p>,
  <p>
    <b>Écoute active</b> et <b>bonne communication</b>.
  </p>,
  <p>
    Connaissance de la mise en œuvre des{" "}
    <b>meilleures pratiques de sécurité et des mesures de protection des données</b>.
  </p>,
  <p>
    Capacité à <b>s'adapter rapidement</b> aux nouvelles technologies.
  </p>,
  <p>
    Fortes <b>compétences organisationnelles</b> et attention aux détails.
  </p>,
]
