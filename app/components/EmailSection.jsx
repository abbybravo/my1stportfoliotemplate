"use client";
import React, { useState } from "react";
import LinkedinIcon from "../../public/linkedin-logo.svg";
import GithubIcon from "../../public/github-logo2.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
        await fetch("https://formspree.io/f/xbdawvwd", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        });
        setSubmitted(true); // optional, you can remove this if you don't want any message
        form.reset();       // clears the form
        } catch (error) {
        console.error("Form submission error", error);
        }
    };

    return (
        <section id= "contact" 
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative overflow-hidden md:scroll-mt-15">
            
            <div className="absolute h-80 w-80 rounded-full blur-3xl z-0 from-blue-600 to-transparent opacity-60 top-3/4 -left-4 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="z-10 flex flex-col items-center md:block">
                <h5 className="text-4xl font-bold text-white my-2">Let's Connect!</h5>
                <p className="text-lg text-gray-300 dark:text-[#9CA2A9] mb-4 max-w-md">
                    {" "}
                    Always happy to connect! Whether it’s over a quick coffee chat or simply to share experiences.
                </p>
                <div className="socials flex flex-row gap-3">
                    <Link href="https://linkedin.com/in/abigailbravo">
                        <Image src={LinkedinIcon} alt = "Linkedin Icon" width={32} height={32}/>
                    </Link>
                    <Link href="https://github.com/abbybravo">
                        <Image src={GithubIcon} alt = "Github Icon" width={32} height={32}/>
                    </Link>
                </div>
            </div>
            <div>
                <form 
                    action="https://formspree.io/f/xbdawvwd" // <-- replace with your Formspree ID
                    method="POST"
                    className="flex flex-col"
                    onSubmit={handleSubmit}
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
                            className="bg-[#1D3461]/60 border-[#1D3461]/60 border dark:bg-[#6290C8]/30 border dark:border-[#6290C8]/50 placeholder:text-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
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
                            className="bg-[#1D3461]/60 border-[#1D3461]/60 border dark:bg-[#6290C8]/30 border dark:border-[#6290C8]/50 placeholder:text-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
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
                            className="bg-[#1D3461]/60 border-[#1D3461]/60 border dark:bg-[#6290C8]/30 border dark:border-[#6290C8]/50 placeholder:text-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                            placeholder="Leave Your Message Here"
                        />
                    </div>
                        <button
                            type="submit"
                            className="bg-[#1D3461] hover:bg-[#1D3461]/80 text-white dark:bg-[#6290C8] dark:hover:bg-[#6290C8]/80 dark:text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>

                        {submitted && (
                            <p className="text-white mt-3">
                            Thanks! Your message has been sent.
                            </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;