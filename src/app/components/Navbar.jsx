"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faSearch, faShoppingCart, faUser, faBars, faTimes, faChevronDown
} from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const categories = [
        "Computer",
        "Laptop",
        "Mobile",
        "Processor",
        "Graphics Card",
        "Motherboard",
        "RAM",
        "SSD",
        "Monitor",
        "Printer",
        "Accessories",
        "Networking"

    ];

    return (

        <nav className="bg-techdark border-b border-gray-800 sticky top-0 z-50  ">
            <div className=" container h-20 flex items-center justify-between max-w-375 mx-auto px-2">
                {/* Logo */}
                <div className="  text-3xl font-bold text-orange-500">
                    TechCity
                </div>
                {/* Desktop Menu */}

                <div className=" hidden lg:flex items-center gap-8 ">
                    {/* Mega Menu */}
                    <div
                        className=" relative cursor-pointer "

                        onMouseEnter={() => setMegaOpen(true)}

                        onMouseLeave={() => setMegaOpen(false)}

                    >
                        <div className=" flex items-center gap-2 hover:text-orange-500 ">

                            Categories
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>

                        {
                            megaOpen &&

                            <div

                                className=" absolute top-10 left-0 w-[650px] bg-dark- border border-gray-700 rounded-lg p-6 grid grid-cols-3 gap-4 shadow-xl "

                            >
                                {

                                    categories.map((item, index) => (


                                        <div

                                            key={index}

                                            className=" p-3 rounded text-gray-300 hover:bg-techorange hover:text-white transition "
                                        >
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>

                    {/* PC Builder */}
                    <a

                        href="/pc-builder"

                        className="hover:text-techorange cursor-pointer" >

                        PC Builder

                    </a>
                </div>
                {/* Search */}
                <div
                    className=" hidden md:flex w-[350px] bg-white rounded overflow-hidden "
                >
                    <input
                        type="text"

                        placeholder="Search products..."

                        className=" flex-1 px-4 text-black outline-none "
                    />
                    <button
                        className="bg-techorange px-5 "
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                {/* Right Menu */}
                <div
                    className="hidden lg:flex items-center gap-6 "
                >

                    {/* Login */}
                    <div

                        className=" flex gap-2 items-center cursor-pointer hover:text-techorange "
                    >
                        <FontAwesomeIcon icon={faUser} />
                        Login
                    </div>
                    {/* Cart */}

                    <div
                        className=" relative cursor-pointer hover:text-techorange "
                    >

                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            size="lg"
                        />


                        <span

                            className=" absolute -top-3 -right-3 bg-techorange text-xs rounded-full w-5 h-5 flex items-center justify-center "
                        >
                            0
                        </span>
                    </div>
                </div>

                {/* Mobile Icon */}

                <button
                    className=" lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon
                        icon={menuOpen ? faTimes : faBars}
                        size="lg"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {
                menuOpen &&
                <div
                    className=" lg:hidden p-5 space-y-5 bg-techdark "
                >
                    <div>
                        Categories
                    </div>

                    <div>
                        PC Builder
                    </div>

                    <div>
                        Login
                    </div>

                    <div>
                        Cart
                    </div>

                </div>
            }
        </nav>
    )

}