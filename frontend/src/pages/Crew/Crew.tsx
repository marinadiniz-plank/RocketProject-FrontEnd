import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton";
import Header from "../../components/Header";
import { useCrew } from "../../hooks/useCrews";
import { CrewAddForm } from "./components/CrewAddForm";
import { Data } from "./components/CrewData";
import { CrewTable } from "./components/CrewTable";

function Crewman() {
  const [data, { getCrews, addCrew, updateCrew, deleteCrew }] = useCrew();
  useEffect(() => {
    getCrews();
  }, []);

  const handleAddCrew = (crew: Data) => {
    addCrew(crew);
  };

  return (
    <>
      <Header pageTitle="Crew" />
      <AddButton title={"Crew"}>
        <CrewAddForm onSubmit={handleAddCrew} />
      </AddButton>
      <div>
        {data && data.length > 0 ? (
          <CrewTable data={data} updateCrew={updateCrew} deleteCrew={deleteCrew} />
        ) : (
          <div>No data available</div> // call notification
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Crewman;
