import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dataEndpoint = "http://localhost:9090/api/v1/users";
export default function Info() {
    const navigate = useNavigate()
    const [data, setData] = useState();
    useEffect(() => {
        async function fetchInfo() {
            try {
                const response = await fetch(dataEndpoint);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    console.log(jsonData);
                }

            } catch (e) {
                console.error(`Error encountered while fetching the quotes ${e}`)
            }

        }
        fetchInfo();
    }, []);
    function handleSubmit(e){
            navigate("/adduser")

    }
    async function deleteUser(id) {
        const response = await fetch(`${dataEndpoint}/${id}`, { method: "DELETE" });
        if (response.ok) {
            setData(data.filter(user => user.id !== id));
        }
        
    };
    return (
        <>
            <h1><u>GET USERS INFO</u></h1>
            <button style={{ marginLeft: "570px", marginBottom: "10px", backgroundColor: "green", width: "150px" }} onClick={handleSubmit}>ADD USER</button>
            <table>
                <thead>
                    <tr>
                        <th>INDEX</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>COUNTRY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {data && (
                        <>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.country}</td>
                                    <td>{item.action}
                                     <button>UPDATE</button>
                                     <button onClick={()=> deleteUser(item.id)} style={{marginLeft:"10px"}}>DELETE</button>
                                    </td>

                                </tr>
                            ))}
                        </>
                    )}

                </tbody>
            </table>
        </>
    )
}