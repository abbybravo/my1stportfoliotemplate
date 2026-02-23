"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { img, pre } from "framer-motion/client";

const projectsData = [
  {
    id: 1,
    title: "Mechanical Design Object Sorter",
    role: "Project Manager",
    description: 
      "Led a 5-person team through end-to-end development of a constrained electromechanical sorting system, achieving a top-3 performance during final testing.",
    image: "/images/projects/mech-design1.png",
    tag: ["All", "Mechanical"],
    imgUrl: "/images/projects/mech-design1.png",
    previewUrl: null
  },
  {
    id: 2,
    title: "Microsoft x SHPE AI Upskill Hackathon",
    description: 
      "Completing Data Scientist Certification Path; preparing to manage data ingestion and model training/deployment via Python, Azure ML, and MLflow, which will be applied to a 2-week hackathon.",
    image: "/images/projects/microsoft-shpe2.png",
    tag: ["All", "Tech"],
    imgUrl: "/images/projects/microsoft-shpe2.png",
    previewUrl: null
  },
  {
    id: 3,
    title: "Piston and Crank Shaft",
    description: 
      "Built a parametric 4‑cylinder piston–crankshaft mechanism using revolute, slider, and motion‑linked joints to simulate accurate mechanical motion in Fusion 360.",
    image: "/images/projects/piston-crankshaft.png",
    tag: ["All", "Mechanical"],
    imgUrl: "/images/projects/piston-crankshaft.png",
    previewUrl: "https://cougarnet1140.autodesk360.com/g/shares/SH28cd1QT2badd0ea72bedb823af72d1f1f1",
    motionVideo: "/images/projects/Moving-Piston-and-Crank-Shaft.mp4"
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
    <section id="projects" className="pt-3 sm:pt-8 scroll-mt-32 md:scroll-mt-20">
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
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard 
                key={project.id}
                title={project.title}
                role={project.role} 
                description={project.description} 
                image={project.image}
                imgUrl={project.imgUrl} 
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                motionVideo={project.motionVideo}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;