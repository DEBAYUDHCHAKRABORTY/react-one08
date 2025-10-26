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
      if (res.status === 200) {
        setData(data.filter((user) => user.id !== id));
        toast.current.show({
          severity: "warn",
          summary: "Deleted",
          detail: "Your Record has been deleted",
          life: 3000,
        });
      }
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setData(data.filter((data) => data.id !== id));
  };

  const confirm = async (id) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept: () => handleDelete(id),
      reject: () =>
        toast.current.show({
          severity: "info",
          summary: "Cancelled",
          detail: "Deletion cancelled",
          life: 2000,
        }),
    });
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          severity="danger"
          className="mr-2"
          onClick={() => updateUser(rowData.id)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirm(rowData.id)}
        />
      </>
    );
  };

  function handleAddUsers() {
    navigate(`/users/:addUser`);
  }

  function handleSearch(){
    navigate(`/users/search`);
  }

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="flex-col justify-center">
        <h1 className="text-red-500 text-5xl text-center  mb-8">USERS</h1>

        <div className="flex justify-between">
        <Button icon="pi pi-search" label="Search" className="mr-50" onClick={handleSearch}/>

        <Button icon="pi pi-user" clas label="ADD USERS" onClick={handleAddUsers} className="ml-100" />
        </div>



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
