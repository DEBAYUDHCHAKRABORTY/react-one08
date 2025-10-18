import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./quoteDtl.scss";

const img = "http://localhost:9090/api/v1/quotes/5";

export default function QuoteDetail() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(img);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        }
      } catch (e) {
        console.error(`Error encountered while fetching the quotes ${e}`);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h2 id="title">
        <u>Quotes id - {id}</u>
      </h2>

      {data && (
        <>
          <div className="details">
            <div className="text">
              <h2>{data.quote}</h2>
              <h3>-BY{data.author}</h3>
            </div>
          <img src={data.bgImage} />
          </div>
        </>
      )}
    </>
  );
}
