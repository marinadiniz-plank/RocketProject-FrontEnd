import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useRocket } from "../../hooks/useRockets";
import { RocketAddForm } from "./components/RocketAddForm";
import { Data } from "./components/RocketData";
import RocketTable from "./components/RocketTable";

function Rocket() {
  const [data, { getRockets, addRocket, updateRocket, deleteRocket }] = useRocket();
  useEffect(() => {
    getRockets();
  }, []);

  const handleAddRocket = (rocket: Data) => {
    addRocket(rocket);
  };

  return (
    <>
      <Header pageTitle="Rocket" />
      <AddButton title={"Rocket"}>
        <RocketAddForm onSubmit={handleAddRocket} />
      </AddButton>
      <div>
        {data && data.length > 0 ? (
          <RocketTable data={data} updateRocket={updateRocket} deleteRocket={deleteRocket} />
        ) : (
          <Loading />
        )}
      </div>
      <Outlet />
    </>
  );
}


export default Rocket;
