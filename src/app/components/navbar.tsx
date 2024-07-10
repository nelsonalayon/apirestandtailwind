"use client"

import Link from "next/link";
import {  FaSearch, FaUser, FaMoon } from "react-icons/fa";
import darkMode from "@/functions/darkMode";

const navbarItems = [
  { title: "Home", link: "#home" },
  { title: "Recomended", link: "#recommended" },
  { title: "featured income", link: "#featured income" },
  { title: "FAQS", link: "#faqs" },
  { title: "about us", link: "#" },
];

export default function Navbar() {
  return (
    <div className="justify-between items-center p-8 w-full bg-white h-14 hidden fixed z-10 lg:flex dark:bg-gray-800">
      <div>
        <p className="text-xl text-primary dark:text-white">Platzi travel</p>
      </div>
      <nav className="flex justify-around w-full">
        {navbarItems.map((item) => (
          <Link key={item.title} href={item.link} className="text-primary dark:text-white">
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex space-x-4 ">
        <Link rel="stylesheet" href="#recommended" id="">
          <FaSearch className="w-6 h-6 fill-current text-primary" />
        </Link>

        <button rel="stylesheet" id="" onClick={darkMode}>
          <FaMoon className="w-6 h-6 fill-current text-gray-200" />
        </button>

        <Link rel="stylesheet" href="#faqs" id="">
          <FaUser className="w-6 h-6 fill-current text-gray-200" />
        </Link>
      </div>
    </div>
  );
}
