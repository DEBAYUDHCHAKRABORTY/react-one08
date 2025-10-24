import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getAllQuotes } from "../../services/api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



function Card({ quote }) {
    return (
        <>
            <h2>{quote.quote}</h2>
            <h4>- by {quote.author}</h4>
        </>
    );
}

export default function Quotes() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const gettingData = async () => {
            const apiData = await getAllQuotes();
            setData(apiData.data);
        }
        gettingData();

    }, []);

    function handleClick(id) {
        console.log("Clicked on the row no. " + id)
        navigate(`/quotes/${id}`);
    }

    return (
        <div >
            <h1 className="text-6xl text-center text-pink-900 my-2">Quotes API</h1>

            {data && (
                <div className="flex justify-center">
                    <DataTable value={data} stripedRows showGridlines paginator rows={5} tableStyle={{ maxWidth: '50rem' }}>
                        <Column header="#" body={(rowData, { rowIndex }) => rowIndex + 1} />
                        <Column field="quote" header="Quote"></Column>
                        <Column field="author" sortable header="Author"></Column>
                    </DataTable>
                </div>


                // <>
                //     <table className="table">
                //         <thead>
                //             <tr id="heading">
                //                 <th> Id </th>
                //                 <th> Quote </th>
                //                 <th> Author </th>
                //             </tr>
                //         </thead>

                //         <tbody>
                //             {data.map((itm, idx) => (
                //                 <tr key={idx} onClick={() => handleClick(itm.id)}>
                //                     <td>{idx + 1}</td>
                //                     <td>{itm.quote}</td>
                //                     <td>{itm.author}</td>
                //                 </tr>

                //             ))}
                //         </tbody>
                //     </table>
                // </>
            )}
        </div>
    );
}