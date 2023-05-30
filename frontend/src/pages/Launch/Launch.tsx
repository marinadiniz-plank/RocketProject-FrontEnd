import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useLaunch } from "../../hooks/useLaunch";
import { LaunchAddForm } from "./components/LaunchAddForm";
import { Data } from "./components/LaunchData";
import { LaunchTable } from "./components/LaunchTable";

function Launch() {
	const [data, { getLaunchs, addLaunch, updateLaunch, deleteLaunch }] =
		useLaunch();
	useEffect(() => {
		getLaunchs();
	}, []);

	const handleAddLaunch = (launch: Data) => {
		addLaunch(launch);
	};

	return (
		<>
			<Header pageTitle="Launch" />
			<AddButton title={"Launch"}>
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
			<Outlet />
		</>
	);
}

export default Launch;
