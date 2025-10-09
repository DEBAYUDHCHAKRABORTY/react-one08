import { useState } from "react";

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

export default function Btnwtr() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  const getData = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    }
  };

  const handleBtn = async (e) => {
    setLoad(true);
    await getData();
    setLoad(false);
  };

  return (
    <>
      <h1>Weather Report</h1>
      <button onClick={handleBtn}>Generate Weather Report</button>

      {load ? (
        <p>Loading...</p>
      ) : ( 
        <div>
          {data && data.hourly?.time.map((itm, idx) => (
            <h4 key={idx} style={{ color: "red" }}>
              Time : {itm} Temperature : {data.hourly.temperature_2m[idx]}{" "}
              Humidity : {data.hourly.relative_humidity_2m[idx]}
            </h4>
          ))}
        </div>
      )}
    </>
  );
}
