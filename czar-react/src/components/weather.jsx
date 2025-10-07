import { useEffect, useState } from "react";

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=25.11&longitude=85.89&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

export default function Weather() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(url);

    if (res.ok) {
      const jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
    }
  };

  return (
    <>
      {data && (
        <>
          <h1 style={{color:'green'}}>Latitude : {data.latitude}</h1>
          <h1>Longitude : {data.longitude}</h1>

          {data.hourly.time.map((itm, idx) => (
            <h4 key={idx} style={{color : "red"}}>
              Time : {itm} Temperature : {data.hourly.temperature_2m[idx]}{" "}
              Humidity : {data.hourly.relative_humidity_2m[idx]}
            </h4>
          ))}
        </>
      )}
    </>
  );
}
