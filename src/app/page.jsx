"use client";

import { useRef, useState } from "react";
import CountUp from "react-countup";
import OurPhilosophyLarge from "@/assets/images/our_philosophy_large.png";
import OurPhilosophySmall from "@/assets/images/our_philosophy_small.png";

import SectionBottom from "@/assets/svg/section_bottom.svg";

import { PiShareNetworkFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

import { motion, useInView } from "framer-motion";

import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";

import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
    const trustedByBestSectRef = useRef(null);
    const trustedByBestSectInView = useInView(trustedByBestSectRef, {
        once: true,
    });

    const futureOfFinanceSwiperRef = useRef(null);
    const [futureOfFinanceSwiperIndex, setFutureOfFinanceSwiperIndex] =
        useState(0);

    return (
        <>
            {/* Home Section */}
            <section className="mb-8">
                <div className="home-hero-container lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white overflow-hidden bg-blue-500 pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] px-5">
                    <div className="container max-width mx-auto flex h-full">
                        <div className="lg:w-[60%] h-full flex flex-col justify-center z-30">
                            <h2 className="lg:max-w-max lg:whitespace-pre-line font-montserrat text-white text-5xl sm:text-[54px] lg:text-[80px] font-semibold leading-tight mb-6">
                                Embrace the future of finance
                            </h2>
                            <p className="text-white font-montserrat max-w-[37rem] font-semibold mb-8">
                                Reimagine financial services with AnyTech’s open
                                platform, distributed banking solution that
                                powers transformation
                            </p>
                            <a
                                href="#"
                                className="lg:w-fit lg:py-3.5 py-3 px-[42px] rounded-md bg-[#fe8b53] text-white flex items-center justify-center gap-2 z-[11] relative group cursor-pointer"
                            >
                                <span className="font-semibold font-inter text-lg group-hover:-translate-x-1 transition-all duration-500">
                                    Reach Out to Us
                                </span>
                                <IoIosArrowForward className="group-hover:translate-x-0.5 transition-all duration-500" />
                            </a>
                        </div>
                        <div // 0.5 second delay
                            className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full home-hero-image pointer-events-none"
                        >
                            <motion.figure
                                initial={{
                                    transform: "translate3d(12%, 0.002%, 0px)",
                                }} // Start position off-screen right
                                animate={{
                                    transform: "translate3d(0%, 0.002%, 0px)",
                                }} // End position on-screen
                                transition={{
                                    duration: 0.5, // Duration of the transition
                                    ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier timing function
                                    delay: 0.5, // Add delay
                                }}
                                style={{
                                    transform: "translate3d(12%, 0.002%, 0px)", // initial position
                                }}
                                className="h-[115%] w-[115%] object-cover"
                            >
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg"
                                    alt="Home hero image"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </motion.figure>
                        </div>
                    </div>

                    <div className="lg:hidden absolute top-0 h-full w-full">
                        <img
                            src="/backgrounds/HomeHeroMobile.svg"
                            alt="Hero Image"
                            loading="lazy"
                        />
                    </div>

                    {/* Parallax Animation */}
                    <MouseParallaxContainer
                        className="parallax hidden lg:block"
                        containerStyle={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0",
                            scale: "1.1",
                            zIndex: "10",
                        }}
                        globalFactorX={0.1}
                        globalFactorY={0.1}
                        resetOnLeave
                    >
                        <MouseParallaxChild
                            factorX={0.2}
                            factorY={0.2}
                            inverted
                            className="absolute top-10 -left-20 w-full h-full"
                        >
                            <img
                                src="/backgrounds/WaveLinesDesktop2.svg"
                                alt="Background Image"
                                loading="lazy"
                            />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.3}
                            factorY={0.3}
                            className="absolute top-0 left-0 right-0 w-full h-full"
                        >
                            <img
                                src="/backgrounds/WaveHomeHero.svg"
                                alt="Background Image"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>

                {/* For small devices */}
                <div className="lg:hidden -mt-[14%] home-hero-container -z-10 relative overflow-hidden">
                    <figure>
                        <img
                            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg"
                            alt="Home hero image"
                            className="w-full h-full object-cover scale-150"
                        />
                    </figure>
                </div>
            </section>

            {/* POWERING THE FUTURE OF FINANCE */}
            <section className="container max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-base md:text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                        POWERING THE FUTURE OF FINANCE
                    </h2>
                    <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-10 md:mb-5 md:leading-tight">
                        Uncovering new ways to delight customers
                    </h3>

                    <div className="flex  md:hidden justify-center py-5">
                        <div className="relative flex justify-center items-start h-fit w-[75%] mb-10">
                            {/* Background Image */}
                            <div className="absolute -top-20 left-0 right-0 -z-10 animate-[float_8s_ease-in-out_infinite]">
                                <img
                                    src="/powerOfFinance/background.svg"
                                    alt="Background Image"
                                    loading="lazy"
                                />
                            </div>

                            {/* Foreground Image */}
                            <div className="absolute -bottom-[5%] -right-5 z-10 animate-[float_8s_ease-in-out_infinite]">
                                <img
                                    src="/powerOfFinance/foreground.png"
                                    alt="Background Image"
                                    loading="lazy"
                                />
                            </div>

                            {/* Main Image */}
                            <figure className="relative w-[80%]">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124"
                                    alt="Image"
                                    className="h-auto object-cover"
                                    loading="lazy"
                                />
                                <figcaption className="sr-only">
                                    Figure Image of Power the Future of Finance
                                    Section
                                </figcaption>
                            </figure>

                            {/* Floating Icons */}
                            <div className="absolute top-[10%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] animate-[float_3s_ease-in-out_infinite]">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
                                    alt="Icon"
                                    className="w-full"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute top-[30%] left-[20%] w-[min(87px,_20%)] animate-[float_3s_ease-in-out_infinite] delay-2">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg"
                                    alt="Icon"
                                    className="w-full"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] animate-[float_3s_ease-in-out_infinite] delay-1">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
                                    alt="Icon"
                                    className="w-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <strong className="block mb-4 text-[#164377] text-base">
                            AnyTech is revolutionizing financial technology by
                            introducing innovative and real-time transaction
                            account processing capabilities, specifically
                            designed for retail financial services.
                        </strong>
                        <p className="text-[#164377]">
                            Our modern approach surpasses traditional banking
                            and card processing systems, empowering you with the
                            most advanced technology for lasting success.
                        </p>
                    </div>
                </div>

                <div className="relative hidden md:flex justify-center items-start h-fit">
                    {/* Background Image */}
                    <div className="absolute -top-14 left-0 right-0 -z-10 animate-[float_8s_ease-in-out_infinite]">
                        <img
                            src="/powerOfFinance/background.svg"
                            alt="Background Image"
                            loading="lazy"
                        />
                    </div>

                    {/* Foreground Image */}
                    <div className="absolute -bottom-12 -right-5 z-10 animate-[float_8s_ease-in-out_infinite]">
                        <img
                            src="/powerOfFinance/foreground.png"
                            alt="Background Image"
                            loading="lazy"
                        />
                    </div>

                    {/* Main Image */}
                    <figure className="relative w-[75%]">
                        <img
                            src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124"
                            alt="Image"
                            className="h-auto object-cover"
                            loading="lazy"
                        />
                        <figcaption className="sr-only">
                            Figure Image of Power the Future of Finance Section
                        </figcaption>
                    </figure>

                    {/* Floating Icons */}
                    <div className="absolute top-[10%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] animate-[float_3s_ease-in-out_infinite]">
                        <img
                            src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
                            alt="Icon"
                            className="w-full"
                            loading="lazy"
                        />
                    </div>

                    <div className="absolute top-[30%] left-[20%] w-[min(87px,_20%)] animate-[float_3s_ease-in-out_infinite] delay-2">
                        <img
                            src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg"
                            alt="Icon"
                            className="w-full"
                            loading="lazy"
                        />
                    </div>

                    <div className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] animate-[float_3s_ease-in-out_infinite] delay-1">
                        <img
                            src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
                            alt="Icon"
                            className="w-full"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            {/* Section Bottom / Divider */}
            <div className="max-h-[240px] my-16 md:my-6 w-full min-h-[60px]">
                <img
                    src={SectionBottom.src}
                    alt="Section Bottom"
                    className="w-full"
                />
            </div>

            {/* Our Philosophy */}
            <section className="container max-width mx-auto md:mb-32">
                <h2 className="text-lg text-center text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                    Our Philosophy
                </h2>
                <h3 className="whitespace-pre-line font-montserrat text-center text-[#0b305b] text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">
                    Human-centred innovation
                </h3>

                <div className="mb-6">
                    <img
                        src={OurPhilosophyLarge.src}
                        alt="Our Philosophy"
                        className="hidden md:block"
                        loading="lazy"
                    />
                    <img
                        src={OurPhilosophySmall.src}
                        alt="Our Philosophy"
                        className="md:hidden"
                        loading="lazy"
                    />
                </div>

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                        className="bg-[#f8fcff] p-6 md:p-8 rounded-[20px]"
                    >
                        <p className="mb-6 bg-[#e9f3ff] rounded-full p-2 lg:p-2.5 w-fit text-xl lg:text-2xl">
                            <PiShareNetworkFill />
                        </p>
                        <h4 className="font-montserrat text-[#0b305b] text-lg lg:text-2xl font-semibold mb-5">
                            Full-suite solutions
                        </h4>
                        <p className="text-[#0b305b]">
                            Experience the ease of integration across various
                            banking and payment functions with our comprehensive
                            suite of solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className="bg-[#f8fcff] p-6 md:p-8 rounded-[20px]"
                    >
                        <p className="mb-6 bg-[#d6f8f8] rounded-full p-2 lg:p-3 w-fit text-xl">
                            <FaLightbulb />
                        </p>
                        <h4 className="font-montserrat text-[#0b305b] text-lg lg:text-2xl font-semibold mb-5">
                            Simplify the complex
                        </h4>
                        <p className="text-[#0b305b]">
                            Simplify complex processes and optimize your
                            financial operations by leveraging the power of AI,
                            Blockchain, Cloud Computing, and Big Data.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.4,
                        }}
                        className="bg-[#f8fcff] p-6 md:p-8 rounded-[20px]"
                    >
                        <p className="mb-6 bg-[#ffe1d5] rounded-full p-2 lg:p-3 w-fit text-xl">
                            <FaMicrochip />
                        </p>
                        <h4 className="font-montserrat text-[#0b305b] text-lg lg:text-2xl font-semibold mb-5">
                            Cutting-edge tech
                        </h4>
                        <p className="text-[#0b305b]">
                            We seamlessly combine cutting-edge technologies,
                            resulting in an unparalleled fin tech experience for
                            financial institutions.
                        </p>
                    </motion.div>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.5}
                    className="md:!hidden cursor-pointer"
                >
                    <SwiperSlide className="bg-[#f8fcff] p-6 rounded-[20px] !h-auto">
                        <p className="mb-6 bg-[#e9f3ff] rounded-full p-2 lg:p-2.5 w-fit text-xl lg:text-2xl">
                            <PiShareNetworkFill />
                        </p>
                        <h4 className="font-montserrat text-[#0b305b] text-lg lg:text-2xl font-semibold mb-5">
                            Full-suite solutions
                        </h4>
                        <p className="text-[#0b305b] text-sm">
                            Experience the ease of integration across various
                            banking and payment functions with our comprehensive
                            suite of solutions.
                        </p>
                    </SwiperSlide>

                    <SwiperSlide className="bg-[#f8fcff] p-6 rounded-[20px] !h-auto">
                        <p className="mb-6 bg-[#d6f8f8] rounded-full p-2 lg:p-3 w-fit text-xl">
                            <FaLightbulb />
                        </p>
                        <h4 className="font-montserrat text-[#0b305b] text-lg lg:text-2xl font-semibold mb-5">
                            Simplify the complex
                        </h4>
                        <p className="text-[#0b305b] text-sm">
                            Simplify complex processes and optimize your
                            financial operations by leveraging the power of AI,
                            Blockchain, Cloud Computing, and Big Data.
                        </p>
                    </SwiperSlide>

                    <SwiperSlide className="bg-[#f8fcff] p-6 rounded-[20px] !h-auto">
                        <p className="mb-6 bg-[#ffe1d5] rounded-full p-2 lg:p-3 w-fit text-xl">
                            <FaMicrochip />
                        </p>
                        <h4 className="font-montserrat text-[#0b305b] text-lg lg:text-2xl font-semibold mb-5">
                            Cutting-edge tech
                        </h4>
                        <p className="text-[#0b305b] text-sm">
                            We seamlessly combine cutting-edge technologies,
                            resulting in an unparalleled fin tech experience for
                            financial institutions.
                        </p>
                    </SwiperSlide>
                </Swiper>
            </section>
            {/* Section Bottom / Divider */}
            <div className="md:hidden max-h-[240px] my-16 md:my-6 w-full min-h-[60px]">
                <img
                    src={SectionBottom.src}
                    alt="Section Bottom"
                    className="w-full"
                    loading="lazy"
                />
            </div>

            {/* Technology built for you */}
            <section className="container max-width mx-auto overflow-hidden">
                <h2 className="text-lg text-center text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                    Technology built for you
                </h2>
                <h3 className="whitespace-pre-line font-montserrat text-center text-[#0b305b] text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">
                    The future of finance
                </h3>

                {/* Swiper Controllers */}
                <div className="hidden sm:flex justify-evenly gap-3 flex-wrap mb-8 [&_.active]:bg-[#b9d9ff]">
                    <button
                        className={`font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer ${
                            futureOfFinanceSwiperIndex === 0 ? "active" : ""
                        }`}
                        onClick={() =>
                            futureOfFinanceSwiperRef.current?.slideTo(0)
                        }
                    >
                        Customer Focused
                    </button>
                    <button
                        className={`font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer ${
                            futureOfFinanceSwiperIndex === 1 ? "active" : ""
                        }`}
                        onClick={() =>
                            futureOfFinanceSwiperRef.current?.slideTo(1)
                        }
                    >
                        Agile and Adaptable
                    </button>
                    <button
                        className={`font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer ${
                            futureOfFinanceSwiperIndex === 2 ? "active" : ""
                        }`}
                        onClick={() =>
                            futureOfFinanceSwiperRef.current?.slideTo(2)
                        }
                    >
                        Compliance Ready
                    </button>
                    <button
                        className={`font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer ${
                            futureOfFinanceSwiperIndex === 3 ? "active" : ""
                        }`}
                        onClick={() =>
                            futureOfFinanceSwiperRef.current?.slideTo(3)
                        }
                    >
                        Secure and Safe
                    </button>
                </div>

                <Swiper
                    onSwiper={(swiper) =>
                        (futureOfFinanceSwiperRef.current = swiper)
                    }
                    onSlideChange={(swiper) =>
                        setFutureOfFinanceSwiperIndex(swiper.activeIndex)
                    }
                    spaceBetween={40}
                    slidesPerView={1}
                    className="flex transition-all duration-300 ease-in-out !overflow-visible !pb-15"
                >
                    {/* Item 01*/}
                    <SwiperSlide className="!h-auto">
                        <article className="h-full grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-[32px] lg:p-[64px] shadow-2xl rounded-3xl p-[24px] lg:h-[550px] bg-white">
                            <div>
                                <h2 className="text-base lg:text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Customer Focused
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl lg:text-5xl font-semibold mb-5">
                                    Purpose-built financial services
                                </h3>

                                <strong className="block mb-4 text-[#164377] text-base">
                                    Elevate customer experience and achieve
                                    agile financial product innovation with the
                                    world’s first, consumer-centric, real-time
                                    transaction account processing and credit
                                    limit system.
                                </strong>
                                <p className="text-[#164377]">
                                    Experience the advantages of integrated
                                    retail financial services technology,
                                    real-time analysis of transactional behavior
                                    and product marketing opportunities.
                                </p>
                            </div>
                            <div className="lg:h-[425px] rounded-3xl overflow-hidden">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
                                    alt="Image"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Item 02*/}
                    <SwiperSlide className="!h-auto">
                        <article className="h-full grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-[32px] lg:p-[64px] shadow-2xl rounded-3xl p-[24px] lg:h-[550px] bg-white">
                            <div>
                                <h2 className="text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Agile and adaptable
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl lg:text-5xl font-semibold mb-5">
                                    Agile and adaptable for growth
                                </h3>

                                <strong className="block mb-4 text-[#164377] text-base">
                                    Innovate with evolving customer demands
                                    through our open platform-based technology
                                    architecture. Stay ahead of the
                                    ever-changing financial landscape with a
                                    strong focus on security, compliance and
                                    performance.
                                </strong>
                                <p className="text-[#164377]">
                                    Optimise your offerings to unlock new
                                    revenue streams and deliver an extraordinary
                                    customer experience, with digitally designed
                                    core banking, payment processing and lending
                                    capabilities.
                                </p>
                            </div>
                            <div className="lg:h-[425px] rounded-3xl overflow-hidden">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg"
                                    alt="Image"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Item 03 */}
                    <SwiperSlide className="!h-auto">
                        <article className="h-full grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-[32px] lg:p-[64px] shadow-2xl rounded-3xl p-[24px] lg:h-[550px] bg-white">
                            <div>
                                <h2 className="text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Compliance ready
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl lg:text-5xl font-semibold mb-5">
                                    Manage compliance with ease
                                </h3>

                                <strong className="block mb-4 text-[#164377] text-base">
                                    Navigate through the evolving regulatory
                                    landscape with confidence by streamlining
                                    compliance management—through real-time risk
                                    monitoring solutions powered by AI and
                                    machine learning.
                                </strong>
                                <p className="text-[#164377]">
                                    Transform your compliance strategy with
                                    flexible and diversified policy rules,
                                    powered by cutting-edge technology that is
                                    designed for seamless integration with core
                                    banking and card payment systems.
                                </p>
                            </div>
                            <div className="lg:h-[425px] rounded-3xl overflow-hidden">
                                <img
                                    src="https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png"
                                    alt="Image"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Item 04*/}
                    <SwiperSlide className="!h-auto">
                        <article className="h-full grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-[32px] lg:p-[64px] shadow-2xl rounded-3xl p-[24px] lg:h-[550px] bg-white">
                            <div>
                                <h2 className="text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Secure and safe
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl lg:text-5xl font-semibold mb-5">
                                    Highly secure and safe
                                </h3>

                                <strong className="block mb-4 text-[#164377] text-base">
                                    Discover unparalleled security trusted by
                                    financial institutions across the globe. Our
                                    applications are meticulously developed in
                                    compliance with international security
                                    standards, drawing on 20 years of technical
                                    expertise.
                                </strong>
                                <p className="text-[#164377]">
                                    Join over 40 esteemed Fls, each serving more
                                    than 200 million customers, and benefit from
                                    our secure, robust and reliable
                                    infrastructure.
                                </p>
                            </div>
                            <div className="lg:h-[425px] rounded-3xl overflow-hidden">
                                <img
                                    src=" https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                                    alt=""
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </section>
            {/* Section Bottom / Divider */}
            <div className="max-h-[240px] my-16 md:my-6 w-full min-h-[60px]">
                <img
                    src={SectionBottom.src}
                    alt="Section Bottom"
                    className="w-full"
                    loading="lazy"
                />
            </div>

            {/* Trusted by the best */}
            <section>
                <div className="container max-width mx-auto">
                    <h2 className="text-lg text-center text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-8">
                        Trusted by the best
                    </h2>
                    <div
                        className="flex flex-col lg:flex-row justify-between xl:px-20 mb-10 md:mb-14 lg:mb-28"
                        ref={trustedByBestSectRef}
                    >
                        <div className="flex items-center justify-between lg:flex-col py-6 border-b lg:border-none border-dashed border-[#b9d9ff]">
                            <h4 className="flex gap-1 text-4xl sm:text-6xl lg:text-[96px] font-montserrat tracking-wide font-semibold leading-none text-[#0057BB]/95">
                                &gt;
                                {trustedByBestSectInView ? (
                                    <CountUp end={20} />
                                ) : (
                                    0
                                )}
                            </h4>
                            <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
                                Years of Experience
                            </p>
                        </div>
                        <div className="flex items-center justify-between lg:flex-col py-6 border-b lg:border-none border-dashed border-[#b9d9ff]">
                            <h4 className="flex gap-1 text-4xl sm:text-6xl lg:text-[96px] font-montserrat tracking-wide font-semibold leading-none text-[#0057BB]/95">
                                {trustedByBestSectInView ? (
                                    <CountUp end={40} />
                                ) : (
                                    0
                                )}
                                +
                            </h4>
                            <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
                                Financial Institutions
                            </p>
                        </div>
                        <div className="flex items-center justify-between lg:flex-col py-6 border-b lg:border-none border-dashed border-[#b9d9ff]">
                            <h4 className="flex gap-1 text-4xl sm:text-6xl lg:text-[96px] font-montserrat tracking-wide font-semibold leading-none text-[#0057BB]/95">
                                &gt;
                                {trustedByBestSectInView ? (
                                    <CountUp end={200} />
                                ) : (
                                    0
                                )}
                                m
                            </h4>
                            <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
                                Customers Each
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-3 gap-x-16 gap-y-[34px] lg:grid-cols-5">
                        {[
                            "/partners/1.png",
                            "/partners/2.png",
                            "/partners/3.png",
                            "/partners/4.png",
                            "/partners/5.png",
                            "/partners/6.png",
                            "/partners/7.png",
                            "/partners/8.png",
                            "/partners/9.png",
                            "/partners/10.png",
                            "/partners/11.png",
                            "/partners/12.png",
                            "/partners/13.png",
                            "/partners/14.png",
                            "/partners/15.png",
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex h-full w-full items-center justify-center"
                            >
                                <img
                                    src={item}
                                    alt="Partner"
                                    className="flex items-stretch bg-cover object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    className="md:!hidden"
                >
                    {[
                        "/partners/1.png",
                        "/partners/3.png",
                        "/partners/4.png",
                        "/partners/5.png",
                        "/partners/6.png",
                        "/partners/7.png",
                        "/partners/8.png",
                        "/partners/9.png",
                        "/partners/10.png",
                        "/partners/11.png",
                        "/partners/12.png",
                        "/partners/13.png",
                        "/partners/14.png",
                        "/partners/2.png",
                        "/partners/15.png",
                    ].map((item, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="!flex !h-auto items-center justify-center w-40"
                        >
                            <img
                                src={item}
                                alt="Partner"
                                className="flex items-stretch bg-cover object-contain"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default Home;
