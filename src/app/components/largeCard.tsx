
export default function LargeCard(props: any) {
  return (
    <div className={`w-full h-96 rounded-xl ${props.image} bg-cover`} >
        <p className="CardTitle">{props.title}</p>
        <p className="text-sm pl-8 text-white mr-24">{props.description}</p>    
    </div>
  );
} 