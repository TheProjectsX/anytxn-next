const Home = () => {
    return (
        <div>
            <section className="container mx-auto">
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
