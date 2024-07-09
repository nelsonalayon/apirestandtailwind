import Link from "next/link";
import { FaHome, FaSearch, FaHeart, FaUser, FaMoon } from "react-icons/fa";

const navbarItems = [
  { title: "Home", link: "#home" },
  { title: "Recomended", link: "#recommended" },
  { title: "featured income", link: "#featured income" },
  { title: "FAQS", link: "#faqs" },
  { title: "about us", link: "#" },
];

export default function Navbar() {
  return (
    <div className="justify-between items-center p-8 w-full bg-white h-14 hidden fixed z-10 lg:flex">
      <div>
        <p className="text-xl text-primary">Platzi travel</p>
      </div>
      <nav className="flex justify-around w-full">
        {navbarItems.map((item) => (
          <a key={item.title} href={item.link} className="text-primary">
            {item.title}
          </a>
        ))}
      </nav>

      <div className="flex space-x-4 ">
        <Link rel="stylesheet" href="#recommended" id="">
          <FaSearch className="w-6 h-6 fill-current text-primary" />
        </Link>

        <Link rel="stylesheet" href="#faqs" id="">
          <FaMoon className="w-6 h-6 fill-current text-gray-200" />
        </Link>

        <Link rel="stylesheet" href="#faqs" id="">
          <FaUser className="w-6 h-6 fill-current text-gray-200" />
        </Link>
      </div>
    </div>
  );
}
