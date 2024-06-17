const logotext = "Shubham";
const meta = {
    title: "Shubham Shukla",
    description: "I’m Shubham Shukla Engineer Problem Solver Full stack devloper.",
};

const introdata = {
    title: "I’m Shubham Shukla",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I love  solving Problems",
    },
    description: "Innovative and results-driven Computer Science graduate with a strong background in AI, machine learning, and web development",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About about my self",
    aboutme: "Hello! I’m Shubham , a third-year B.Tech student with a fervent passion for coding and web development. My journey in technology began with a deep interest in Java and Python programming, and it has since evolved into a comprehensive expertise in full stack development.I specialize in leveraging powerful technologies such as React and Tailwind CSS to build dynamic, responsive, and visually captivating websites. "
};
const worktimeline = [    
];

const skills = [{
        name: "Python",
        value: 70,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Tailwind CSs",
        value: 85,
    },
    {
        name: "Mongo Db",
        value: 65,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "Creating intuitive and visually appealing user interfaces and experiences that enhance user satisfaction and engagement."
    },
    {
        title: "Problem Solving",
        description: "Leveraging strong analytical and algorithmic skills to tackle complex challenges and devise efficient, scalable solutions."
    },
    {
        title: "Web Development",
        description: "Building dynamic, responsive, and robust websites using modern web technologies to deliver excellent user experiences."
    },
];


const dataportfolio = [
    {
      img: require("./assets/images/img_1.jpg"), // Adjust the path to match your project's structure
      title: "Engagement Analyzer",
      description: " Developed and implemented an Engagement Analyzer model utilizing AI and machine learning techniques.",
      link: "https://github.com/shubham-3/engagement-analyzer", // Replace with actual link
    },
    {
      img: require("./assets/images/img_2.jpg"), // Adjust the path to match your project's structure
      title: "Tourism WebPage",
      description: "Created a visually appealing web-based landing page for a tourism website using HTML, CSS, and JavaScript.",
      link: "https://toursimwebpage.netlify.app", // Replace with actual link
    },
    {
        img: require("./assets/images/img_3.png"), // Adjust the path to match your project's structure
        title: "Notes Maker",
        description: " Developed a app for making notes using html,css and javascript.",
        link: "https://github.com/shubham-3/notesapp_js", // Replace with actual link
      },
  ];
  
  
  
const contactConfig = {
    YOUR_EMAIL: "Shubhamshukla2345@gmail.com",
    YOUR_FONE: "(+91)936-948-8728",
    description: " I am always eager to connect with professionals and clients who are passionate about their projects. Whether you’re seeking expert advice, looking to initiate a new project, or exploring potential partnerships, I am here to help. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_v8sgswc",
    YOUR_TEMPLATE_ID: "template_znm38im",
    YOUR_USER_ID: "MzSacgPCt_xhajq4e",
};

const socialprofils = {
    github: "https://github.com/shubham-3",
    linkedin: "https://www.linkedin.com/in/shubham-s25/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};