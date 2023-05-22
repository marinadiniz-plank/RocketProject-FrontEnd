import AddButton from "../components/AddButton";
import Header from "../components/Header";
import { RenderLaunch } from "../service/LaunchService"
import { Outlet } from "react-router-dom";

function Launch() {


  //TODO: adicionar useffect para table
  return (
    <>
      <Header pageTitle="Launch"/>
      <AddButton entityName={"Launch"} formLabels={["Launch code", "Date", "Success", "Rocket", "Crew"]} formPlaceholder={[""]}/>
      <RenderLaunch />
      <Outlet />
    </>
  );
}

export default Launch;
