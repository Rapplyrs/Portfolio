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
    Accenture,
    GE,
    carrent,
    horoscope,
    portfolio,
    jobit,
    tripguide,
    threejs,
  } from "../assets";



  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills", 
      title: "Skills",
    }, 
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id:"projects", 
      title: "Projects", 
    }, 
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
      description: "Bringing ideas to life with clean designs, and user-friendly interfaces.", 
      points: [
        "HTML",
        "CSS",
        "JavaScript",
        "Sass",
      ],
    },
    {
      title: "Backend Developer",
      icon: mobile,
      description: "I implement the infrastructure that powers seamless user experiences.", 
      points: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "RESTFUL APIs",
        "GCP",
      ],
    },
    {
      title: "Developer and CMS tools",
      icon: backend,
      description: "Sometimes its better to just resort to a web builder.",
      points: [
        "Visual Studio Code",
        "WordPress",
        "Figma",
        "Github", 
      ],
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "GE Healthcare",
      icon: GE,
      iconBg: "#383E56",
      date: "May 2018",
      points: [
        "Designed the front-end UI for the device analytics page for a Administration website console using AngularJS",
        "Collaborated with multifaceted teams that encompass designers, product managers, and fellow developers to craft top-tier products",
        "Engaged in code evaluations and offered valuable input to fellow developers",
        "Wrote and executed test cases to cover scenarios, using JSON, to evaluate and identify failure modes of the Administration website console",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "GE Healthcare",
      icon: GE,
      iconBg: "#E6DEDD",
      date: "May 2019",
      points: [
        "Developed a data analysis framework that extracted 100% more data than the previous framework from system components.",
        "Created real time analysis of production data for customers/hospitals.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Accenture",
      company_name: "Technology Advanced Application Engineer",
      icon: Accenture,
      iconBg: "#383E56",
      date: "Sept 2021 - Feb 2023",
      points: [
        "Developed and maintained full-stack web applications using Express.js, React, Node.js, resulting in a 30% increase in user engagement.",
        "Created responsive and user-friendly front-end interfaces using React.js and Material-UI, delivering a seamless user experience.",
        "Orchestrated governance of an extensive Oracle database containing more than 300,000 tables, adeptly extracting and classifying personal stakeholder information.",
        "Collaborated cross functionally with software engineers, business analysts, and product managers to become the best performing team possible.",
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
      name: "Horoscope App",
      description:
        "web app built on the MERN stack that provides users with astrological guidance based on their star sign and house, as well as the current moon phase",
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
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: horoscope,
      source_code_link: "https://github.com/6XAM/MVP",
    },
    {
      name: "Web Portfolio",
      description:
        "A web portfolio that showcases my experiences and skills as a software engineer",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
      ],
      image: portfolio,
      
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };