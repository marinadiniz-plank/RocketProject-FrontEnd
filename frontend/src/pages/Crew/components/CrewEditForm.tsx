import React, { useState } from "react";
import "../../../assets/CSS/form.css";
import { Data } from "./CrewData";

export type FormProps = {
	initialData: Data;
	onSubmit: (id: number, formData: Data) => void;
};

export const CrewEditForm: React.FC<FormProps> = ({
	initialData,
	onSubmit,
}) => {
	const [formData, setFormData] = useState<Data>(initialData);
	const [crewman, setCrewman] = useState<string>(
		initialData.crewman.map((crew) => crew.id).join(", ")
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	const handleInputChangeCrewman = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setCrewman(event.target.value);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		formData["crewman"] = JSON.parse(`[${crewman}]`);
		onSubmit(formData.id, formData);
	};

	return (
		<>
			<h5 className="form-h5">Please, give a new name for this crew</h5>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-field">
					<label htmlFor={"name"}>Name:</label>
					<input
						id={"name"}
						value={formData.name}
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor={"crewman"}>Crewmans:</label>
					<input
						id={"crewman"}
						value={crewman}
						type="text"
						onChange={handleInputChangeCrewman}
					/>
				</div>

				<button className="btn" type="submit">
					<h4>Update</h4>
				</button>
			</form>
		</>
	);
};
