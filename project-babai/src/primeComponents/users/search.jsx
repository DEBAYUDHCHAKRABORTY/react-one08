 import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { searchUser } from "../../services/api";


export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    async function handleInputChange(e) {
        setSearchTerm(e.target.value)
        try {
            const response = await searchUser(e.target.value);
            if (response.status === 200) {
                setSearchResult(response.data)
            }
        } catch (e) {
            console.log(err)
        }
    }

    async function handleSearch(e) {
        console.log("Searching users by name " + searchTerm);

        try {
            const response = await searchUser(searchTerm);
            if (response.status === 200) {
                setSearchResult(response.data)
            }
        } catch (e) {
            console.log(err)
        }
    }




    return (
        <div>

            <h1 className="text-6xl my-4">Search here</h1>
            <span className="mr-2">
                <InputText type="text" value={searchTerm} onInput={handleInputChange} className="p-inputtext-sm w-100" placeholder="Enter the username that you want to search..." />
            </span>
            {/* <Button onClick={handleSearch}>Search</Button> */}

            <div className="card my-4">
                <DataTable value={searchResult} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Apna Name"></Column>
                    <Column field="username" header="Apna bulawa hua naam"></Column>
                    <Column field="age" header="Umar"></Column>
                    <Column field="country" header="Jagah"></Column>
                </DataTable>
            </div>

        </div>
    )
}