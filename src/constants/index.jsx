import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiApachetomcat } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiHibernate } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "CHANDU MANGA",
  greet: "Welcome! 👋🏻",
  description:
    "I am a dedicated software developer with a strong background in frontend and backend technologies. With a deep passion for building innovative web applications, I enjoy transforming ideas into seamless, user-friendly experiences. With expertise in Java, Spring Boot, React, Microservices and more.., I strive to create solutions that are both functional and visually engaging.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Chandumanga/my-portfolio-website",
  },
  {
    id: 2,
    name: "Food Ordering Application",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/Chandumanga/food-ordering-app-fe",
  },
  {
    id: 3,
    name: "Trecking Application",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/Chandumanga/Trecking-Application",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/Chandumanga/weather-app",
  },
  {
    id: 5,
    name: "Animated Websites",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/Chandumanga/Modern-Web-Development",
  },
  {
    id: 6,
    name: "Shell Scripting Project",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/Chandumanga/Shell_Script_Projects",
  },
];

export const BIO = [
  "A dynamic and versatile software developer with a robust background in computer science and an unwavering passion for crafting innovative software solutions. Graduated from Assam Central University in 2023 with a Bachelor of Technology degree in Electronics and Communication Engineering, achieving a CGPA of 7.82. During the academic journey, a strong interest in programming and software development was cultivated, laying the foundation for future endeavors.",
  "Embarked on a professional journey with TrimindTech Pvt. Solutions, working from August 2023 to November 2024. Played a pivotal role in developing and delivering impactful projects, including:",
  "E-Procure Application: Leveraged Java, Spring Boot, Microservices, MySQL, and Linux to build an enterprise-grade procurement platform.",
  "NLB Application: Utilized Spring Boot, Linux, Tomcat Server, and Httpd Web Server to create a scalable and efficient load-balancing solution.",
  "In addition to industry experience, technical expertise has been showcased through independent projects such as a Food Ordering App. This project demonstrated proficiency in frontend and backend development using React, Material-UI (MUI), Redux, Java, Spring Boot, MySQL, and Spring Security. The application was enhanced with Stripe payment integration, exemplifying the ability to deliver comprehensive, user-friendly solutions.",
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML5",
    experience: "3+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
    experience: "3+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <FaJava className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Java",
    experience: "3+ years",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "2+ years",
  },
  {
    icon: <SiSpringsecurity className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Spring Security",
    experience: "1.5+ years",
  },
  {
    icon: <SiHibernate className="text-4xl text-purple-700 lg:text-5xl" />,
    name: "Hibernate (ORM)",
    experience: "2+ years",
  },
  {
    icon: <SiApachekafka className="text-4xl text-black lg:text-5xl" />,
    name: "Apache Kafka",
    experience: "1+ year",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "2+ years",
  },
  {
    icon: <FcLinux className="text-4xl lg:text-5xl" />,
    name: "Linux",
    experience: "3+ years",
  },
  {
    icon: <SiApachetomcat className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Apache Tomcat",
    experience: "1+ year",
  },
  {
    icon: <FaGithub className="text-4xl text-black lg:text-5xl" />,
    name: "GitHub",
    experience: "3+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "TrimindTech Pvt. Solutions",
    duration: "August 2023 - November 2024",
    description:
      "At TrimindTech Pvt. Solutions, I played a key role in developing enterprise-level applications using Java, Spring Boot, Microservices, MySQL, and Linux. I worked closely with cross-functional teams to deliver robust and scalable solutions. My work involved building applications like the E-Procure system and NLB application, both of which were aimed at improving business efficiency and operational scalability.",
  },
  {
    title: "Frontend Developer",
    company: "TrimindTech Pvt. Solutions",
    duration: "August 2023 - November 2024",
    description:
      "In addition to backend development, I contributed to the frontend development of various projects. I worked on creating user-friendly interfaces using technologies like React and Material-UI (MUI). I collaborated with design and product teams to ensure the applications were responsive, accessible, and offered a seamless user experience.",
  },
];

export const EDUCATION = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Wisdom High School",
    duration: "2016 - 2017",
    description:
      "Achieved a CGPA of 9.0. Focused on foundational subjects with excellence in Mathematics and Science. Participated in various academic and extracurricular activities.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    duration: "2017 - 2019",
    description:
      "Scored an impressive 96.5%. Specialized in Mathematics, Physics, and Chemistry. Excelled in competitive exam preparation and academic projects.",
  },
  {
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Assam Central University",
    duration: "2019 - 2023",
    description:
      "Graduated with a CGPA of 7.82. Gained proficiency in programming languages like C, Java, Sql, Linux and more with a focus on algorithms, data structures, and software development. Completed projects on web development and IoT systems integration. Specialized in core ECE topics, including Communication Systems, Embedded Systems, and Signal Processing. Actively participated in technical seminars, hackathons, and workshops.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
