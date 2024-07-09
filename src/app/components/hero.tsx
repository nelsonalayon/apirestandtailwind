import Image from "next/image";
import sanFrancisco from "../../../public/img/sanFrancisco.jpg";
import Button from "./button";
import SearchBar from "./searchBar";

export default function Hero() {
  return (
    <header className="bg-tertiary">
      <div className="w-full  relative bg-sanFrancisco h-[650px] lg:bg-sanfranciscodesktop bg-cover bg-center">
        {/* <Image src={sanFrancisco} alt="Hero Image" className="lg:hidden" /> */}
        <div className="w-full h-full flex flex-col absolute  justify-center items-center space-y-4 lg:items-start space-x-0 pl-10 ">
          <SearchBar />
          <div className="hidden h-auto lg:w-2/3 lg:flex pb-6">
            <p className="text-4xl  font-bold text-white drop-shadow-lg">
              Find more places like this
            </p>
          </div>
          <Button />
        </div>{" "}
      </div>
    </header>
  );
} // End of Hero component
