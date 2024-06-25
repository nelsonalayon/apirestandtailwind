import Image from "next/image";
import Hero from "./components/hero";
import Card from "./components/smallCard";
import LargeCard from "./components/largeCard";

import Seatle from "../../public/img/seattle.jpg";
import Bali from "../../public/img/bali.jpg";
import Chicago from "../../public/img/chicago.jpg";
import Europe from "../../public/img/europe.jpg";
import Iceland from "../../public/img/iceland.jpg";
import La from "../../public/img/la.jpg";
import Miami from "../../public/img/miami.jpg";
import NewYork from "../../public/img/new_york.jpg";
import Norway from "../../public/img/norway.jpg";
import Sanfrancisco from "../../public/img/sanFrancisco.jpg";
import Switzerland from "../../public/img/switzerland.jpg";
import Sydnedy from "../../public/img/sydney.jpg";
import Yosemite from "../../public/img/yosemite.jpg";

// Data is the function that fetches the data from the API
import Data from "../functions/fetch";


const lovelyPlaces = [
  {
    name: "Norway",
    description: "a beautiful landscape",
    image: Norway,
  },
  {
    name: "Seatle",
    description: "a beautiful landscape",
    image: Seatle,
  },
  {
    name: "Bali",
    description: "a beautiful landscape",
    image: Bali,
  },
  {
    name: "Chicago",  
    description: "a beautiful landscape",
    image: Chicago,
  },
  {
    name: "Europe",
    description: "a beautiful landscape",
    image: Europe,
  },
  {
    name: "Iceland",
    description: "a beautiful landscape",
    image: Iceland,
  },
  {
    name: "La",
    description: "a beautiful landscape",
    image: La,
  },
  {
    name: "Miami",
    description: "a beautiful landscape",
    image: Miami,
  },
  {
    name: "NewYork",
    description: "a beautiful landscape",
    image: NewYork,
  },
  {
    name: "Sanfrancisco",
    description: "a beautiful landscape",
    image: Sanfrancisco,
  },
  {
    name: "Switzerland",
    description: "a beautiful landscape",
    image: Switzerland,
  },
  {
    name: "Sydnedy",
    description: "a beautiful landscape",
    image: Sydnedy,
  },
  {
    name: "Yosemite",
    description: "a beautiful landscape",
    image: Yosemite,
  },
];

export default function MyTailwindFetchApp() {
  return (
    <>
      <header id="home" className="bg-tertiary">
        <Hero />
        {/* <div>{Data("https://jsonplaceholder.typicode.com/users")}</div> */}
      </header>      
      <section id="recommended" className="p-20 ">
        <p className="text-3xl font-semibold text-primary">Recommended</p>
        <div className=" w-auto h-72 items-center flex space-x-4 overflow-x-auto overscroll-x-contain mt-6 overflow-y-hidden">
          {lovelyPlaces.map((place, index) => {
            return (
              <Card
                id={index}
                key={place.description}
                color={index % 2 === 0 ? true : false}
                description={place.description}
                name={place.name}
                image={place.image}
              />
            );
          })}
        </div>
      </section>
      <section id="Featured Income" className="px-6 h-full w-full">
        <p className="text-3xl text-primary font-semibold p-b-6">Featured Income</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <LargeCard />
          <LargeCard />
          <LargeCard />
          <LargeCard /> 
        </div>
      </section>
    </>
  );
}
