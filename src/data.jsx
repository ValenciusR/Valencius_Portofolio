import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import PortoWebsite from "./assets/Portofolio-Website.jpeg";
import Lokerin from "./assets/FeatureGraphicLokerin.png";
import HerAlert from "./assets/FeatureGraphicHerAlert.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portofolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Valencius",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Rianto",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indonesian",
  },

  // {
  //   id: 5,
  //   title: "Open to Work : ",
  //   description: "Available",
  // },

  {
    id: 6,
    title: "Address : ",
    description: "Bekasi, Indonesia",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+62 852 1812 2644",
  },

  {
    id: 8,
    title: "Email : ",
    description: "valencius.rianto25@gmail.com",
  },

  // {
  //   id: 9,
  //   title: "Skype : ",
  //   description: "steve.milner",
  // },

  {
    id: 10,
    title: "Languages : ",
    description: "Indonesia, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Coding Experience",
  },

  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },

  // {
  //   id: 3,
  //   no: "81+",
  //   title: "Happy <br /> Customers",
  // },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "August 2024 - Present",
    title: "Aplication Developer <span> Mostrans </span>",
    desc: "MOSTRANS is the first digital transportation platform in Indonesia that aims to bring connectivity into healthcare Shipper and trusted Transporter ecosystem. We develop distribution one step further by delivering consolidation delivery with fixed schedule as easy as ordering a plane ticket. Enjoy our complete worry-free solution, such as: order management, real time monitoring, digital documentation (e-POD), analytics reporting, historical tracking, ERP integration, and e-payment in just one platform. ",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "March 2024 - August 2024",
    title: "Mobile Developer <span> Shinta VR </span>",
    desc: "The First & Leading Virtual Reality Company In Indonesia That Uses VR/AR/MR Technology To Deliver Your Beautiful Imagination Into Reality",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "September 2022 - September 2023",
    title: "Mobile Application Development Praetorian <span> BNCC </span>",
    desc: "As an Praetorian (Mentor), I am tasked with guiding and assisting members of the Bina Nusantara Computer Club in learning Mobile Application Development.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021 - 2025 (Expected)",
    title: "Computer Science Degree <span> Bina Nusantara University </span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "High School Diploma <span> John Paul's School </span>",
    desc: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "30",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "90",
  },

  {
    id: 3,
    title: "Css",
    percentage: "85",
  },

  {
    id: 4,
    title: "Php",
    percentage: "50",
  },

  {
    id: 5,
    title: "Java",
    percentage: "95",
  },

  {
    id: 6,
    title: "SQL",
    percentage: "80",
  },

  {
    id: 7,
    title: "Android Studio",
    percentage: "95",
  },

  {
    id: 8,
    title: "React",
    percentage: "85",
  },
];

export const portfolio = [
  {
    id: 1,
    img: PortoWebsite,
    title: "Portofolio Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "This Website",
      },
    ],
  },
  {
    id: 2,
    img: Lokerin,
    title: "Lokerin Mobile App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Mobile Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Group Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java, XML",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "-",
      },
    ],
  },
  {
    id: 3,
    img: HerAlert,
    title: "HerAlert Mobile App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Mobile Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Group Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java, XML",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "-",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
