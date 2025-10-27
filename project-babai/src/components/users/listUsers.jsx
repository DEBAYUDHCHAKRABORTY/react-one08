import {useEffect, useState} from "react";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from "primereact/button";
import {deleteUserById, getAllUsers} from "../../services/api";


export default function ListUsers() {
    const [data, setData] = useState([]);

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
    }


    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2"/>
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteUser(rowData.id)}/>
            </>
        );
    };


    return (

        <>
            <div className="flex items-center justify-center my-8">
                <h1 className="text-6xl text-900 font-bold underline underline-offset-8 ">Users</h1>

            </div>

            <DataTable value={data} tableStyle={{minWidth: '50rem'}}>
                <Column header="#" body={(rowData, {rowIndex}) => rowIndex + 1}/>
                <Column field="name" sortable header="Name"></Column>
                <Column field="age" sortable header="age"></Column>
                <Column field="phone" header="Phone Number"></Column>
                <Column field="email" sortable header="Email"></Column>
                <Column field="country" sortable header="Country"></Column>
                <Column body={actionBodyTemplate} header="Actions"></Column>
            </DataTable>
        </>

    );
}