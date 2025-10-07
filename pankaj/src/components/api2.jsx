import { useEffect, useState } from "react"

export default function Getdata() {
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
        console.log("Component mouthed")
    }, [])

    return (
        <div>
            <h1>Fetch data from api</h1>
            <table>
                <thead>
                    <tr>
                        <th>User Id </th>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address.city}</td>


                        </tr>
                    ))

                    }
                </tbody>


            </table>
        </div>
    )
}