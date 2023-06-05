import React from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import GenericTable from "../../../components/Table";
import { Data } from "./CrewData";
import { CrewEditForm } from "./CrewEditForm";

export type CrewTableProps = {
	data: Data[];
	updateCrew: (id: number, crew: Partial<Data>) => Promise<void>;
	deleteCrew: (id: number) => Promise<void>;
};

export const CrewTable: React.FC<CrewTableProps> = ({
	data,
	updateCrew,
	deleteCrew,
}) => {
	const { t } = useTranslation();
	const handleUpdateCrew = (id: number, formData: Data) => {
		updateCrew(id, formData);
	};

	const handleDeleteCrew = (id: number) => {
		deleteCrew(id);
	};

	const columns = (
		<>
			<th>Id</th>
			<th>{t("components.table.name")}</th>
			<th>{t("components.table.crewmans")}</th>
			<th className="edit">{t("components.table.edit")}</th>
			<th className="delete">{t("components.table.delete")}</th>
		</>
	);

	const rows = data.map((item: Data) => (
		<tr key={item.id}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.crewman.map((crewmanObj) => crewmanObj.id).join(", ")}</td>
			<td className="edit_col">
				<UpdateButton title={t("pages.crew")}>
					<CrewEditForm initialData={item} onSubmit={handleUpdateCrew} />
				</UpdateButton>
			</td>
			<td className="del_col">
				<button
					type="button"
					className="del_btn"
					onClick={() => handleDeleteCrew(item.id)}
				>
					<i className="fa fa-delete-left"></i>
				</button>
			</td>
		</tr>
	));

	return <GenericTable columns={columns} rows={rows} />;
};
