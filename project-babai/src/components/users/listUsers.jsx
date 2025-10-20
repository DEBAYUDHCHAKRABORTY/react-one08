import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import './users.scss'
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const usersEndpoint = "http://localhost:9090/api/v1/users"


export default function ListUsers() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await fetch(usersEndpoint)
            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData)
            }
        } catch (e) {
            console.error(`Error encountered while fetching quotes: ${e}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleDelete(id) {
        console.log("Delete button clicked");
        const response = await fetch(`${usersEndpoint}/${id}`, { method: 'DELETE' })
        if (response.ok) {
            alert("User deleted successfully");
            fetchData();
        }
    }

    function handleEdit(e) {
        console.log("Edit button clicked")
    }

    function handleAddUserNavigate(e) {
        navigate("/users/create")
    }

    // Returning the List Users component
    return (
        <>
            <h1>User Data</h1>
            <div className="page-action">
                <button onClick={handleAddUserNavigate} ><FaPlus />  Add Users</button>
            </div>

            {data && (
                <div>
                    <table className="table">
                        <thead>
                            <tr id="heading">
                                <th>Name</th>
                                <th>Age</th>
                                <th>Ph Number</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((itm, idx) => (
                                <tr key={idx}>
                                    <td>{itm.name}</td>
                                    <td>{itm.age}</td>
                                    <td>{itm.phone}</td>
                                    <td>{itm.city}</td>
                                    <td>
                                        <span className="table-action"><FaPenToSquare onClick={handleEdit} /></span>
                                        <span className="table-action" style={{ color: 'red' }}><FaRegTrashCan onClick={() => handleDelete(itm.id)} /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </>
    );
}