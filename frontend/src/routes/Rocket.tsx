import { Outlet } from "react-router-dom";
import AddButton from "../components/Buttons/AddButton";
import Header from "../components/Header";
import { RenderRocket, SubmitRocket } from "../service/RocketService";

function Rocket() {
  return (
    <>
      <Header pageTitle="Rocket" />
      <AddButton
        entityName={"Rocket"}
        formLabels={["name"]}
        onSubmit={SubmitRocket}
      />
      <RenderRocket />
      <Outlet />
    </>
  );
}


export default Rocket;
