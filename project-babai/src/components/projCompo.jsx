import {useEffect, useState} from "react";

export default function ProjectCompo() {

    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m.io/api/quotes');

            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            }
        }

        fetchData();

        console.log("Component is working");
    }, [])

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }


    return (
        <>
            <h1>Random Quote Generator</h1>
            <button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'green', fontSize: '25px' }} onClick={() => fetchData()}>Generate new Quote</button>
            {data && data.length > 0 && (
                <>
                    <h2>Quote : {data.latitude}</h2>
                    <h3>Author : {data.longitude}</h3>
                </>
            )}
        </>
    )
};
