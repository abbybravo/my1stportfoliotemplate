import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ExperienceCard = ({ company, role, time, description, image, previewUrl }) => {
  return (
    <div className="w-full rounded-xl border-2 border-[#1D3461] bg-[#1D3461] dark:border-[#33415C] dark:bg-[#33415C] shadow-sm transition-all hover:-translate-y-1 hover:border-white hover:shadow-lg md:p-2 mt-3">

      {/* Clickable image */}
      <a href={previewUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={company} className="w-full h-48 object-cover rounded-xl bg-[#1D3461] dark:bg-[#33415C] p-1 cursor-pointer" />
      </a>

      {/* Text content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white dark:text-white">
          {company}
        </h3>

        <p className="text-sm font-semibold text-gray-300 dark:text-gray-400 mt-1">
          {role} • {time}
        </p>

        <p className="text-gray-300 dark:text-gray-300 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;