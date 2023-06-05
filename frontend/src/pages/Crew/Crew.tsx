import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AddButton from "../../components/Buttons/AddButton";
import { Loading } from "../../components/Common/Loading";
import { useCrew } from "../../hooks/useCrews";
import { CrewAddForm } from "./components/CrewAddForm";
import { Data } from "./components/CrewData";
import { CrewTable } from "./components/CrewTable";

function Crewman() {
	const [data, { getCrews, addCrew, updateCrew, deleteCrew }] = useCrew();
	const { t } = useTranslation();

	useEffect(() => {
		getCrews();
	}, []);

	const handleAddCrew = (crew: Data) => {
		addCrew(crew);
	};

	return (
		<>
			<AddButton title={t("pages.crew")}>
				<CrewAddForm onSubmit={handleAddCrew} />
			</AddButton>
			<div>
				{data && data.length > 0 ? (
					<CrewTable
						data={data}
						updateCrew={updateCrew}
						deleteCrew={deleteCrew}
					/>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
}

export default Crewman;
