"use client"

import Link from "next/link";
import { FaHeart, FaHome, FaMoon, FaSearch, FaUser } from "react-icons/fa";

import darkMode from "@/functions/darkMode";


export default function TabBar() {
  return (
    <div
          id="tab_bar"
          className=" bg-slate-200 bg-opacity-80 p-4 w-full h-aut fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden dark:bg-slate-400"
        >
         
            <Link rel="stylesheet" href="#home" id="">
              <FaHome className="tabBarButtons " />{" "}
            </Link>

            <Link rel="stylesheet" href="#recommended" id="" >
              <FaSearch className="tabBarButtons" />
            </Link>

            <Link rel="stylesheet" href="#featured income" id="">
              <FaHeart className="tabBarButtons" />
            </Link>
            
            <Link rel="stylesheet" href="#faqs" id="">
            <FaUser className="tabBarButtons" />
            </Link>
            <button rel="stylesheet" id="" onClick={darkMode}>
            <FaMoon className="tabBarButtons" />
            </button>
         
        </div>
  );
}