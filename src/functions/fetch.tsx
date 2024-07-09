import { bebas } from "../app/fonts";

async function getData(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Data(url: string) {
  const data = await getData(url);

  return data?.map((user: any) => (
    <ul key={user.id}>
      <li className={`text-5xl ${bebas.className}`}>{user.name}</li>
      <p className="bg-red-500">{user.email}</p>
    </ul>
  ));
}
