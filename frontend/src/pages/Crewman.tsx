import AddButton from "../components/Buttons/AddButton";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import { RenderCrewman, SubmitCrewman } from "../service/CrewmanService";

function Crewman() {
  return (
    <>
      <Header pageTitle="Crewman" />
      <AddButton
        entityName={"Crewman"}
        formLabels={["Name", "Patent"]}
        onSubmit={SubmitCrewman} />
      <RenderCrewman />
      <Outlet />
    </>
  );
}

export default Crewman;