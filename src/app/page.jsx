"use client";

import { useRef } from "react";
import CountUp from "react-countup";

/**
 https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?auto=format
 https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?auto=format
 https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?auto=format
 */

const Home = () => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);
    const box4Ref = useRef(null);

    const scrollToBox = (box) => {
        box.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    return (
        <div className="space-y-20">
            {/* Technology built for you */}
            <section className="container max-width mx-auto">
                <h2 className="text-lg text-center text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                    Technology built for you
                </h2>
                <h3 className="whitespace-pre-line font-montserrat text-center text-[#0b305b] text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">
                    The future of finance
                </h3>

                <div className="flex justify-evenly gap-3 flex-wrap mb-8">
                    <button
                        className="font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer"
                        onClick={() => scrollToBox(box1Ref)}
                    >
                        Customer Focused
                    </button>
                    <button
                        className="font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer"
                        onClick={() => scrollToBox(box2Ref)}
                    >
                        Agile and Adaptable
                    </button>
                    <button
                        className="font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer"
                        onClick={() => scrollToBox(box3Ref)}
                    >
                        Compliance Ready
                    </button>
                    <button
                        className="font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 undefined text-[#1f80f0] hover:bg-[#F5FAFF] text-lg cursor-pointer"
                        onClick={() => scrollToBox(box4Ref)}
                    >
                        Secure and Safe
                    </button>
                </div>

                <div className="relative w-full overflow-x-scroll shadow-2xl rounded-3xl no-scrollbar">
                    <div className="flex w-[400%] transition-all duration-300 ease-in-out *:w-full">
                        {/* Item 01*/}
                        <div
                            className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[32px] lg:p-[64px] rounded-3xl mb-5 p-[24px] lg:h-[550px] bg-white"
                            ref={box1Ref}
                        >
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
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src=" https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                                    alt=""
                                    className="lg:h-[425px] w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Item 02*/}
                        <div
                            className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-3xl mb-5 p-[24px] lg:h-[550px] bg-white"
                            ref={box2Ref}
                        >
                            <div>
                                <h2 className="text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Agile and adaptable
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold mb-5">
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
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src=" https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                                    alt=""
                                    className="lg:h-[425px] w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Item 03 */}
                        <div
                            className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-3xl mb-5 p-[24px] lg:h-[550px] bg-white"
                            ref={box3Ref}
                        >
                            <div>
                                <h2 className="text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Compliance ready
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold mb-5">
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
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src=" https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                                    alt=""
                                    className="lg:h-[425px] w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Item 04*/}
                        <div
                            className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-3xl mb-5 p-[24px] lg:h-[550px] bg-white"
                            ref={box4Ref}
                        >
                            <div>
                                <h2 className="text-lg text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-5">
                                    Secure and safe
                                </h2>
                                <h3 className="whitespace-pre-line font-montserrat text-[#0b305b] text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold mb-5">
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
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src=" https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                                    alt=""
                                    className="lg:h-[425px] w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted by the best */}
            <section className="container max-width mx-auto">
                <h2 className="text-lg text-center text-[#1f80f0] uppercase font-montserrat font-bold tracking-wider mb-8">
                    Trusted by the best
                </h2>
                <div className="flex flex-col lg:flex-row justify-between xl:px-20 mb-10 md:mb-14 lg:mb-28">
                    <div className="flex items-center justify-between lg:flex-col py-6 border-b lg:border-none border-dashed border-[#b9d9ff]">
                        <h4 className="flex gap-1 text-4xl sm:text-6xl lg:text-[96px] font-montserrat tracking-wide font-semibold leading-none text-[#0057BB]/95">
                            &gt;
                            <CountUp end={20} />
                        </h4>
                        <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
                            Years of Experience
                        </p>
                    </div>
                    <div className="flex items-center justify-between lg:flex-col py-6 border-b lg:border-none border-dashed border-[#b9d9ff]">
                        <h4 className="flex gap-1 text-4xl sm:text-6xl lg:text-[96px] font-montserrat tracking-wide font-semibold leading-none text-[#0057BB]/95">
                            <CountUp end={40} />+
                        </h4>
                        <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
                            Financial Institutions
                        </p>
                    </div>
                    <div className="flex items-center justify-between lg:flex-col py-6 border-b lg:border-none border-dashed border-[#b9d9ff]">
                        <h4 className="flex gap-1 text-4xl sm:text-6xl lg:text-[96px] font-montserrat tracking-wide font-semibold leading-none text-[#0057BB]/95">
                            &gt;
                            <CountUp end={200} />m
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
                                className="flex items-stretch bg-cover object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="md:hidden overflow-x-scroll slider-container">
                    <div className="flex gap-4 w-max">
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
                            <img
                                key={idx}
                                src={item}
                                className="flex items-stretch bg-cover object-contain w-20"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
