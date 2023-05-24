import { Outlet } from "react-router-dom";
import AddButton from "../components/Buttons/AddButton";
import Header from "../components/Header";
import { RenderCrew, SubmitCrew } from "../service/CrewService";

function Crewman() {
  return (
    <>
      <Header pageTitle="Crew" />
      <AddButton entityName={"Crew"} formLabels={["Name", "Crewman id"]} onSubmit={SubmitCrew} />
      <RenderCrew />
      <Outlet />
    </>
  );
}

export default Crewman;
