"use client";

import React, { useState, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceTag from "./ExperienceTag";
import { motion, useInView } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "Company Name",
    role: "Role",
    time: "Summer 20xx",
    description: "Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Engineering"],
    previewUrl: "Company website"
  },
  {
    id: 2,
    company: "Company Name",
    role: "Role",
    time: "Summer 20xx",
    description: "Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Engineering"],
    previewUrl: "Company website"
  },
  {
    id: 3,
    company: "Company Name",
    role: "Role",
    time: "20xx - Present",
    description: "Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Business"],
  },
   {
    id: 4,
    company: "Company Name",
    role: "Role",
    time: "Present",
    description: "Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Brand"],
    previewUrl: "Company website"
  },
];

const ExperienceSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredExperiences = experienceData.filter((experience) => 
    experience.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="pt-2 sm:pt-8 scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-16 mb-10">
      <h2 className="text-center text-4xl font-bold text-white mb-3 md:mb-3">
        My Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ExperienceTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"}
        />
        <ExperienceTag 
          onClick={handleTagChange} 
          name="Engineering" 
          isSelected={tag === "Engineering"}
        />
        <ExperienceTag 
          onClick={handleTagChange} 
          name="Business" 
          isSelected={tag === "Business"}
        />
        <ExperienceTag 
          onClick={handleTagChange} 
          name="Brand" 
          isSelected={tag === "Brand"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredExperiences.map((experience, index) => (
          <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ExperienceCard 
                key={experience.id}
                company={experience.company} 
                role={experience.role}
                time={experience.time}
                description={experience.description} 
                image={experience.image} 
                previewUrl={experience.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ExperienceSection;