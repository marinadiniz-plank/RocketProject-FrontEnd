import { Outlet } from "react-router-dom";
import AddButton from "../components/Buttons/AddButton";
import Header from "../components/Header";
import { RenderLaunch } from "../service/LaunchService";

function Launch() {


  //TODO: adicionar useffect para table
  return (
    <>
      <Header pageTitle="Launch" />
      <AddButton entityName={"Launch"} formLabels={["launchCode", "date", "success", "rocket", "crew"]} />
      <RenderLaunch />
      <Outlet />
    </>
  );
}

export default Launch;
