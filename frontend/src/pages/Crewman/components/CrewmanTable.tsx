import React from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import { Data } from "./CrewmanData";
import { CrewmanEditForm } from "./CrewmanEditForm";

type CrewmanTableModal = {
	data: Data[];
	updateCrewman: (id: number, crewman: Partial<Data>) => Promise<void>;
	deleteCrewman: (id: number) => Promise<void>;
};

const CrewmanTable: React.FC<CrewmanTableModal> = ({
	data,
	updateCrewman,
	deleteCrewman,
}) => {
	const { t } = useTranslation();
	const handleUpdateCrewman = (id: number, formData: Data) => {
		updateCrewman(id, formData);
	};

	const handleDeleteCrewman = (id: number) => {
		deleteCrewman(id);
	};

	return (
		<div className="data-div">
			<div className="divTable">
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>{t("components.table.name")}</th>
							<th>{t("components.table.patent")}</th>
							<th className="edit">{t("components.table.edit")}</th>
							<th className="delete">{t("components.table.delete")}</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item: Data) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.patent}</td>
								<td className="edit_col">
									<UpdateButton title={t("pages.crewman")}>
										<CrewmanEditForm
											formLabels={Object.keys(item)}
											initialData={item}
											onSubmit={handleUpdateCrewman}
										/>
									</UpdateButton>
								</td>
								<td className="del_col">
									{/* {React.Children.toArray(children)[1]} */}
									<button
										type="button"
										className="del_btn"
										onClick={() => handleDeleteCrewman(item.id)}
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

export default CrewmanTable;
