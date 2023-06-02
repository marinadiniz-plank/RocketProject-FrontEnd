import React from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import { Data } from "./CrewData";
import { CrewEditForm } from "./CrewEditForm";

type CrewTableModal = {
	data: Data[];
	updateCrew: (id: number, crew: Partial<Data>) => Promise<void>;
	deleteCrew: (id: number) => Promise<void>;
};

export const CrewTable: React.FC<CrewTableModal> = ({
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

	return (
		<div className="data-div">
			<div className="divTable">
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>{t("components.table.name")}</th>
							<th>{t("components.table.crewmans")}</th>
							<th className="edit">{t("components.table.edit")}</th>
							<th className="delete">{t("components.table.delete")}</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item: Data) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>
									{item.crewman
										.map((crewmanObj) => crewmanObj.id)
										.join(", ")}
								</td>
								<td className="edit_col">
									<UpdateButton title={t("pages.crew")}>
										<CrewEditForm
											initialData={item}
											onSubmit={handleUpdateCrew}
										/>
									</UpdateButton>
								</td>
								<td className="del_col">
									{/* {React.Children.toArray(children)[1]} */}
									<button
										type="button"
										className="del_btn"
										onClick={() => handleDeleteCrew(item.id)}
									>
										<i className="fa fa-delete-left"></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
