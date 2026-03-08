"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { ProjectModal, ProjectDetail } from "./ProjectModal";


export function ProjectCard({ projectsData }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <ul className="mt-3 grid gap-6">
        {projectsData.map((project, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="flex group block w-full rounded-2xl border-2 border-[#1D3461] bg-[#1D3461] dark:border-[#33415C] dark:bg-[#33415C] p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-white hover:shadow-lg md:p-8"
            >
              <div className="flex-1">
                <h2 className="font-serif text-xl font-normal text-white transition group-hover:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl bg-[#6290C8] px-3 py-1 text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="ml-4 h-20 w-24 sm:ml-6 sm:h-28 sm:w-31 md:ml-6 md:h-28 md:w-31 lg:ml-6 lg:h-28 lg:w-31 rounded-xl object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}

export default ProjectCard;
