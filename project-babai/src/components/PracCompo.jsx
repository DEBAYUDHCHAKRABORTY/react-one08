import { useEffect, useState } from "react"


export default function PracCompo() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

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
        <>
            <h1><u>Data from API</u></h1>
            <table>
                <thead>                 
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Body</th>
                        <th>Title</th>
                        {/* <th>Zipcode</th> */}
                    </tr>
                </thead>

                <tbody>
                    {data.map((itm, idx) => (
                        <tr key={idx}>
                            <td>{itm.id}</td>
                            <td>{itm.body}</td>
                            <td>{itm.title}</td>
                            {/* <td>{item.address.zipcode}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};