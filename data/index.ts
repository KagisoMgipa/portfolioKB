 
 export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const GridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-1.3 md:col-span-2 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "w-full h-full absolute",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-1 md:col-span-1.8 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-top",
      img: "",
      spareImg: "",
    },
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-2 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Morops Tutoring Academy (self founded)",
      des: "Empowering Minds, Illuminating Futures",
      img: "/PHOTO-2025-01-07-10-41-47.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://kagisomgipa.github.io/Morops-tutoring/index.html",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Kagiso Baloyi",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 6,
      name: "Telkom.",
      img: "TelkomName.svg", // Add Telkom logo path here
      nameImg: "/Telkom_(South_Africa)-Logo.wine.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "TelkomName.svg",
      nameImg: "/FalcorpTechnologies.svg",
    },
    {
      id: 4,
      name: "CXI-Africa",
      img: "/TelkomName.svg",
      nameImg: "/CXI-Africa.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/TelkomName.svg",
      nameImg: "/Book-Tech-Logo.png",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "System Administrator | IT Application support",
      desc: ["Manage incidents, request’s and problems. ",
             "Testing of application changes after each CO/ECO/Releases. ",
             "Assisted in the System Maintenance, User Management, Backup & Recovery, Performance Monitoring and Integration. ",
             "Manage access to users in LDAP,OAM, grant and remove access to groups as well as deactivate users upon request, or fix profile incase corruption occurs. ",
             "Adhere to SSL requirements - attending to certificate issues/updates i.e. generating certificates and implementing them as per requirements",
             "Technology understanding of WL, Apache/OHS, DB (SQL), LDAP, WEB/Servlets/HTTP etc. for maintenance. ",
            ],
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Junior DevSecOps Engineer",
      desc: [
        "DevOps Implementation migration. ",
        "Automation of health checks and familiarity with CI/CD. ",
        "Use of Jenkins and Elastic Search, Gitea, to run jobs, search logs. ",
        "Corrective maintenance, fault-finding and reporting, Configure application and system software. ",
        "Monitoring the application systems to ensure secure services with minimum downtime. ",
        "Using available tools i.e. Foglight, AppDynamics. ",
        "Deploy new applications into production environments. ",
        "Analyse and assist Development teams and Solution Architects with investigations in testing and maintaining applications 24x7"
            ],
      className: "md:col-span-2",
      thumbnail: "/exp2.svg"
    },
    {
      id: 4,
      title: "Front-End Developer",
      desc:[ "Develop page structures based on design mockups using HTML, CSS, and JavaScript. ",
             "Using tools such as React, Angular, or Vue.js and next.js, which provide ready-to-use components and structures that make development faster and more efficient. ",
             "Use AJAX and Fetch API to pull and send data from the backend without refreshing the page. ",
             "Work with JSON or XML data formats returned from APIs, which may involve parsing and displaying the data appropriately in the UI. ",
           ],   
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 3,
      title: "XR-Developer",
      desc:[ "Created appealing, user-friendly designs for interactive elements like buttons, menus, and sliders. ",
             "Applied cohesive design guidelines for colors, typography, and layout to ensure uniformity across screens. ",
             "Used tools like Sketch, Figma, Blender to build wireframes and detailed mockups that define each page's structure and design",
           ], 
        className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/insta.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
    {
      id: 4,
      img: "/wha.svg",
    },
  ];