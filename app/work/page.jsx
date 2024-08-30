"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [

    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: 
            "This project involved creating a visually appealing and responsive e-commerce website where users can easily browse, filter, and purchase furniture.The website features a clean and modern design, with intuitive navigation and dynamic elements like interactive product galleries, hover effects, and an animated shopping cart.",
        stack: [{ name: "html5" }, { name: "css3" }, { name: "javaScript" }],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: 
            "I recently contributed to a full-stack project using Next.js, Tailwind CSS, and Node.js. In this project, I helped build a modern website that combines a dynamic front end with a powerful back end to deliver a seamless user experience. I worked with Node.js to build RESTful APIs, manage database connections, and handle server-side logic.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: "/assets/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: 
            "This project involved developing a sophisticated web landing that combines powerful features with a sleek, modern design.On the front end, I used Next.js to create a highly responsive and SEO-friendly user interface. The framework’s server-side rendering capabilities helped enhance performance and load times. Tailwind CSS was employed to design a clean, customizable layout, ensuring a consistent and visually appealing experience across all devices.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
        image: "/assets/work/thumb3.png",
        live: "",
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handSlideChange = (swiper) => {
        // get curret slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ 
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
                    xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline-hover group-hover:text-orange-500"
                            >
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-orange-500">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                            bg-gradient-to-r from-rose-700 to-orange-500 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-slate-900 text-3xl 
                                                group-hover:text-white" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                            bg-gradient-to-r from-rose-700 to-orange-500 flex justify-center items-center group">
                                                <BsGithub className="text-slate-900 text-3xl 
                                                group-hover:text-white" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center 
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons*/}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 
                                bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max 
                                xl:justify-none" 
                                btnStyles="text-white hover:text-orange-500 text-primary  text-[22px] w-[44px] h-[44px]
                                flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Work;