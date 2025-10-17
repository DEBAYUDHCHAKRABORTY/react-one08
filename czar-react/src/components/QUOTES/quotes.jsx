import { useEffect, useState } from "react";
import "./quotes.scss";
import { useNavigate } from "react-router-dom";

const quoteEndpoint = "http://localhost:9090/api/v1/quotes";

function Card({ quote }) {
  return (
    <>
      <h2>{quote.quote}</h2>
      <h4> - By {quote.author}</h4>
    </>
  );
}

export default function Quotes() {
  const [data, setData] = useState();
  const navigate = useNavigate();

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
  }, []);

  function handleClick(id) {
    console.log("Row clicked " + id);
    navigate(`/quotes/${id}`);
  }

  return (
    <>
      <h1><u>Quotes</u></h1>
      {data && (
        <>
          <table className="table">
            <thead>
              <tr id="heading">
                <th>Index</th>
                <th>Quotes</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {data.map((itm,idx) => (
                  <tr key={idx} onClick={() => handleClick(itm.id)}>
                      <td id="index">{idx+1}</td>
                      <td id="quotes">{itm.quote}</td>
                      <td id="author">{itm.author}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

    </>
  );
}
