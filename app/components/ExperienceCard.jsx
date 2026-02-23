import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ExperienceCard = ({ company, role, time, description, image, previewUrl }) => {
  return (
    <div className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-blue-300 dark:bg-neutral-900 overflow-hidden hover:shadow-lg transition">
      
      {/* Clickable image */}
      <a href={previewUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={company} className="w-full h-48 object-contain bg-blue-300 dark:bg-neutral-900 p-4 cursor-pointer" />
      </a>

      {/* Text content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {company}
        </h3>

        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">
          {role} • {time}
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;