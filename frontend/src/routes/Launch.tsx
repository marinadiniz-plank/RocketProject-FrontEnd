import { Outlet } from "react-router-dom";
import AddButton from "../components/Buttons/AddButton";
import Header from "../components/Header";
import { RenderLaunch, SubmitLaunch } from "../service/LaunchService";

function Launch() {
  return (
    <>
      <Header pageTitle="Launch" />
      <AddButton
        entityName={"Launch"}
        formLabels={["launchCode", "date", "success", "rocket", "crew"]}
        onSubmit={SubmitLaunch} />
      <RenderLaunch />
      <Outlet />
    </>
  );
}

export default Launch;
