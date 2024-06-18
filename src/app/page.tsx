import Image from "next/image";
import Data from "../functions/fetch";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">
        {" "}
        Subscribe{" "}
      </button>

      <button className="bg-blue-500 shadow-lg shadow-blue-500/50 ...">
        {" "}
        Subscribe{" "}
      </button>

      <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">
        {" "}
        Subscribe{" "}
      </button>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <div>
        <div>{Data("https://jsonplaceholder.typicode.com/users")}</div>
      </div>
    </div>
  );
}
