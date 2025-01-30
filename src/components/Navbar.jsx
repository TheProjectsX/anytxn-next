"use client";

import { IoIosArrowForward } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useScrollProgress from "@/hooks/useScrollingUp";

import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
    const { scrollingUp, scrollPercentage } = useScrollProgress();
    const [menuOpened, setMenuOpened] = useState(false);

    const [menuSolutionsOpened, setMenuSolutionsOpened] = useState(false);
    const [menuLanguagesOpened, setMenuLanguagesOpened] = useState(false);

    return (
        <>
            <header
                className={`hidden lg:flex z-[999] fixed w-full justify-center transition-all duration-300 ease-in-out ${
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
                                <FaGlobe />{" "}
                                <span className="text-base">EN</span>{" "}
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

            <header className="lg:hidden">
                <div className="bg-[#2e8bf5] flex justify-center">
                    <div className="container px-10 py-7 flex items-center justify-between">
                        <img
                            src="/logo.svg"
                            alt="AnyTech Logo"
                            className="w-[134px] h-auto lg:w-[170px]"
                        />
                        <button
                            className="text-white text-3xl cursor-pointer"
                            onClick={() => setMenuOpened((prev) => !prev)}
                        >
                            {menuOpened ? <RxCross1 /> : <IoIosMenu />}
                        </button>
                    </div>
                </div>

                <nav
                    className={`bg-[#217ef0] text-white p-8 w-full text-sm absolute transition-transform duration-300 ${
                        menuOpened ? "translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <ul className="mb-3">
                        <li
                            className=""
                            onClick={() =>
                                setMenuSolutionsOpened((prev) => !prev)
                            }
                        >
                            <a className="py-3 w-full flex justify-between items-center cursor-pointer">
                                Solutions <IoIosArrowDown />
                            </a>

                            <div
                                className={`ml-8 ${
                                    menuSolutionsOpened ? "block" : "hidden"
                                }`}
                            >
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
                                        href={item.url}
                                        className="py-4 w-full block"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </li>
                        <li>
                            <a href="#" className="py-3 block w-full ">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="py-3 block w-full ">
                                About Us
                            </a>
                        </li>
                    </ul>

                    <div className="mb-10 flex flex-col rounded-3xl border border-[#4699f8] w-fit mx-auto px-4">
                        <button
                            className="uppercase py-2 w-fit flex items-center gap-2 cursor-pointer"
                            onClick={() =>
                                setMenuLanguagesOpened((prev) => !prev)
                            }
                        >
                            <FaGlobe />
                            English
                            <IoIosArrowDown />
                        </button>

                        <div
                            className={`pl-6 mb-2 ${
                                menuLanguagesOpened ? "block" : "hidden"
                            }`}
                        >
                            {[
                                {
                                    label: "English",
                                    url: "/en",
                                },
                                {
                                    label: "Thai",
                                    url: "/th",
                                },
                                {
                                    label: "Bahasa Indonesia",
                                    url: "/id",
                                },
                                {
                                    label: "Traditional Chinese",
                                    url: "/tw",
                                },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.url}
                                    className="uppercase block py-2 "
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 text-base font-semibold border border-white hover:shadow-lg cursor-pointer p-3 rounded-sm">
                        Contact Us <IoIosArrowForward />
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
