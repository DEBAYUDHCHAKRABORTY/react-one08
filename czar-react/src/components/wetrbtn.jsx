import { useEffect, useState } from "react"

const url = "https://api.open-meteo.com/v1/forecast?latitude=25.11&longitude=85.89&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

export default function Btnwtr(){
    const[data,setData]=useState();

    useEffect(()=>{
        getData();
    },[]);

    const getData = async()=>{
        const response = await fetch(url);

        if(response.ok){
            const jsonData = await response.json()
            console.log(jsonData);
            setData(jsonData);
        }
    } 


    return(
        <>
            
            <button onClick={getData}>Generate Weather</button>
        </>
    )
}