import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-[#1D3461] dark:border-[#6290C8]"
        : "text-gray-300 border-slate-600 hover:border-white"
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-4 py-3 sm:px-4 sm:py-2 sm:text-xl text-base md:px-6 md:py-3 lg:px-8 lg:py-4 cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;