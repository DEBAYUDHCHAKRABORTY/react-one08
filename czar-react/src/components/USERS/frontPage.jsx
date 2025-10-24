import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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

  function handleAddUsers() {
    navigate(`/users/:addUser`);
  }

  return (
    <>
      <div className="flex-col justify-center">
        <h1 className="text-red-500 text-5xl text-center bg-amber-300">
          USERS
        </h1>
        <Button clas label="ADD USERS" onClick={handleAddUsers} />
        <div className="card bg-red-400">
          <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="NAME"></Column>
            <Column field="age" header="AGE"></Column>
            <Column field="city" header="CITY"></Column>
            {/* <Column field="" header="ACTIONS"></Column> */}
          </DataTable>
        </div>

        {/* <table>
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
                      <Button label="Update" style={{marginRight:'5px'}}/>
                      <Button label="Delete" onClick={() => handleDelete(itm.id)}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
      </div>
    </>
  );
}
