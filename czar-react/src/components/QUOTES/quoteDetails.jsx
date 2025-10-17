import { useParams } from "react-router-dom";

const img = "http://{{server}}:{{port}}/api/v1/quotes/:id"

export default function QuoteDetail(){
    const {id} = useParams();


    return (<>
        <p>Quote id {id}</p>
    </>);
}