import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
const imgURL = "http://localhost:9090/api/v1/quotes";
export default function QuoteDetail() {
    const [data,setData] = useState();
    const { id } = useParams();

    useEffect (() => {
        async function fetchQuoteDetails() {
            try {
                const response = await fetch (`${imgURL}/${id}`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    console.log(jsonData);
                }
            } catch(e){
                console.error(`Error encountered while fetching the quotes ${e}`);
            }
            
        }
        fetchQuoteDetails();
    },[]);
     
    return (
        <>
            <h3 id="title">Quote id -{id}</h3>
            {data && (
                <>
                <div className="details" style={{backgroundImage: `url(${data.bgImage})`, width: '900px', height:'800px'}}>
                    <div className="text">
                        <h2>{data.quote}</h2>
                        <h3>-by {data.quote}</h3>
                    </div>
                </div>
                </>

            )

            }
        </>
    )
}