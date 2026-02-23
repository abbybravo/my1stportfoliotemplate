"use client";
import React from "react";
import LinkedinIcon from "../../public/linkedin-logo.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section id= "contact" 
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative overflow-hidden">
            
            <div className="absolute h-80 w-80 rounded-full blur-3xl z-0 from-blue-600 to-transparent opacity-60 top-3/4 -left-4 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="z-10 flex flex-col items-center md:block">
                <h5 className="text-4xl font-bold text-white my-2">Let's Connect!</h5>
                <p className="text-lg text-[#545454] mb-4 max-w-md">
                    {" "}
                    Always happy to connect! Whether it’s over a quick coffee chat or simply to share experiences.
                </p>
                <div className="socials flex flex-row gap-3">
                    <Link href="https://linkedin.com/in/abigailbravo">
                        <Image src={LinkedinIcon} alt = "Linkedin Icon" width={32} length={32}/>
                    </Link>
                </div>
            </div>
            <div>
                <form 
                    onSubmit={(e) => { e.preventDefault(); 
                    
                        const email = e.target.email.value; 
                        const subject = encodeURIComponent(e.target.subject.value); 
                        const body = encodeURIComponent(e.target.message.value); 
                        
                        window.location.href = `mailto:abbybravo34@gmail.com?subject=${subject}&body=${body}`; 
                    }} 
                    className="flex flex-col"
                >
                    <div className="mb-6">
                        <label 
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your Email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email" 
                            required 
                            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="ab@google.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input 
                            name="subject"
                            type="text" 
                            id="subject" 
                            required 
                            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Type Subject Here"
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="message" 
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Leave Your Message Here"
                        />
                    </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;