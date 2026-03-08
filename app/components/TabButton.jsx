"use client";

import React from 'react'
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)"},
};

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active 
        ? "text-white"
        : "text-gray-300";
    
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-[#1D3461] dark:bg-[#6290C8] mt-2 mr-3"
            ></motion.div>
        </button>
    );
};

export default TabButton;