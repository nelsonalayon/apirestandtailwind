import Image from "next/image";

export default function Card(props: any) {
  return (
    <div>
      <div className="Card">
        <div className="w-full h-3/5 rounde-t-lg">
          <Image
            src={props.image}          
            alt={props.name}
            className="rounded-t-lg  w-full h-full bg-cover bg-center"
          />
        </div>
        <div className={`w-full h-2/5 ${props.color === true ? "bg-secondary": "bg-white" } p-4 rounded-b-lg`}>
          <p className={`${props.color === true ? "text-white": "text-secondary" } text-bold text-lg`}>{props.name}</p>
          <p className={`${props.color === true ? "text-white": "text-secondary" } text-md`} >{props.description}</p>
        </div>
      </div>
    </div>

    
    //     <img className="w-full" src={`https://robohash.org/${props.id}?set=set2`} alt="robots" />
        
  );
}
