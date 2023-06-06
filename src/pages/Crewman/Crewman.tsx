import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AddButton from "../../components/Buttons/AddButton";

import { Loading } from "../../components/Common/Loading";
import GenericTable from "../../components/Table";
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
			<AddButton title={t("pages.crewman")}>
				<CrewmanAddForm onSubmit={handleAddCrewman} />
			</AddButton>
			<div>
				{data && data.length > 0 ? (
					<GenericTable>
						<CrewmanTable
							data={data}
							updateCrewman={updateCrewman}
							deleteCrewman={deleteCrewman}
						/>
					</GenericTable>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
}

export default Crewman;
