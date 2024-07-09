
export default function LargeCard(props: any) {
  return (
    <div className={`w-full rounded-xl ${props.image} bg-cover ${props.style} h-96 bg-center  xl:h-auto  `} >
        <p className="CardTitle">{props.title}</p>
        <p className="text-sm pl-8 text-white mr-24 lg:text-lg">{props.description}</p>    
    </div>
  );
} 