import { IBlogs } from "../Screens/Blog"
import blog1 from '../assets/images/blog/projectTracker.jpg'
import blog2 from '../assets/images/blog/aws.jpg'
import blog3 from '../assets/images/blog/mobileAppDevelopment.jpg'
import project1 from '../assets/images/projects/project1.jpg'
import { IFaq } from "../Screens/About"
import { IProject } from "../Screens/Project"

export const projects: IProject[] = [
    {
        _id: "1",
        title: "HRMS Application",
        pic: project1,
        subTitle: "MERN Stack Development",
        content: "This application is used for maintaine the overall company employees like invoice, payroll and travel.",
        category: "Web Application",
        client: "NA",
        location: "Madurai, Tamil Nadu",
        published: "September 22, 2024",
    },
    {
        _id: "2",
        title: "Billing Application",
        pic: project1,
        subTitle: "MERN Stack Development",
        content: "This application is used for mainly recode the expenses and incomming amount, Track the all users data.",
        category: "Web Application",
        client: "NA",
        location: "Madurai, Tamil Nadu",
        published: "September 22, 2024",
    },
    {
        _id: "3",
        title: "Admin Panel",
        pic: project1,
        subTitle: "MERN Stack Development",
        content: "This application is used for review the candidates details and maintain the candidae.",
        category: "Web Application",
        client: "NA",
        location: "Madurai, Tamil Nadu",
        published: "September 22, 2024",
    },
    {
        _id: "4",
        title: "Man Power Staffing",
        pic: project1,
        subTitle: "ReactJS Applicaiton",
        content: "This is a static site for Man Power Staffing site.",
        category: "Web Site",
        client: "NA",
        location: "Madurai, Tamil Nadu",
        published: "September 22, 2024",
    },
    {
        _id: "5",
        title: "Logistics",
        pic: project1,
        subTitle: "ReactJS Applicaiton",
        content: "This is a static site for Man Power Staffing site.",
        category: "Web Site",
        client: "NA",
        location: "Madurai, Tamil Nadu",
        published: "September 22, 2024",
    },
]

export const blogs: IBlogs[] = [
    {
        _id: "1",
        pic: blog2,
        title: "AWS",
        date: "September 13, 2024",
        subTitle: "Amazon Web Services",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum error molestiae fugit consequatur eos provident, repellat nihil rerum maxime atque ab expedita quam culpa qui quis, dicta, aperiam deleniti?",
        category: [
            "EC2",
            "Simple Storage Service",
            "IAM",
        ],
    },
    {
        _id: "2",
        pic: blog1,
        title: "Project Tracker",
        date: "September 13, 2024",
        subTitle: "Project Tracker",
        description: "This is my own project, This is availabe in Mobile app alos, Through this applicaiton to tracker our rotine life tacks, How much of time take a task, We can add the team mates also, We can generate the report.",
        category: [
            "Task",
            "Report",
            "Activity",
        ],
    },
    {
        _id: "3",
        pic: blog3,
        title: "React Native",
        date: "September 13, 2024",
        subTitle: "App Development",
        description: "Now am learning the mobile app development, I can develop the Web Applicaiton as well as same project in Mobile Application",
        category: [
            "Android",
            "IOS",
            "Cross Platform",
        ],
    },
]

export const faqs: IFaq[] = [
    {
        question: "What programming languages are you proficient in?",
        answer: "I am proficient in TypeScript, JavaScript (React, Node.js), Python, and C++. I also have experience working with SQL and NoSQL databases like MongoDB."
    },
    {
        question: "What frameworks and libraries do you have experience with?",
        answer: "I have extensive experience with React, Redux, Tailwind CSS, Express.js, Mongoose, and React Native. I have also worked with Vite, TypeORM, and Sequelize in various projects."
    },
    {
        question: " How do you approach problem-solving in development?",
        answer: "I have worked on web applications, mobile apps, and backend services. I have built full-stack applications using the MERN stack and created mobile apps with React Native."
    },
    {
        question: " What types of projects have you worked on?",
        answer: " I break down problems into smaller, manageable tasks. I prioritize testing and debugging throughout the development process and leverage my knowledge of algorithms and data structures for optimization."
    },
    {
        question: "How do you stay updated with industry trends?",
        answer: "I regularly follow tech blogs, participate in coding challenges, and stay active in developer communities. I also enroll in online courses to keep my skills up to date with the latest technologies."
    },
] 