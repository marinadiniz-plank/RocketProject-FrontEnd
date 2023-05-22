import AddButton from "../components/AddButton";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { RenderRocket } from "../service/RocketService"

function Rocket() {
  return (
    <>
    <Header pageTitle="Rocket"/>
    <AddButton entityName={"Rocket"} formLabels={["Name"]}/>
    <RenderRocket />
      <Outlet />
      </>
  );
}


export default Rocket;
