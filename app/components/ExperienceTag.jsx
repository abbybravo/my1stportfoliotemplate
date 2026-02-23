"use client";

import React from 'react'

const ExperienceTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-blue-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-3 py-2 text-base sm:px-6 sm:py-3 sm:text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ExperienceTag;