import { useState, useEffect } from "react";
import "./quote.scss";
import { useNavigate } from "react-router-dom";
import { fetchQuotes } from "../../services/api/quote";



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

    useEffect( () => {
        const gettingData = async() => {
            const apiData = await fetchQuotes();
            setData(apiData);
        }
        gettingData();
        
    }, []);

    function handleClick(id) {
        console.log("Clicked on the row no. " + id)
        navigate(`/quotes/${id}`);
    }

    return (
        <>
            <h1>Quotes API</h1>

            {data && (
                <>
                    <table className="table">
                        <thead>
                            <tr id="heading">
                                <th> Id </th>
                                <th> Quote </th>
                                <th> Author </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((itm, idx) => (
                                <tr key={idx} onClick={() => handleClick(itm.id)}>
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