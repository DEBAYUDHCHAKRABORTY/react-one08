import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/";
import { classNames } from "primereact/utils";


const usersEndpoint = "http://localhost:9090/api/v1/users"


export default function ListUsers() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await getAllUsers();
            if (response.status === 200) {
                setData(response.data);
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


    return (
        <>
            <h1 className="text-6xl font-bold text-gray-800 p-4 bg-blue-200 underline font-stretch-%">User Data</h1>


            <div className="page-action card flex justify-content-center float-right">
                <Button icon={<FaPlus />} label="Add Users" onClick={handleAddUserNavigate} />
            </div>


            {data && (

                <div>
                    <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="name" header="Name"></Column>
                        <Column field="age" header="Age"></Column>
                        <Column field="phone" header="Phone no"></Column>
                        <Column field="country" header="Country"></Column>
                        <Column field="action" header="Action">
                            <i className="pi-pen-to-square style= {{fontSize:2rem color: 'var(--primary-color)'}}"></i>
                            <i className="pi-trash style= {{fontSize:2rem color: 'var(--primary-color)' }}"></i>
                        </Column>

                    </DataTable>
                </div >
            )
            }
        </>
    );
}