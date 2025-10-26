import { useEffect, useState } from "react";
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { deleteUserById, getAllUsers } from "../../services/api";
import js from "@eslint/js";
import { Button } from "primereact/button";
import { ConfirmDialog } from 'primereact/confirmdialog'; 
import { confirmDialog } from 'primereact/confirmdialog'; 
import { Toast } from 'primereact/toast';




export default function Info() {
    const navigate = useNavigate()
    const [data, setData] = useState();
    const toast = useRef(null);



    async function fetchInfo() {
        try {
            const jsonData = await getAllUsers()
            setData(jsonData.data)
        } catch (e) {
            console.error(`Error encountered while fetching the quotes ${e}`)
        }

    }

    useEffect(() => {
        fetchInfo();
    }, []);

    function handleSubmit(e) {
        navigate("/adduser")
    }

    async function deleteUser(id) {
        const response = await deleteUserById(id);
        if (response.status === 200) {
            setData(data.filter(user => user.id !== id));
            toast.current.show({ severity: 'warn', summary: 'Deleted', detail: 'Your Record has been deleted', life: 3000 });

        }
    };
    async function updateUser(id) {
        const response = await updateUserById(id);
        if (response.status === 200) {
            setData(data.filter(user => user.id !== id));
        }
    };
    async function updateUser(id) {
        const response = await updateUserById(id);
        if (response.status === 200) {

            setData(data.filter(user => user.id !== id));
        }
    };




    const confirm = async (id) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: () => deleteUser(id),
            reject: () =>
                toast.current.show({
                    severity: "info",
                    summary: "Cancelled",
                    detail: "Deletion cancelled",
                    life: 2000,
                }),
        });

    };






    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Users</span>

        </div>
    );

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded outlined severity="danger" className="mr-2" onClick={() => updateUser(rowData.id)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirm(rowData.id)} />
                <Button icon="pi pi-pencil" rounded outlined severity="danger" className="mr-2" onClick={() => updateUser(rowData.id)}/>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteUser(rowData.id)} />
            </>
        );
    };


    return (

        <>
            <Toast ref={toast} />
            <ConfirmDialog />
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
        //     <h1><u>GET USERS INFO</u></h1>
        //     <button style={{ marginLeft: "570px", marginBottom: "10px", backgroundColor: "green", width: "150px" }} onClick={handleSubmit}>ADD USER</button>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>INDEX</th>
        //                 <th>NAME</th>
        //                 <th>AGE</th>
        //                 <th>PHONE</th>
        //                 <th>COUNTRY</th>
        //                 <th>ACTIONS</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {data && (
        //                 <>
        //                     {data.map((item, index) => (
        //                         <tr key={index}>
        //                             <td>{index + 1}</td>
        //                             <td>{item.name}</td>
        //                             <td>{item.age}</td>
        //                             <td>{item.phone}</td>
        //                             <td>{item.country}</td>
        //                             <td>{item.action}
        //                              <button>UPDATE</button>
        //                              <button onClick={()=> deleteUser(item.id)} style={{marginLeft:"10px"}}>DELETE</button>
        //                             </td>

        //                         </tr>
        //                     ))}
        //                 </>
        //             )}

        //         </tbody>
        //     </table>
        // </>
    )
}