
import Table from "../components/Table";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AddButton from "../components/AddButton";

function Crewman() {
  const table1 = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ];

  const table2 = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return (
    <>
      <Header pageTitle="Crew"/>
      <AddButton entityName={"Crew"} formLabels={["Name", "Crewman"]}/>
      <Table data={table1} />
      <Table data={table2} />
      <Outlet />
    </>
  );
}

export default Crewman;
