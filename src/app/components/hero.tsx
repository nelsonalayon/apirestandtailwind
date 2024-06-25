import Image from "next/image";
import sanFrancisco from "../../../public/img/sanFrancisco.jpg";
import Button from "./button";
import SearchBar from "./searchBar";

export default function Hero() {
  return (
    <header className="bg-tertiary">
      <div className="w-full h-full relative">
        <Image src={sanFrancisco} alt="Hero Image" />
        <div className="w-full h-full flex flex-col absolute top-20">
          <SearchBar />
          <Button />
        </div>{" "}
      </div>
    </header>
  );
} // End of Hero component
