"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";  
import { motion, useInView } from "framer-motion";
import { img, pre } from "framer-motion/client";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Project Title",
    role: "Role",
    description: "Short Description",
    longDescription: "Long Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Mechanical"],
    skills: ["CAD", "Project Management", "Team Leadership"],
    liveUrl: "Project Link",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 2,
    title: "Project Title",
    description: 
      "Short Description",
    longDescription: "Long Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Tech"],
    skills: ["Python", "Azure ML", "MLflow"],
    liveUrl: "Project Link",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 3,
    title: "Project Title",
    description: "Short Description",
    longDescription: "Long Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Mechanical"],
    skills: ["CAD", "Fusion 360", "Mechanical Simulation"],
    liveUrl: "Project Link",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 4,
    title: "Project Title",
    description: 
      "Short Description",
    longDescription: "Long Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Electrical"],
    skills: ["ESP32", "CCTV"],
    liveUrl: "Project Link",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 5,
    title: "Project Title",
    description: 
      "Short Description",
    longDescription: "Long Description",
    image: "/images/Placeholder.png",
    tag: ["All", "Data Science"],
    skills: ["Power BI", "Data Analysis", "Visualization"],
    liveUrl: "Project Link",
    repoUrl: "https://github.com/example",
    href: null
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-3 sm:pt-8 scroll-mt-23 md:scroll-mt-17" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mb-3 md:mb-3">
          My Projects
        </h2>

        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"}
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Mechanical" 
            isSelected={tag === "Mechanical"}
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Tech" 
            isSelected={tag === "Tech"}
          />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Electrical" 
            isSelected={tag === "Electrical"}
          />
        </div>
        <ProjectCard projectsData={filteredProjects} />
      </div>
    </section>
  );
};
export default ProjectsSection;