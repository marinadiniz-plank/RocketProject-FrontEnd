import React from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import { RocketEditForm } from "./RocketEditForm";

type Data = {
	id: number;
	name: string;
};

export type RocketTableProps = {
	data: Data[];
	updateRocket: (id: number, rocket: Partial<Data>) => Promise<void>;
	deleteRocket: (id: number) => Promise<void>;
};

const RocketTable: React.FC<RocketTableProps> = ({
	data,
	updateRocket,
	deleteRocket,
}) => {
	const { t } = useTranslation();
	const handleUpdateRocket = (id: number, formData: Data) => {
		updateRocket(id, formData);
	};

	const handleDeleteRocket = (id: number) => {
		deleteRocket(id);
	};

	const columns = (
		<>
			<th>Id</th>
			<th>{t("components.table.name")}</th>
			<th className="edit">{t("components.table.edit")}</th>
			<th className="delete">{t("components.table.delete")}</th>
		</>
	);

	const rows = data.map((item: Data) => (
		<tr key={item.id}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td className="edit_col">
				<UpdateButton title={t("pages.rocket")}>
					<RocketEditForm
						initialData={item}
						onSubmit={handleUpdateRocket}
					/>
				</UpdateButton>
			</td>
			<td className="del_col">
				{/* {React.Children.toArray(children)[1]} */}
				<a
					href="#"
					className="del_btn"
					onClick={() => handleDeleteRocket(item.id)}
				>
					<i className="fa fa-delete-left"></i>
				</a>
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

export default RocketTable;
