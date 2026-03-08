"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import NavLink from "./NavLink";
import { title } from "process";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { useTheme } from "./ThemeContext";


const navLinks = [
    {
       title: "About",
       path: "#about",
    },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
    
]

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const menuRef = useRef(null);
    const { dark, setDark } = useTheme();


    const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setNavOpen(false);
		}
	};

    useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 border-b-2 border-[#1D3461] dark:border-[#6290C8] ${dark ? 'bg-[#212529]' : 'bg-[#6290C8] md:bg-[#6290C8]/90'}`}>
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-10 py-2">
                <Link 
                    href={"/"} 
                    onClick={() => setNavOpen(false)}
                    className="text-xl md:text-3xl font-semibold"
                >
                    <Image
						src={dark ? "/images/portfolio-logo-fordarkmode.png" : "/images/portfolio-logo-forlightmode.png"}

						width={80}
						height={80}
						alt="logo"
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navOpen ? (
                        <button onClick={() => setNavOpen(true)} className="flex items-center px-3 py-2 border rounded border-[#1D3461] text-[#1D3461] hover:text-white hover:border-white dark:border-[#6290C8] dark:text-[#6290C8]">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavOpen(false)} className="flex items-center px-3 py-2 border rounded border-[#1D3461] text-[#1D3461] hover:text-white hover:border-white dark:border-[#6290C8] dark:text-[#6290C8]">
                            <XMarkIcon className="h-5 w-5" />
                        </button>     
                    )}
                </div>

                <div className="menu block hidden md:block md:w-auto" id="navbar">
                    <ul className="flex items-center justify-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        
                        ))}
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
                    </ul>
                </div>
            </div>
            {navOpen && <MenuOverlay links={navLinks} setNavOpen={setNavOpen} />} 
        </nav>
    )
}

const MenuButtons = ({ navOpen, setNavOpen }) => {
	return !navOpen ? (
		<button
			onClick={() => setNavOpen(true)}
			className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-slate-800 hover:border-slate-800 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
		>
			<Bars3Icon className="h-5 w-5" />
		</button>
	) : (
		<button
			onClick={() => setNavOpen(false)}
			className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-slate-800 hover:border-slate-800 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
		>
			<XMarkIcon className="h-5 w-5" />
		</button>
	);
};

export default Navbar;