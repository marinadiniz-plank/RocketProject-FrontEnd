import React from "react";
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import { RocketEditForm } from "./RocketEditForm";

type Data = {
	id: number;
	name: string;
};

type RocketTableModal = {
	data: Data[];
	updateRocket: (id: number, rocket: Partial<Data>) => Promise<void>;
	deleteRocket: (id: number) => Promise<void>;
};

const RocketTable: React.FC<RocketTableModal> = ({
	data,
	updateRocket,
	deleteRocket,
}) => {
	const handleUpdateRocket = (id: number, formData: Data) => {
		updateRocket(id, formData);
	};

	const handleDeleteRocket = (id: number) => {
		deleteRocket(id);
	};

	return (
		<div className="data-div">
			<div className="divTable">
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th className="edit">Editar</th>
							<th className="delete">Excluir</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item: Data) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td className="edit_btn">
									<UpdateButton title={"Rocket"}>
										<RocketEditForm
											formLabels={Object.keys(item)}
											initialData={item}
											onSubmit={handleUpdateRocket}
										/>
									</UpdateButton>
								</td>
								<td className="del_btn">
									{/* {React.Children.toArray(children)[1]} */}
									<button
										type="button"
										className="del_btn"
										onClick={() => handleDeleteRocket(item.id)}
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

export default RocketTable;
