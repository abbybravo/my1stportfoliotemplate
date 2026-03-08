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
    title: "Mechanical Design Object Sorter",
    role: "Project Manager",
    description: "Led a 5-person team through end-to-end development of a constrained electromechanical sorting system, achieving a top-3 performance during final testing.",
    longDescription: "Led a 5-person team through end-to-end development of a constrained electromechanical sorting system, achieving a top-3 performance during final testing. Managed project timelines, coordinated design efforts, and facilitated communication between mechanical and electrical subteams to ensure successful integration and functionality.",
    image: "/images/projects/mech-design-1.png",
    tag: ["All", "Mechanical"],
    skills: ["CAD", "Project Management", "Team Leadership"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 2,
    title: "Microsoft x SHPE AI Upskill Hackathon",
    description: 
      "Completing Data Scientist Certification Path; preparing for a 2-week hackathon.",
    longDescription: "Completing Data Scientist Certification Path; preparing to manage data ingestion and model training/deployment via Python, Azure ML, and MLflow, which will be applied to a 2-week hackathon. This experience will enhance my skills in machine learning workflows and cloud-based AI solutions, enabling me to contribute effectively to the hackathon project and future AI initiatives.",
    image: "/images/projects/microsoft-shpe2.png",
    tag: ["All", "Tech"],
    skills: ["Python", "Azure ML", "MLflow"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 3,
    title: "Piston and Crank Shaft",
    description: "Built a parametric 4‑cylinder piston–crankshaft mechanism using revolute, slider, and motion‑linked joints to simulate accurate mechanical motion in Fusion 360.",
    longDescription: "Built a parametric 4‑cylinder piston–crankshaft mechanism using revolute, slider, and motion‑linked joints to simulate accurate mechanical motion in Fusion 360.",
    image: "/images/projects/piston-crankshaft.png",
    tag: ["All", "Mechanical"],
    skills: ["CAD", "Fusion 360", "Mechanical Simulation"],
    liveUrl: "https://cougarnet1140.autodesk360.com/g/shares/SH28cd1QT2badd0ea72bedb823af72d1f1f1",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 4,
    title: "CCTV-Camera",
    description: 
      "Build an ESP32-based CCTV camera with live video streaming and motion detection capabilities, utilizing the ESP32-CAM module and integrating it with a website for remote monitoring.",
    longDescription: "Build an ESP32-based CCTV camera with live video streaming and motion detection capabilities, utilizing the ESP32-CAM module and integrating it with a website for remote monitoring.",
    image: "/images/projects/cctv-camera.png",
    tag: ["All", "Electrical"],
    skills: ["ESP32", "CCTV"],
    liveUrl: "file:///C:/Users/abby_/my-official-portfolio/public/images/projects/cctv-camera.png",
    repoUrl: "https://github.com/example",
    href: null
  },
  {
    id: 5,
    title: "Bull Shark Sightings PowerBI Dashboard",
    description: 
      "Developed an interactive dashboard global bull shark sightings from 2021–2026 using GBIF data.",
    longDescription: "This interactive Power BI dashboard visualizes global bull shark sightings from 2021–2026 using the GBIF Shark Sightings Dataset. It highlights regional hotspots, year‑over‑year trends, and the most recent recorded sighting. The project focuses on data cleaning, geographic mapping, and visual storytelling through custom design elements, summary metrics, and filter‑driven exploration.",
    image: "/images/projects/bull-shark.png",
    tag: ["All", "Data Science"],
    skills: ["PowerBI", "Data Analysis", "Visualization"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWYwNGI4OTUtNzQwMS00ZDBiLWE2ZTQtMWQ5M2MxZjU0ZWYxIiwidCI6IjE3MGJiYWJkLWEyZjAtNGM5MC1hZDRiLTBlOGYwZjBjNDI1OSIsImMiOjN9",
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