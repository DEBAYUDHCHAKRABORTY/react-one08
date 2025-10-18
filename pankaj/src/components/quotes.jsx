import { useEffect, useState } from "react";
import "./style.scss"



const quoteEndpoint = "http://localhost:9090/api/v1/quotes"


function Card({ quote }) {
    return (<>
        <h2>{quote.quote}</h2>
        <h4> -  By {quote.author}</h4>
    </>);
}


export default function Quotes() {
    const [data, setData] = useState();


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
                console.error(`Error encountered while fetching the quotes ${e}`);
            }
        }

        fetchQuotes();
    }, [])

    return (
        <>
            <h1><u>Get data</u></h1>
            <table >
                <thead >
                    <tr>

                        <th>Index</th>
                        <th>Quotes </th>
                        <th>Author</th>

                    </tr>
                </thead>
                <tbody >
                    {data && (
                        <>
                            {data.map((item, idx) => (
                                <tr key={idx}>
                                    {/* <Card quote={item}/> */}
                                    <td>{idx + 1}</td>
                                    <td>{item.quote}</td>
                                    <td>{item.author}</td>

                                </tr>))


                            }

                        </>

                    )}
                </tbody>
            </table>
        </>

    );


}