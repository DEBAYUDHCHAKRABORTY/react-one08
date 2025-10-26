import { useEffect, useState } from "react";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { FaPenToSquare } from "react-icons/fa6";
// import { FaPlus } from "react-icons/fa6";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { deleteUserById, getAllUsers } from "..//services/api";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../components/services/api";


// const usersEndpoint = "http://localhost:9090/api/v1/users"


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

    async function deleteUser(id) {
            const response = await deleteUserById(id);
            if (response.status === 200) {
                setData(data.filter(user => user.id !== id));
            }
        };

    function handleEdit(e) {
        console.log("Edit button clicked")
    }

    function handleAddUserNavigate(e) {
        navigate("/users/create")
    }

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Users</span>

        </div>
    );

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteUser(rowData.id)} />
            </>
        );
    };


    return (

        <>
            <div className="flex items-center justify-center my-8">
                <h1 className="text-6xl text-900 font-bold underline underline-offset-8 ">Users</h1>

            </div>

            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column header="#" body={(rowData, { rowIndex }) => rowIndex + 1} />
                <Column field="name" sortable header="Name"></Column>
                <Column field="age" sortable header="age"></Column>
                <Column field="phone" header="Phone Number"></Column>
                <Column field="email" sortable header="Email"></Column>
                <Column field="country" sortable header="Country"></Column>
                <Column body={actionBodyTemplate} header="Actions"></Column>
            </DataTable>
        </>



        // <>
        //     <h1>User Data</h1>
        //     <div className="page-action">
        //         <button onClick={handleAddUserNavigate} ><FaPlus />  Add Users</button>
        //     </div>

        //     {data && (
        //         <div>
        //             <table className="table" >
        //                 <thead>
        //                     <tr id="heading">
        //                         <th>Name</th>
        //                         <th>Age</th>
        //                         <th>Ph Number</th>
        //                         <th>City</th>
        //                         <th>Action</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {data.map((itm, idx) => (
        //                         <tr key={idx}>
        //                             <td>{itm.name}</td>
        //                             <td>{itm.age}</td>
        //                             <td>{itm.phone}</td>
        //                             <td>{itm.city}</td>
        //                             <td>
        //                                 <span className="table-action"><FaPenToSquare onClick={handleEdit} /></span>
        //                                 <span className="table-action" style={{ color: 'red' }}><FaRegTrashCan onClick={() => handleDelete(itm.id)} /></span>
        //                             </td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //     )}

        // </>
    );
}