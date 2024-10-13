export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  href: string;
  icon: string;
  github: string;
  technologies: string[];
};

export const projects = [
  {
    name: "Kali Ma Sud - Portfolio",
    description:
      "Portfolio de Kayla Elisabeth Carbonari-Rosario, ethno-photographe. Construit avec un back-office pour upload, gérer et organiser les photos.",
    imgSrc: "/png/Kali_Ma_Sud.png",
    href: "http://kalimasud.com/",
    icon: "/png/kali_ma_sud_icon.png",
    github: "",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    name: "Aixplorer",
    description:
      "Explore Game dans la ville d'Aix-en-Provence. Application développée lors de mon alternance",
    imgSrc: "/png/aixplorer.png",
    href: "https://www.aixplorer.app/fr/",
    icon: "/png/aixplorer_icon.png",
    github: "",
    technologies: ["Nuxt", "Node.js", "MySQL"],
  },
  {
    name: "Hackathon Wild Code School",
    description:
      "Application créée en 36h. Le thème était 'voyage'. Nous avons alors créé une application qui permet d'optimiser les trajets en ajoutant tous les lieux à visiter à une liste, définir un point de départ, et afficher le temps de trajet entre chaque point.",
    imgSrc: "/png/hackathon.png",
    href: "https://hackathon-wcs.netlify.app/",
    icon: "/png/hackathon_icon.png",
    github: "",
    technologies: ["React", "Google Maps"],
  },
  {
    name: "The Art Of Cocktail",
    description:
      "Application de recherche de cocktails. 2ème projet réalisé lors de ma formation de développement web. Le but ici était de découvrir React et d'exploiter une API externe.",
    imgSrc: "/png/the_art_of_cocktail.png",
    href: "https://the-art-of-cocktail.netlify.app/",
    icon: "/png/the_art_of_cocktail_icon.png",
    github:
      "https://github.com/Cylecq/2022-09-JS-Paris-project-2-TheSupremesBarmaids/tree/main",
    technologies: ["React", "Sass"],
  },
  {
    name: "Infinity Quiz",
    description:
      "Quiz de type 'survie' : vous avez 3 vies, répondez à un maximum de questions et essayer de battre votre record. 1ère projet réalisé lors de ma formation de développement web. Le but ici était de coder notre première application avec javascript 'vanilla' en créant une application de quiz.",
    imgSrc: "/png/infinity_quiz.png",
    href: "https://infinityquiz.netlify.app/",
    icon: "/png/infinity_quiz_icon.png",
    github: "https://github.com/Cylecq/infinity-quiz",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
