import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/form.css";
import { Data } from "./LaunchData";

export type FormProps = {
	onSubmit: (formData: Data) => void;
};

export const LaunchAddForm: React.FC<FormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<Data>({
		id: 0,
		launchCode: 0,
		date: "",
		success: false,
		rocket: { id: 0, name: "" },
		crew: { id: 0, name: "", crewman: [] },
	});
	const { t } = useTranslation();
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		formData["rocket"] = JSON.parse(`${formData.rocket}`);
		formData["crew"] = JSON.parse(`${formData.crew}`);

		const successString = formData["success"].toString();
		formData["success"] = successString === "true" ? true : false;

		onSubmit(formData);
	};

	return (
		<>
			<h5 className="form-h5">
				{t("components.form.add.salute")}
				{t("components.form.add.entities.launch")}
			</h5>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-field">
					<label htmlFor="launchCode">
						{t("components.form.add.labels.launchCode")}:
					</label>
					<input
						id="launchCode"
						placeholder="Name"
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor="date">
						{t("components.form.add.labels.date")}:
					</label>
					<input
						id="date"
						placeholder="YYYY/MM/DD"
						type="date"
						onChange={handleInputChange}
					/>
					<label htmlFor="success">
						{t("components.form.add.labels.success")}:
					</label>
					<input
						id="success"
						placeholder="True"
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor="rocket">
						{t("components.form.add.labels.rocket")}:
					</label>
					<input
						id="rocket"
						placeholder="Ex: 1"
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor="crew">
						{t("components.form.add.labels.crew")}:
					</label>
					<input
						id="crew"
						placeholder="Ex: 3"
						type="text"
						onChange={handleInputChange}
					/>
				</div>
				<button className="btn" type="submit">
					<h4>{t("components.buttons.add")}</h4>
				</button>
			</form>
		</>
	);
};
