import {
  mobile,
  backend,
  web,
  git,
  javascript,
  html,
  meta,
  starbucks,
  tesla,
  shopify,
  python,
  tensorflow,
  solidworks,
  ansys,
  lammps,
  pandas,
  c,
  matlab,
  sklearn,
  weather,
  tailstock,
  wood,
  photo,
  breast,
  fish,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "SolidWorks CAD CAM",
    icon: mobile,
  },
  {
    title: "ANSYS",
    icon: backend,
  },
  {
    title: "LAMMPS",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "C/C++",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Sk Learn",
    icon: sklearn,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Solidworks",
    icon: solidworks,
  },
  {
    name: "Lammps",
    icon: lammps,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ANSYS",
    icon: ansys,
  },
  {
    name: "Pandas",
    icon: pandas,
  },{
    name: "Matlab",
    icon: matlab,
  }

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Developing a Tailstock die tool holder",
    description:
      "Developed a tailstock die tool holder for a lathe machine using SolidWorks CAD CAM.",
    tags: [
      {
        name: "SolidWorks",
        color: "blue-text-gradient",
      },
      {
        name: "CAD CAM",
        color: "green-text-gradient",
      },
      {
        name: "lathe machine",
        color: "pink-text-gradient",
      },
    ],
    image: tailstock,
    source_code_link: "https://drive.google.com/file/d/190ZUzgvv-b2GqPbY-N0C59pZY0YNBJ5Q/view?usp=drivesdk",
  },
  {
    name: "Fish Species Detection and Classification",
    description:
      "Built a deep learning model using MobileNetV2 to classify freshwater fish species in Bangladesh. Optimized for Google Colab TPU.",
    tags: [
      {
        name: "colab",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "grey-text-gradient",
      },
    ],
    image: fish,
    source_code_link: "https://github.com/marufmullah50/Bd_freshwater_Fish_identification",
  },
  {
    name: "Dhaka Wind Property Prediction",
    description:
      "A regression model that predicts the price of properties in Dhaka based on various features using machine learning.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "catboost",
        color: "pink-text-gradient",
      },
      {
        name: "pands",
        color: "white-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/marufmullah50/Dhaka_Wind_Property_Prediction",
  },
  {
    name: "Wood Property Prediction Using ML",
    description:
      "A regression model that predicts the price of wood based on various features using machine learning.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "xgboost",
        color: "pink-text-gradient",
      },
      {
        name: "catboost",
        color: "pink-text-gradient",
      },
      {
        name: "kernel SVM",
        color: "pink-text-gradient",
      },
    ],
    image: wood,
    source_code_link: "#",
  },
  {
    name: "Photo Background Edit Using Python",
    description:
      "A simple python script that removes the background of a photo and replaces it with a solid color.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "pillow",
        color: "pink-text-gradient",
      },
      {
        name: "onnxruntime",
        color: "white-text-gradient",
      },
    ],
    image: photo,
    source_code_link: "https://github.com/marufmullah50/Photo_Background_edit_using_Python",
  },
  {
    name: "BREAST CANCER CLASS PREDICTION",
    description:
      "A classification model that predicts whether a patient has breast cancer based on various features using machine learning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "logistic regression",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
      {
        name: "sk learn",
        color: "white-text-gradient",
      },
    ],
    image: breast,
    source_code_link: "https://github.com/marufmullah50/BREAST_CANCER_CLASS_PREDICTION",
  },
];

export { services, technologies, experiences, testimonials, projects };
