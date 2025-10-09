import { useEffect, useState } from "react"

export default function Quote() {
    const [quote, setQuote] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok) {
            const jsonQuote = await response.json();
            console.log(jsonQuote);
            setQuote(jsonQuote);
        }
    };

    const handleClick = async (e) => {
        setLoading(true);
        await fetchQuote();
        setLoading(false);
    }


    return (
        <div>
            <h1>Weather Report</h1>
            <button onClick={handleClick}> Weather</button>

            {loading
                ? <p>Loading...</p>
                : <div>
                    {quote.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <h3>- {item.email}</h3>
                        </div>
                    ))}
                </div>

            }
        </div>
    );
}