import React from 'react'
import Image from "next/image";

const Footer = () => {
    return (
            <footer className="footer border z-10 border-t-[#3788ff] border-l-transparent border-r-transparent text-white">
                <div className="container px-12 py-6 flex justify-between items-center">
                    <span>
                        <Image
                            src={'/images/portfolio-logo-4.png'}
                            width={60}
                            height={60}
                            alt="logo"
                        />
                    </span>
                    <p className="text-slate-600">Copyright @ 2026 Abigail Bravo.</p>
                </div>
            </footer>
    );
};

export default Footer;