import AddButton from "../components/AddButton";
import Header from "../components/Header";
// import Table from "../components/Table";

import { Outlet } from "react-router-dom";
import { RenderRocket } from "../service/RocketService"

function Rocket() {
  
  // const rocket = RenderRocket();
  // console.log(rocket);
 

  return (
    <>
    <Header pageTitle="Rocket"/>
      <AddButton />
      {/* <Table data={rocket} /> */}
      <Outlet />
    </>
  );
}


export default Rocket;
