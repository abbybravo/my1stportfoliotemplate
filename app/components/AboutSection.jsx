"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-2 sm:grid-cols-2 list-disc pl-4 w-fit gap-x-12">
                <li>AutoCAD</li>
                <li>SolidWorks</li>
                <li>Microsoft Excel</li>
                <li>Synchro</li>
                <li>Tableau</li>
                <li>HTML</li>
                <li>Python</li>
                <li>Linux</li>
                <li>C++</li>
                <li>PowerBI</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <Image src="/images/uh-engineering-logo2.png" width={150} height={150} alt="uh cullen logo"/>
                    <span>Cullen College of Engineering <br></br>
                        Mechnical Engineering <br></br>
                        May 2027</span>
                </li>

                <li className="flex items-center gap-3">
                    <Image src="/images/uh-business-logo.png" width={150} height={150} alt="uh bauer logo"/>
                    <span>C.T. Bauer College of Business <br></br>
                        Business Administration <br></br>
                        December 2025</span>
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>General Motors Certificate in Agile Project Management</li>
            </ul>
        ),
    },
];

const images = ['/images/about-image-1st.png', '/images/about-image-2.png', '/images/about-image-3rd.png'];
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const [currentImage, setCurrentImage] = useState(images[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => {
				const currentIndex = images.indexOf(prevImage);
				const nextIndex = (currentIndex + 1) % images.length;
				return images[nextIndex];
			});
		}, 8000);

		return () => clearInterval(interval);
	}, []);
    
    const handleTabChange = (id) => {
        startTransition (() => {
            setTab(id);
        });
    };

    return (
        <section id= "about" className="text-white pt-10 pb-1 md:pb-8">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="relative w-full max-w-[420px] h-[420px] md:h-[460px] flex justify-center md:justify-start">
                    <Image 
                        src={currentImage}
                        fill
                        alt="about image 1"
                        className="object-cover rounded-xl"
                        />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a first-generation junior at the University of Houston, majoring in 
                        Mechanical Engineering and completed a minor in Business Administration.
                        I aspire to earn my MBA at one of the M7 or a Master's in Engineering Management.

                        I am the oldest daughter of Mexican-immigrant parents, and have a little sister
                        who's about to enter high school and wants to be a surgeon when she grows up, and go
                        to Harvard or Yale.

                        My "Why?" to everything I do is my family. My long-term goals are to buy 
                        my family a house, with the biggest garden for my mom, and a truck for my dad's
                        construction company, and so my little sister can finally have her own room. Additionally,
                        once I have the proper funds, I'd want to get my parents their green cards.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        > 
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        > 
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}
                        > 
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-5">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;