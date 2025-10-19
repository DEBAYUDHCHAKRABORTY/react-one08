import { useEffect, useState } from "react";
import "./style.scss"


export default function NewApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData)
                setData(jsonData);
                setLoading(false);
            }
        }

        fetchData();

        console.log("API mounted");
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }



    return (
        <>
            <h1><u>Weather Data API</u></h1>
            {data &&
                <>

                    <h1>Latitude : {data.latitude}</h1>
                    <h1>Longitude : {data.longitude}</h1>
                    <h1>Current Units: {data.current_units.time}</h1>
                    <table >
                        <thead>
                            <tr >
                                <th>Time</th>
                                <th>Temperature</th>
                                <th>Humidity</th>
                                <th>Wind Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.hourly?.time.map((itm, idx) => (
                                <tr key={idx} >
                                    <td>{itm}</td>
                                    <td>{data.hourly.temperature_2m[idx]}°C</td>
                                    <td> {data.hourly.relative_humidity_2m[idx]}% </td>
                                    <td> {data.hourly.wind_speed_10m[idx]}km/h</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }

            {JSON.stringify(data)}

        </>
    );
}