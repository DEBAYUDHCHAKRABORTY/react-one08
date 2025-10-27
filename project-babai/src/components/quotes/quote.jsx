import {useEffect, useState} from "react";
import {getAllQuotes} from "../../services/api";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';


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

    useEffect(() => {
        const gettingData = async () => {
            const apiData = await getAllQuotes();
            setData(apiData.data);
        }
        gettingData();

    }, []);

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
            )}
        </div>
    );
}