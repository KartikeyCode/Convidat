"use client"
import Image from "next/image"
import logo from "@/public/logo.png"
import { useState } from "react";

export default function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="h-24 sticky z-40 flex justify-between py-4 items-center top-0 px-4 md:px-14 bg-white">
            <div className="logo">
                <Image src={logo} className="" alt="logo"/>
            </div>
            <div className="links md:gap-16 gap-8 items-center hidden md:flex">
                <a className="text-black text-lg md:text-xl font-Inter"> ABOUT </a>
                <a className="text-black text-lg md:text-xl font-Inter"> LOCATIONS </a>
                <a className="text-black text-lg md:text-xl font-Inter"> WORKSPACES </a>
                <button className="rounded-sm border-2 border-[#F66E1A] text-[#F66E1A] font-Inter w-32 h-12"> BOOK A SEAT </button>
            </div>
            {/* Button visible only on mobile */}
            <button onClick={toggleDropdown} className="md:hidden rounded-sm border-2 border-[#F66E1A] text-[#F66E1A] font-Inter w-32 h-12">MENU</button>
            {/* Dropdown modal visible only on mobile when button is clicked */}
            {dropdownVisible && (
                <div className="md:hidden z-40 fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-md">
                    <div className="absolute top-0 right-0 m-4">
                        <button onClick={toggleDropdown} className="text-[#F66E1A] text-4xl">&times;</button>
                    </div>
                    <div className="flex flex-col gap-10 items-center">
                        <a className="text-[#F66E1A] text-lg md:text-xl font-Inter"> ABOUT </a>
                        <a className="text-[#F66E1A] text-lg md:text-xl font-Inter"> LOCATIONS </a>
                        <a className="text-[#F66E1A] text-lg md:text-xl font-Inter"> WORKSPACES </a>
                    </div>
                </div>
            )}
        </div>
    )
}
