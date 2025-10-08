import React, { useEffect, useState } from "react";

export default function QuoteGenerator() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchQuote = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("https://zenquotes.io/api/random"); 
            if (!response.ok) {
                const jsonQuote = await response.json();
                console.log(jsonQuote);
                setQuote(jsonQuote);
            }


            setQuote(data[0].q);
            setAuthor(data[0].a);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "100px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1>🌟 Random Quote Generator</h1>

            <button
                onClick={fetchQuote}
                style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                Generate Random Quote
            </button>

            <div style={{ marginTop: "40px", maxWidth: "600px", margin: "auto" }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {quote && (
                    <div>
                        <p style={{ fontSize: "20px", fontStyle: "italic" }}>"{quote}"</p>
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>— {author}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
