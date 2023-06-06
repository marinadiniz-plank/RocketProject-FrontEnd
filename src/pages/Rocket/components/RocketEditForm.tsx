import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/form.css";
import { Data } from "./RocketData";

export type FormProps = {
	initialData: Data;
	onSubmit: (id: number, formData: Data) => void;
};

export const RocketEditForm: React.FC<FormProps> = ({
	initialData,
	onSubmit,
}) => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState<Data>(initialData);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(formData);

		onSubmit(formData.id, formData);
	};

	return (
		<>
			<h5 className="form-h5">{t("components.form.edit.salute")}</h5>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-field">
					<label htmlFor={"name"}>
						{t("components.form.add.labels.name")}:
					</label>
					<input
						id={"name"}
						value={formData.name}
						type="text"
						onChange={handleInputChange}
					/>
				</div>
				<button className="btn" type="submit">
					<h4>{t("components.buttons.edit")}</h4>
				</button>
			</form>
		</>
	);
};
