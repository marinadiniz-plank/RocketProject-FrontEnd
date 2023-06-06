import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/form.css";
import { Data } from "./RocketData";

export type FormProps = {
	onSubmit: (formData: Data) => void;
};

export const RocketAddForm: React.FC<FormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<Data>({ id: 0, name: "" });
	const { t } = useTranslation();
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(formData);
	};

	return (
		<>
			<h5 className="form-h5">
				{t("components.form.add.salute")}
				{t("components.form.add.entities.rocket")}
			</h5>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-field">
					<label htmlFor="name">
						{t("components.form.add.labels.name")}:
					</label>
					<input
						id="name"
						placeholder="name"
						type="text"
						value={formData.name}
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
