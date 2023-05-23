import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AddButton from "../components/Buttons/AddButton";
import { RenderCrew } from "../service/CrewService";

function Crewman() {
  return (
    <>
      <Header pageTitle="Crew"/>
      <AddButton entityName={"Crew"} formLabels={["Name", "Crewman id"]}/>
      <RenderCrew />
      <Outlet />
    </>
  );
}

export default Crewman;
