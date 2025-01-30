"use client";

import { IoIosArrowForward } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useScrollProgress from "@/hooks/useScrollingUp";

const Navbar = () => {
    const { scrollingUp, scrollPercentage } = useScrollProgress();

    console.log(scrollingUp, scrollPercentage);

    return (
        <header
            className={`z-[999] fixed w-full flex justify-center transition-all duration-300 ease-in-out ${
                scrollingUp ? "top-0" : "-top-25"
            } ${
                scrollPercentage > 10
                    ? "bg-white text-[dodgerBlue] shadow-xl"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="container px-10 flex items-center justify-between gap-5 pt-5 pb-6 font-inter">
                <a href="/">
                    <img
                        src={
                            scrollPercentage > 10
                                ? "/logo_blue.svg"
                                : "/logo.svg"
                        }
                        alt="AnyTech Logo"
                        className="w-[134px] h-auto lg:w-[170px]"
                    />
                </a>

                <nav className="flex gap-5 text-base items-center">
                    <ul className="flex items-center">
                        <li className="relative group">
                            <a
                                href="#"
                                className="px-6 py-3 border-b border-transparent transition-colors flex items-center gap-2"
                            >
                                Solutions{" "}
                                <IoIosArrowDown className="group-hover:-rotate-180 transition-[rotate] duration-[400ms]" />
                            </a>

                            <div className="absolute top-9 bg-white text-[#0b305b] rounded-sm min-w-40 hidden group-hover:block">
                                {[
                                    {
                                        label: "AnyCaaS",
                                        url: "./solutions/anycaas",
                                    },
                                    {
                                        label: "AnyBaaS",
                                        url: "./solutions/anybaas",
                                    },
                                    {
                                        label: "AnySaaS",
                                        url: "./solutions/anysaas",
                                    },
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        className="block px-5 py-2.5 border-b border-[#e5e7eb] last-of-type:border-none w-full hover:text-[dodgerBlue] transition-colors"
                                        href={item.url}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`px-6 py-3 border-b border-transparent transition-colors ${
                                    scrollPercentage > 10
                                        ? "hover:border-[dodgerBlue]"
                                        : "hover:border-white"
                                }`}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`px-6 py-3 border-b border-transparent transition-colors ${
                                    scrollPercentage > 10
                                        ? "hover:border-[dodgerBlue]"
                                        : "hover:border-white"
                                }`}
                            >
                                About Us
                            </a>
                        </li>
                    </ul>

                    <div className="relative group">
                        <button
                            className={`rounded-3xl px-3.5 py-2 border flex items-center gap-2 cursor-pointer text-sm ${
                                scrollPercentage > 10
                                    ? "border-[dodgerBlue]"
                                    : "border-white"
                            }`}
                        >
                            <FaGlobe /> <span className="text-base">EN</span>{" "}
                            <IoIosArrowDown className="group-hover:-rotate-180 transition-[rotate] duration-[400ms]" />
                        </button>

                        <div className="absolute top-[42px] bg-white text-[#0b305b] rounded-sm min-w-40 hidden group-hover:block">
                            {[
                                {
                                    label: "EN (English)",
                                    url: "/en",
                                },
                                {
                                    label: "TH (Thai)",
                                    url: "/th",
                                },
                                {
                                    label: "ID (Bahasa Indonesia)",
                                    url: "/id",
                                },
                                {
                                    label: "TW (Traditional Chinese)",
                                    url: "/tw",
                                },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    className="block px-5 py-2.5 border-b border-[#e5e7eb] last-of-type:border-none w-full hover:text-[dodgerBlue] transition-colors whitespace-nowrap"
                                    href={item.url}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                <button
                    className={`flex items-center gap-3 px-6 py-3 border border-white font-semibold rounded-sm cursor-pointer text-lg transition-colors ${
                        scrollPercentage > 10
                            ? "bg-[#fe8b54] border-none text-white shadow hover:shadow-lg"
                            : "bg-transparent hover:bg-white hover:text-[dodgerBlue]"
                    }`}
                >
                    Contact Us <IoIosArrowForward />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
