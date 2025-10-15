import { useEffect, useState } from "react";


const quoteEndpoint = "http://localhost:9090/api/v1/quotes"


function Card ({quote}) {
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
        <>{data && (
            <>
                {data.map((item, idx) => (
                    <Card quote={item}/>))
                }
            </>
        )} </>
    );

}