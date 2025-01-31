"use client";

import { FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";

const Footer = () => {
    return (
        <>
            <div
                className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden md:z-20 z-0
    bg-[radial-gradient(24.45%_88.58%_at_23.57%_2%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)]
    bg-no-repeat bg-cover bg-center"
            >
                <MouseParallaxContainer
                    className="parallax hidden lg:block"
                    containerStyle={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "10",
                    }}
                    globalFactorX={0.1}
                    globalFactorY={0.1}
                    resetOnLeave
                >
                    <MouseParallaxChild
                        factorX={0.4}
                        factorY={0.4}
                        className="absolute top-10 -right-20 w-full h-full"
                    >
                        <img src="/backgrounds/WaveLinesDesktop1.svg" alt="" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.2}
                        factorY={0.2}
                        inverted
                        className="absolute top-10 -right-20 w-full h-full"
                    >
                        <img src="/backgrounds/WaveLinesDesktop2.svg" alt="" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.3}
                        factorY={0.3}
                        className="absolute top-0 -left-20 w-full h-full"
                    >
                        <img src="/backgrounds/WaveLinesDesktop3.svg" alt="" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.15}
                        factorY={0.15}
                        inverted
                        className="absolute top-0 -left-20 w-full h-full"
                    >
                        <img src="/backgrounds/WaveLinesDesktop4.svg" alt="" />
                    </MouseParallaxChild>
                </MouseParallaxContainer>

                <div className="absolute w-full h-full bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover bg-center"></div>

                <div className="absolute h-full w-full flex items-center justify-center md:pl-20">
                    <div className="container max-width">
                        <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white lg:text-head-2 font-semibold mb-[24px] z-[11] relative">
                            Legacy no longer
                        </h3>
                        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px] z-[11] relative">
                            Talk to us to find out how we can transform your
                            organization for the future
                        </p>

                        <button className="w-full lg:w-auto lg:py-3.5 py-3 px-[42px] rounded-md bg-[#fe8b53] text-white flex items-center justify-center gap-2 false z-[11] relative group cursor-pointer">
                            <span className="font-semibold font-inter text-lg group-hover:-translate-x-1 transition-all duration-500">
                                Contact Us
                            </span>
                            <IoIosArrowForward className="group-hover:translate-x-0.5 transition-all duration-500" />
                        </button>
                    </div>
                </div>
            </div>

            <footer className="">
                <div className="bg-[#002045] border-b border-[#164377] lg:px-14">
                    <div className="container max-width mx-auto flex justify-between py-11">
                        <img src="/logo.svg" alt="AnyTech Logo" />

                        {/* Smaller Devices */}
                        <div className="flex text-[#247fe9] text-3xl gap-3 lg:hidden">
                            <a href="#">
                                <FaLinkedin />
                            </a>
                            <a href="#">
                                <IoCall />
                            </a>
                            <a href="#">
                                <RiMailFill />
                            </a>
                        </div>

                        {/* Larger Devices */}
                        <div className="hidden lg:flex items-center">
                            <p className="px-6 py-3.5 border-r border-[#164377] text-[#00e9ea]">
                                Our Solutions
                            </p>
                            <div className="">
                                <a
                                    href="#"
                                    className="text-[#00e9ea] hover:text-[dodgerBlue] px-6 py-3.5"
                                >
                                    AnyCaaS
                                </a>
                                <a
                                    href="#"
                                    className="text-[#00e9ea] hover:text-[dodgerBlue] px-6 py-3.5"
                                >
                                    AnyBaaS
                                </a>
                                <a
                                    href="#"
                                    className="text-[#00e9ea] hover:text-[dodgerBlue] px-6 py-3.5"
                                >
                                    AnySaaS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#00152D] lg:px-14">
                    <div className="container max-width mx-auto text-[#1f80f0] py-8 flex gap-4 flex-col items-center lg:flex-row lg:justify-between text-xs">
                        <p className="">
                            <span className="font-semibold">
                                &copy; 2023 All rights reserved
                            </span>
                            . Any Technology Pte Ltd.
                        </p>
                        <a href="#" className="hover:text-[#b9d9ff]">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
