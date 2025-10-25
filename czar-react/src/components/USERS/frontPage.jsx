import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

const userUrl = "http://localhost:9090/api/v1/users";

export default function FrntPg() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const toast = useRef(null);

  const accept = () => {
    toast.current.show({
      severity: "warn",
      summary: "Deleted",
      detail: "Record Deleted",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

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

    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });

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

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Toast ref={toast} />
        <ConfirmDialog />
        <div className="card flex flex-wrap gap-2 justify-content-center">
          <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
          <Button
            onClick={() => handleDelete(rowData.id)}
            icon="pi pi-trash"
          ></Button>
        </div>
      </>
    );
  };

  function handleAddUsers() {
    navigate(`/users/:addUser`);
  }

  return (
    <>
      <div className="flex-col justify-center">
        <h1 className="text-red-500 text-5xl text-center">USERS</h1>
        <Button clas label="ADD USERS" onClick={handleAddUsers} />
        <div className="card bg-red-400">
          <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
            <Column header="#" body={(rowData, { rowIndex }) => rowIndex + 1} />
            <Column field="name" header="NAME"></Column>
            <Column field="age" header="AGE"></Column>
            <Column field="city" header="CITY"></Column>
            <Column body={actionBodyTemplate} header="ACTIONS"></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
}
