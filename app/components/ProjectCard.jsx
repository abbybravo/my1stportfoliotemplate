import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, role, description, image, gitUrl, previewUrl, motionVideo }) => {
  return (
    <div>
      <div
        className="h-60 md:h-80 rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-blue-300 dark:bg-neutral-900 bg-opacity-0 hidden md:group-hover:flex md:group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl && (
            <Link 
              href={gitUrl}
              target="_blank"
              className="h-12 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link" 
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          
          {previewUrl && (
            <Link 
              href={previewUrl} 
              target="_blank"
              className="h-12 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link" 
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-blue-300 dark:bg-neutral-900 py-6 px-4">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="text-sm font-semibold text-white- dark:text-white mt-1">
          {role}
        </p>
        <p className="text-white mt-4">{description}</p>
      </div>

      {motionVideo && ( 
        <a 
          href={motionVideo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-3 text-center text-white font-semibold bg-blue-300 hover:bg-blue-600 py-2 rounded-lg" 
        > 
          View Motion Demo 
        </a> 
      )}
        {previewUrl && ( 
          <div className="flex md:hidden justify-center mt-3 gap-4">
            <Link 
              href={previewUrl} 
              target="_blank" 
              className="px-4 py-2 rounded-lg border border-white text-sm font-semibold text-white" 
            > 
              View 3D Model 
            </Link> 
        </div>
      )}
    </div>
  );
};

export default ProjectCard;