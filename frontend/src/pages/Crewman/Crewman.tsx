import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useCrewman } from "../../hooks/useCrewmans";
import { CrewmanAddForm } from "./components/CrewmanAddForm";
import { Data } from "./components/CrewmanData";
import CrewmanTable from "./components/CrewmanTable";

function Crewman() {
	const [data, { getCrewmans, addCrewman, updateCrewman, deleteCrewman }] =
		useCrewman();
	const { t } = useTranslation();

	useEffect(() => {
		getCrewmans();
	}, []);

	const handleAddCrewman = (cremman: Data) => {
		addCrewman(cremman);
	};

	return (
		<>
			<Header pageTitle={t("pages.crewman")} />
			<AddButton title={t("pages.crewman")}>
				<CrewmanAddForm onSubmit={handleAddCrewman} />
			</AddButton>
			<div>
				{data && data.length > 0 ? (
					<CrewmanTable
						data={data}
						updateCrewman={updateCrewman}
						deleteCrewman={deleteCrewman}
					/>
				) : (
					<Loading />
				)}
			</div>
			<Outlet />
		</>
	);
}

export default Crewman;
