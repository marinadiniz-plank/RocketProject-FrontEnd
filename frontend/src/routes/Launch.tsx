import AddButton from "../components/AddButton";
import Header from "../components/Header";
import Table from "../components/Table";

import { Outlet } from "react-router-dom";

function Launch() {
  const table1 = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ];

  //TODO: adicionar useffect para table
  return (
    <>
      <Header pageTitle="Launch"/>
      <AddButton entityName={"Launch"} formLabels={["Launch code", "Date", "Success", "Rocket", "Crew"]}/>
      <Table data={table1} />
      <Outlet />
    </>
  );
}

export default Launch;
