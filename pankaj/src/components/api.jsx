import { useEffect, useState } from "react"

function Call() {
  const [data, setData] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      }
    }

    fetchData();
    console.log("Component mounted");
  }, [])


  return (
    <div>
      <h1>Hello</h1>
      
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>UserName</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Zipcode</th>
          </tr>
        </thead>

        <tbody>
        {data.map((itm, idx) => (
          <tr key={idx}>
            <td>{itm.id}</td>
            <td>{itm.username}</td>
            <td>{itm.name}</td>
            <td>{itm.email}</td>
            <td>{itm.phone}</td>
            <td>{itm.address.zipcode}</td>
          </tr>
      ))}
        </tbody>
      </table>
      

    </div>


  )
}
export default Call;