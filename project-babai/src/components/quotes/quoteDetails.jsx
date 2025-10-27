import {useParams} from "react-router-dom";

export default function QuoteDetails(){
    const {id} = useParams();

    return(<>
        {id}
        </>);

}