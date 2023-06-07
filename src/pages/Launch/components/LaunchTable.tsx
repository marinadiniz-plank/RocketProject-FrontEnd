import { useTranslation } from "react-i18next";
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import { Data } from "./LaunchData";
import { LaunchEditForm } from "./LaunchEditForm";

export type LaunchTableProps = {
	data: Data[];
	updateLaunch: (id: number, Launch: Partial<Data>) => Promise<void>;
	deleteLaunch: (id: number) => Promise<void>;
};

export const LaunchTable: React.FC<LaunchTableProps> = ({
	data,
	updateLaunch,
	deleteLaunch,
}) => {
	const { t } = useTranslation();
	const handleUpdateLaunch = (id: number, formData: Data) => {
		updateLaunch(id, formData);
	};

	const handleDeleteLaunch = (id: number) => {
		deleteLaunch(id);
	};

	const columns = (
		<>
			<th>Id</th>
			<th>{t("components.table.launchCode")}</th>
			<th>{t("components.table.date")}</th>
			<th>{t("components.table.success")}</th>
			<th>{t("components.table.rocket")}</th>
			<th>{t("components.table.crew")}</th>
			<th className="edit">{t("components.table.edit")}</th>
			<th className="delete">{t("components.table.delete")}</th>
		</>
	);

	const rows = data.map((item: Data) => (
		<tr key={item.id}>
			<td>{item.id}</td>
			<td>{item.launchCode}</td>
			<td>{item.date}</td>
			<td>{item.success.toLocaleString()}</td>
			<td>{item.rocket.id}</td>
			<td>{item.crew.id}</td>
			<td className="edit_col">
				<UpdateButton title={t("pages.launch")}>
					<LaunchEditForm
						initialData={item}
						onSubmit={handleUpdateLaunch}
					/>
				</UpdateButton>
			</td>
			<td className="del_col">
				<button
					type="button"
					className="del_btn"
					onClick={() => handleDeleteLaunch(item.id)}
				>
					<i className="fa fa-delete-left"></i>
				</button>
			</td>
		</tr>
	));
	return (
		<>
			<thead>
				<tr>{columns}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</>
	);
};
