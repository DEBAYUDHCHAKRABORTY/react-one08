import { useEffect, useState } from "react";

export default function Data1() {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState()
    useEffect(() => {
        // setLoading()
        getData();
    }, [])
    async function getData() {
        const url = 'http://localhost:9090/api/v1/quotes';
        let response = await fetch(url);
        const jsonData = await response.json()

        setData(jsonData)
        // setLoading()
    }
    return (
        <div>
            <h1>Data from API</h1>
            <table>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>Quotes </th>
                        <th>Author</th>

                    </tr>
                </thead>
                <tbody>

                    {data && (
                        <>
                            <div>
                                {data.map((itm, idx) => (
                                    <tr key={idx}>
                                        <h2>{idx + 1}</h2>
                                        <h2>{itm.quote}</h2>
                                        <h2>by {itm.author}</h2>
                                    </tr>

                                ))}
                            </div>
                        </>

                    )
                    }
                </tbody>
            </table>
        </div>
    )
}
