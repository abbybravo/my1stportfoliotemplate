"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {

    return (
        <section className="px-0 sm:px-6 md:px-12 lg:px-20 lg:py-16">   
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8.5 lg:gap-12"> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5}} 
                    className="md:col-span-7 col-span-9 place-self-center text-center md:text-left"
                >                                       
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Abby Bravo',
                                1000,
                                'a Mechanical Engineer',
                                1000,
                                'an Aspiring Project Manager',
                                1000,
                                'Abby Bravo',
                                1000,
                            ]}
                            wrapper="span"
                            speed={25}
                            repeat={0}
                        />   
                    </h1>
                    <p className="text-[#545454] text-base sm:text-lg mb-6 lg:text-xl">
                        Driven by curiosity, grounded by purpose, and always excited to learn from others.
                    </p>

                </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5}} 
                        className="col-span-9 md:col-span-5 place-self-center mx-auto md:mx-0 mt-4 lg:mt-0">
                        <div className="flex justify-center w-full">
                            <div className="rounded-full bg-[#3788ff] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                                <Image
                                    src ="/images/hero image rounded.png"
                                    alt = "hero image"
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover"
                                    width = {350}
                                    height = {350}
                                />
                            </div>
                        </div>
                    </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;