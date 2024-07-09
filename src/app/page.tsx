"use client"
import Hero from "./components/hero";
import Card from "./components/smallCard";
import LargeCard from "./components/largeCard";
import FAQItem from "./components/faqs";

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
import resize from "../functions/screenSize";
import "./globals.css";

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

const dataLagesCards: {
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Chicago",
    description: "2 rooms, bathroom, kitchen",
    image: "bg-chicago",
  },
  {
    title: "New York",
    description: "3 rooms, 2 bathrooms, kitchen",
    image: "bg-newYork",
  },
  {
    title: "Los Angeles",
    description: "2 rooms, bathroom, kitchen",
    image: "bg-la",
  },
  {
    title: "San Francisco",
    description: "4 rooms, 2 bathrooms, kitchen",
    image: "bg-sanFrancisco",
  },
  {
    title: "Miami",
    description: "2 rooms, bathroom, kitchen",
    image: "bg-miami",
  },
  {
    title: "Sydney",
    description: "3 rooms, bathroom, kitchen",
    image: "bg-sydney",
  },
];

const faqs = [
  {
    question: "How can I book a room?",
    answer:
      "You can book a room by clicking on the 'Book Now' button on the homepage.",
  },
  {
    question: "How can I cancel my booking?",
    answer:
      "You can cancel your booking by clicking on the 'Cancel Booking' button on the homepage.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "You can contact customer service by clicking on the 'Contact Us' button on the homepage.",
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
        <div className=" w-auto h-72 items-center flex space-x-4 overflow-x-auto overscroll-x-contain mt-6">
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
      <section id="featured income" className="px-6 h-full w-full">
        <p className="text-3xl text-primary font-semibold p-b-6">
          Featured Income
        </p>
        
        <div className="manualGrid ">
          {dataLagesCards.map((card, index) => {
            let style 
            
            if(resize() > 1280 ) {
                 if (index === 0) {
              style = "item-a";
            } else if (index === 1) {
              style = "item-b";
            } else if (index === 2) {
              style = "item-c";
            } else if (index === 3) {
              style = "item-d";
            } else {
              style = "item-e"
            }

            } else { style = { gridArea: ' ' } } 
         
            return (
              <LargeCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                style={style}
              />
            );
          })}
        </div>
      </section>
      <section id="faqs" className="w-full h-full">
        <div className="w-full h-full flex flex-col p-6 space-y-6">
          <p className="text-3xl text-primary font-semibold mb-6 mt-6">FAQs</p>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>      
    </>
  );
}
