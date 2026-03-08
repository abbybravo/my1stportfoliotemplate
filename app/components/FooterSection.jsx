import React from 'react'
import Image from 'next/image';
import { useTheme } from './ThemeContext';

const Footer = () => {
    const { dark } = useTheme();
    return (
            <footer className="footer border-t-2 z-10 border-t-[#1D3461] dark:border-t-[#6290C8] border-l-transparent border-r-transparent text-white">
                <div className="container px-12 py-6 flex justify-between items-center">
                    <span>
                        <Image
                            src={dark ? "/images/portfolio-logo-fordarkmode.png" : "/images/portfolio-logo-forlightmode.png"}
                            width={60}
                            height={60}
                            alt="logo"
                        />
                    </span>
                    <p className="text-gray-300">Copyright @ 2026 Abigail Bravo.</p>
                </div>
            </footer>
    );
};

export default Footer;