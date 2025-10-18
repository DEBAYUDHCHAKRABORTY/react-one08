import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
const img = "http://localhost:9090/api/v1/quotes/5";
export default function QuoteDetail() {
    useState [data,setdata] = useState();
    const { id } = useParams();

    useEffect (() => {
        async function fetchQuoteDetails() {
            try {
                const response = await fetch (img);
                if (response.ok) {
                    const jsonData = await response.json();
                    setdata(jsonData);
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
            <h3>Quote id {id}</h3>
        </>
    )
}