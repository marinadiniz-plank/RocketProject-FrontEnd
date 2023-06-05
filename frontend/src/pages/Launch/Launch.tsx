import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AddButton from "../../components/Buttons/AddButton";

import { Loading } from "../../components/Common/Loading";
import { useLaunch } from "../../hooks/useLaunch";
import { LaunchAddForm } from "./components/LaunchAddForm";
import { Data } from "./components/LaunchData";
import { LaunchTable } from "./components/LaunchTable";

function Launch() {
	const [data, { getLaunchs, addLaunch, updateLaunch, deleteLaunch }] =
		useLaunch();
	const { t } = useTranslation();

	useEffect(() => {
		getLaunchs();
	}, []);

	const handleAddLaunch = (launch: Data) => {
		addLaunch(launch);
	};

	return (
		<>
			<AddButton title={t("pages.launch")}>
				<LaunchAddForm onSubmit={handleAddLaunch} />
			</AddButton>
			<div>
				{data && data.length > 0 ? (
					<LaunchTable
						data={data}
						updateLaunch={updateLaunch}
						deleteLaunch={deleteLaunch}
					/>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
}

export default Launch;
