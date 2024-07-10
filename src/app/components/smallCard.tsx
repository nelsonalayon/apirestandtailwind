import Image from "next/image";
import clsx from "clsx";

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
        <div
          className={clsx("w-full h-2/5 p-4 rounded-b-lg", {
            "bg-secondary dark:bg-gray-700": props.color === true,
            "bg-white dark:bg-gray-300": props.color !== true,
          })}
        >
          <p
            className={clsx({
              "text-white dark:text-white text-bold text-lg":
                props.color === true,
              "text-secondary dark:text-white text-bold text-lg":
                props.color !== true,
            })}
          >
            {props.name}
          </p>
          <p
            className={clsx("text-md",{
              "text-white dark:text-white": props.color === true,
              "text-secondary dark:text-white": props.color !== true,
            })}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>

    //     <img className="w-full" src={`https://robohash.org/${props.id}?set=set2`} alt="robots" />
  );
}
