import { useState } from "react"

export default function Userdata() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        }
    };
    const handleClick = async (e) => {
        setLoading(true);
        await fetchData();
        setLoading(false);
    }

    return (
        <div>
            <h1>Get data from API</h1>
            <button onClick={handleClick} style={{ color: "blue", background: "yellow" }}>Click Here</button>
            {loading
                ? <p>Loading...</p>
                : <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}