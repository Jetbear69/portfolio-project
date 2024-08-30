"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: 
            "I specialize in creating responsive, user-friendly websites that combine aesthetic appeal with seamless functionality. My services include building custom websites from scratch, enhancing existing sites, optimizing performance, and ensuring cross-browser compatibility.I focus on delivering pixel-perfect designs, intuitive user experiences, and clean, maintainable code. Whether you need a simple landing page or a dynamic web application, I bring a creative and detail-oriented approach to every project.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: 
            "I focus on designing intuitive interfaces that are both visually appealing and easy to navigate, ensuring your users have a seamless and enjoyable journey on your website or app.My approach combines research, wireframing, prototyping, and user testing to deliver designs that align with your brand’s goals and meet user needs. I’m passionate about crafting layouts that are not only aesthetically pleasing but also enhance usability, accessibility, and overall satisfaction.",
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        description: 
            " I specialize in crafting unique, memorable logos that capture the essence of your business and resonate with your target audience. From modern and minimalist designs to bold and dynamic logos, I create versatile and timeless designs that work across all platforms and materials. If you're looking for a logo that truly represents your brand and leaves a lasting impression, I’m here to help you make your mark!",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: 
            "I prioritize creating SEO-friendly content that aligns with your audience's search intent while ensuring your website’s performance, speed, and usability are optimized for search engines. If you want to improve your online presence, attract more visitors, and convert them into customers, let’s work together to make your website shine in search results!",
        href: ""
    },
];

import { motion } from "framer-motion"

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease:"easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                        <div 
                            key={index} 
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            {/* top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link 
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-gradient-to-r from-rose-700 to-orange-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-orange-500 transition-all duration-500">
                                {service.title}
                            </h2>
                            {/* description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;