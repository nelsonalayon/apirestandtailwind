import Image from "next/image";
import chicago from "../../../public/img/chicago.jpg";

export default function LargeCard() {
  return (
    <div className="w-full h-96 rounded-xl bg-sanFrancisco" > 
         
        {/* <Image src={chicago} alt="Large Card" className=" "  /> */}
        <p className="">Chicago</p>
        <p className="">2 rooms, bathroom, kitchen</p>    
       
        
      
    </div>
  );
} // End of LargeCard component