import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  excel,
  word,
  ppt,
  python,
  earth,
  qgis,
  tensorflow,
  autocad,
  civil3d,
  vissim,
  dfs,
  project,
} from "../assets";

import prodigal from "../assets/Prodigal.svg";
import dult from "../assets/dult.png";
import taskify from "../assets/taskify_3.jpeg";
import chessmate from "../assets/chess.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "AutoCAD",
    icon: autocad,
  },
  {
    name: "Civil 3D",
    icon: civil3d,
  },
  {
    name: "MS Excel",
    icon: excel,
  },
  {
    name: "MS Powerpoint",
    icon: ppt,
  },
  {
    name: "MS Word",
    icon: word,
  },
  {
    name: "Data from sky",
    icon: dfs,
  },
  {
    name: "PTV Vissim",
    icon: vissim,
  },
  {
    name: "Google Earth",
    icon: earth,
  },
  {
    name: "Q-GIS",
    icon: qgis,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full-stack Web Developer",
    company_name: "ProdigalAi  Technologies  Pvt  Ltd",
    icon: prodigal,
    iconBg: "#383E56",
    date: "June 2023 - May 2024",
    points: [
      "Developing and maintaining Blockchain related web3 applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including UI/UX designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Transport Planner Intern",
    company_name: "Directorate of Urban Land Transport, Bangalore.",
    icon: dult,
    iconBg: "#383E56",
    date: "October 2022 - December 2023",
    points: [
      "Conducting studies to enhance transportation connectivity and reduce traffic congestion through sustainable strategies, developing Station Accessibility Plans (SAP) for Vijayanagar and Attiguppe metro station",

      "Utilizing GIS tools to analyze road infrastructure,evaluating accessibility, connectivity, and safety, and proposed improvements to enhance cycling and parking facilities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Road Damage Identification",
    description:
      "Mtech Final year project that Focuses on Identification and Classification of Road Distress for Indian road conditions using Convolutional Neural Network.",
    tags: [
      {
        name: "Adobe Photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "MS Excel",
        color: "pink-text-gradient",
      },
      {
        name: "MS Word",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link:
      "https://drive.google.com/file/d/1eR5rKY1Oe1ULEDhhrGlRaU7e91oQUaLi/view?usp=sharing",
  },
  {
    name: "Taskify",
    description:
      "A web-based platform inspired by Monday.com, designed to help users plan and manage their projects, goals, and tasks in a seamless and efficient manner.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: taskify,
    source_code_link: "https://heartfelt-gaufre-ebf300.netlify.app/",
  },

  {
    name: "ChessMate",
    description:
      "ChessMate is a real-time multiplayer chess application with real-time video and chating features",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "webRTC",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "OAuth2.0",
        color: "pink-text-gradient",
      },
    ],
    image: chessmate,
    source_code_link: "https://chessly.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
