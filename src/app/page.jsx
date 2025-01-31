"use client";

import CountUp from "react-countup";

const Home = () => {
    return (
        <div>
            <section className="container max-width mx-auto">
                <div>
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
