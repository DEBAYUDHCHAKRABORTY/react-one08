import { useEffect, useState } from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";


const quoteEndpoint = "http://localhost:9090/api/v1/quotes"


function Card({ quote }) {
    return (<>
        <h2>{quote.quote}</h2>
        <h4> -  By {quote.author}</h4>
    </>);
}


export default function Quotes() {
    const [data, setData] = useState();
    const navigate = useNavigate();


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
    }, []);
    function handleClick(id) {
        console.log("Raw Clicked " + id);
        navigate(`/quotes/${id}`);

    }

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
                                <tr key={idx} onClick={() => handleClick(item.id)}>
                                    {/* <Card quote={item}/> */}
                                    <td id="index">{idx + 1}</td>
                                    <td id="quotes">{item.quote}</td>
                                    <td id="author">{item.author}</td>

                                </tr>))


                            }

                        </>

                    )}
                </tbody>
            </table>
        </>

    );


}