"use client";

import React from 'react';
import NavLink from "./NavLink";
import { useTheme } from "./ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, setNavOpen }) => {
    const { dark, setDark } = useTheme();
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index} onClick={() => setNavOpen(false)}>
                   <NavLink href={link.path} title={link.title} />
                </li>
            ))}
            <li>
                <button
                    onClick={() => setDark(!dark)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    aria-label="Toggle Dark Mode"
                >
                    {dark ? (
                        <SunIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    )}
                </button>
            </li>
        </ul>
    );
};

export default MenuOverlay;