import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton";
import Header from "../../components/Header";
import { useRocket } from "../../hooks/useRockets";
import { Data } from "./components/RocketData";
import { RocketForm } from "./components/RocketForm";
import RocketTable from "./components/RocketTable";

function Rocket() {
  const [data, { getRockets, addRocket }] = useRocket();
  useEffect(() => {
    getRockets();
  }, []);

  const handleAddRocket = (rocket: Data) => {
    addRocket(rocket);
  };

  return (
    <>
      <Header pageTitle="Rocket" />
      <AddButton
        title={"Rocket"}
        form={RocketForm}
        formProps={{ onSubmit: handleAddRocket }} // Pass form data as an object
      />
      <div>
        {data && data.length > 0 ? (
          <RocketTable data={data} />
        ) : (
          <div>No data available</div> // call notification
        )}
      </div>
      <Outlet />
    </>
  );
}


export default Rocket;
