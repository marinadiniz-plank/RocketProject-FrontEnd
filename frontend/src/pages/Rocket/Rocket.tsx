import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AddButton from "../../components/Buttons/AddButton";
import { Loading } from "../../components/Common/Loading";
import GenericTable from "../../components/Table";
import { useRocket } from "../../hooks/useRockets";
import { RocketAddForm } from "./components/RocketAddForm";
import { Data } from "./components/RocketData";
import RocketTable from "./components/RocketTable";

function Rocket() {
	const [data, { getRockets, addRocket, updateRocket, deleteRocket }] =
		useRocket();
	const { t } = useTranslation();
	useEffect(() => {
		getRockets();
	}, []);

	const handleAddRocket = (rocket: Data) => {
		addRocket(rocket);
	};

	return (
		<>
			<AddButton title={t("pages.rocket")}>
				<RocketAddForm onSubmit={handleAddRocket} />
			</AddButton>
			<div>
				{data && data.length > 0 ? (
					<GenericTable>
						<RocketTable
							data={data}
							updateRocket={updateRocket}
							deleteRocket={deleteRocket}
						/>
					</GenericTable>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
}

export default Rocket;
