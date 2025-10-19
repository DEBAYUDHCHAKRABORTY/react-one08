import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const userUrl = "http://localhost:9090/api/v1/users";


export default function FrntPg() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function userData() {
      try {
        const response = await fetch(userUrl);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        }
      } catch (e) {
        console.error(`Error encountered while fetching the quotes ${e}`);
      }
    }
    userData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${userUrl}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete item");
      }
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setData(data.filter((data) => data.id !== id));
  };

  function handleAddUsers(){
      navigate(`/users/:addUser`)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#F3F2EC",
          padding: "50px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ color: "red" }}>
          <u>USERS</u>
        </h1>
        <button onClick={handleAddUsers} style={{ marginLeft: "500px", width: "205px" }}>
          ADD USER
        </button>
        {data && (
          <>
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>PHONE NO.</th>
                  <th>CITY</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((itm, idx) => (
                  <tr key={idx}>
                    <td>{itm.name}</td>
                    <td>{itm.age}</td>
                    <td>{itm.phone}</td>
                    <td>{itm.city}</td>
                    <td>
                      <button style={{ marginRight: "10px" }}>UPDATE</button>
                      <button onClick={() => handleDelete(itm.id)}>DELETE</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
