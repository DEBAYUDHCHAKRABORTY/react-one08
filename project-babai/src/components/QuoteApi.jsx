import { useState, useEffect } from "react";

const quoteEndpoint = "http://localhost:9090/api/v1/quotes";

function Card({ quote }) {
    return (
        <>
            <h2>{quote.quote}</h2>
            <h4>{quote.author}</h4>
        </>
    );
}

export default function Quotes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchQuotes() {
            try {
                const response = await fetch(quoteEndpoint);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    console.log(jsonData);
                } 
            } catch (e) {
                console.error(`Error encountered while fetching quotes: ${e}`);
            }
        }

        fetchQuotes();
    }, []);

    return (
        <>
            <h1>Quotes API</h1>

            {data && (
                <>
                    {/* <h1>Quotes : {data.quote}</h1>
                    <h2>Author : {data.author}</h2> */}

                    <table>
                        <thead>
                            <tr>
                                <th>Id </th>
                                <th> Quote </th>
                                <th> Author </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((itm, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{itm.quote}</td>
                                    <td>{itm.author}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}