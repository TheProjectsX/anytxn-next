import { FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <div>Here is some things before actual footer</div>
            <footer className="">
                <div className="bg-[#002045] border-b border-[#164377] lg:px-14">
                    <div className="container mx-auto flex justify-between py-11">
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
                    <div className="container mx-auto text-[#1f80f0] py-8 flex gap-4 flex-col items-center lg:flex-row lg:justify-between text-xs">
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
