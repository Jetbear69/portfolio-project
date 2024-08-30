"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: 
        " I’m Sarah Kate, a front-end developer with over 5 years of experience in building interactive and responsive web applications. I specialize in HTML, CSS, and JavaScript, and I’m proficient with frameworks like React and Next.js. My passion lies in creating beautiful and functional user interfaces that deliver a seamless experience across all devices.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sarah Kate",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+51) 999 999 999",
        },
        {
            fieldName: "Experience",
            fieldValue: "10 Years",
        },
        {
            fieldName: "Telegram",
            fieldValue: "@Sarahkate_dev",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Peruvian",
        },
        {
            fieldName: "Email",
            fieldValue: "sarah_kate@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Spanish, English",
        },
    ]
};

// experience data
const experience = {
    icon: "assets/resume/badge.svg",
    title: "My experience",
    description: 
        "I’ve worked on a variety of projects, collaborating closely with designers, back-end developers, and stakeholders to bring ideas to life. I love solving problems, optimizing performance, and continuously learning new technologies to stay current in this ever-evolving field. I’m dedicated to writing clean, maintainable code and constantly strive to enhance the usability and accessibility of my projects.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2020 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer",
            duration: "Summer 2021",
        },
        {
            company: "E-commerce Startup",
            position: "Freelance Web Developer",
            duration: "2020 - 2021",
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019 - 2020",
        },
        {
            company: "Digital Agency",
            position: "UX/UI Designer",
            duration: "2018 - 2019",
        },
        {
            company: "Software Development Firm",
            position: "Junior Developer",
            duration: "2017 - 2018",
        },
    ]
};

// education data
const education = {
    icon: "assets/resume/cap.svg",
    title: "My education",
    description: 
        "I have a diverse educational background that spans several areas of technology and design. I hold a degree in Computer Science, where I developed a strong foundation in programming, algorithms, and software development. My interest in the front end led me to specialize in web development, where I gained hands-on experience with HTML, CSS, JavaScript, and modern frameworks.",
    items: [
        {
            institution: "Online Course Platform",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
        },
        {
            institution: "Codecademy",
            degree: "Front-end Track",
            duration: "2022",
        },
        {
            institution: "Online Courses",
            degree: "Programing Course",
            duration: "2020 - 2021",
        },
        {
            institution: "Tech Institute",
            degree: "Certified Web Developer",
            duration: "2019",
        },
        {
            institution: "Design School",
            degree: "Diploma in Graphic Design",
            duration: "2016 - 2018",
        },
        {
            institution: "Community College",
            degree: "Associate Degree in Computer Science",
            duration: "2014 - 2016",
        },
    ]
};

// skills data
const skills = {
    title: "My skills",
    description:
        "To expand my skills, I also completed a Full-Stack Development program, learning both client-side and server-side technologies, including databases and API integrations. Additionally, I pursued training in Graphic Design to better understand visual aesthetics, user interface design, and the principles of creating compelling digital experiences.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon: <FaCss3 />,
            name: "css3",
        },
        {
            icon: <FaJs />,
            name: "javaScript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"; 

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-orange-500">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-orange-500"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-orange-500">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-orange-500"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[120px] h-[120px] bg-[#232329] rounded-full flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-orange-500 transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent 
                            value="about" 
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-orange-500">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;