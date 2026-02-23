"use client";

import React, { useState, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceTag from "./ExperienceTag";
import { motion, useInView } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "Micron Technology",
    role: "Photomask Fab Support Engineering Intern",
    time: "Summer 2025",
    description: "Led wafer trial progress across a cross-functional team of 20+ people to strengthen understanding of defectivity risk/data and identify optimal reticle carrier that results in nearly 0% defectivity targets critical for ID1 and ID2 reticle transfers.",
    image: "/images/experiences/micron.png", /** change later to micron */
    tag: ["All", "Engineering"],
    previewUrl: "https://www.micron.com"
  },
  {
    id: 2,
    company: "Bechtel Corporation",
    role: "Mechanical/Pipe Field Engineering Intern",
    time: "Summer 2024",
    description: "Developed an Excel tracker for 75% of the High-Level Waste facility’s equipment, streamlining verification efforts, exposing inconsistencies between inventory databases and facility to support progress on a $15 billion Department of Energy project.",
    image: "/images/experiences/bechtel2.png", /** change later to bechtel */
    tag: ["All", "Engineering"],
    previewUrl: "https://www.bechtel.com"
  },
  {
    id: 3,
    company: "Squirrel's Remodeling LLC | 2019 - Present",
    role: "Project Manager",
    time: "2019 - Present",
    description: "Prepare detailed quotes for 100+ remodeling projects via email and PDF Documentation, and calculate costs with Google Sheets.",
    image: "/images/experiences/squirrels-remodeling.png", /** not loading */
    tag: ["All", "Business"],
  },
   {
    id: 4,
    company: "Raw Nutrition/BUM Energy | Present",
    role: "Brand Ambassador",
    time: "Present",
    description: "Support product launches and drive engagement as a brand ambassador.",
    image: "/images/experiences/RAW-Nutrition.png", /** add raw nutrition later */
    tag: ["All", "Brand"],
    previewUrl: "https://www.getrawnutrition.com"
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