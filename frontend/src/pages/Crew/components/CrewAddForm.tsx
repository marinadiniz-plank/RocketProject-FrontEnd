import React, { useState } from "react";
import "../../../assets/CSS/form.css";
import { Data } from "./CrewData";

export type FormProps = {
	onSubmit: (formData: Data) => void;
};

export const CrewAddForm: React.FC<FormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<Data>({
		id: 0,
		name: "",
		crewman: [],
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		formData["crewman"] = JSON.parse(`[${formData.crewman}]`);
		onSubmit(formData);
	};

	return (
		<>
			<h5 className="form-h5">Please, provide a name for this new crew</h5>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-field">
					<label htmlFor="name">Name:</label>
					<input
						id="name"
						placeholder="name"
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor="crewman">Crewmans:</label>
					<input
						id="crewman"
						placeholder="Ex: 1, 2, 3"
						type="text"
						onChange={handleInputChange}
					/>
				</div>
				<button className="btn" type="submit">
					<h4>Add</h4>
				</button>
			</form>
		</>
	);
};
