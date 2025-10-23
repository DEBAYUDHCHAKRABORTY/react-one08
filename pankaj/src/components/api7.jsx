import { useState } from "react"

const getUsersUrl = "http://localhost:9090/api/v1/users"

export default function Usedata() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        const response = await fetch(getUsersUrl);
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
        <div className = " max-w-xl mx-auto px-4 bg-red bg-red-50">
            <h1>Get Data from API</h1>
            <button onClick={handleClick} style={{ color: "black", background: "blue" }}>Click Here</button>
            {loading
                ? <p>Loading...</p>
                : <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <h2>{item.username}</h2>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}