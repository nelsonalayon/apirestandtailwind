
async function getData(url: string) {    
    const res = await fetch(url);
   
    if (!res.ok) {    
      throw new Error("Failed to fetch data");
    }
    
  
    return res.json();
  }
  
  export default async function Data(url: any) {
     const data = await getData(url);
  
    return data?.map((user: any) => (
      <ul key={user.id}>
        <li>{user.name}</li>
        <p>{user.email}</p>        
      </ul>
    ));
  }