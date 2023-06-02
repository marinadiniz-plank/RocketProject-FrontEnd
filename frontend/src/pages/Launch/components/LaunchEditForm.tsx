import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/form.css";
import { Data } from "./LaunchData";

export type FormProps = {
	initialData: Data;
	onSubmit: (id: number, formData: Data) => void;
};

export const LaunchEditForm: React.FC<FormProps> = ({
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

		const successString = formData["success"].toString();
		formData["success"] = successString === "true" ? true : false;
		onSubmit(formData.id, formData);
	};

	return (
		<>
			<h5 className="form-h5">{t("components.form.edit.salute")}</h5>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-field">
					<label htmlFor={"launchCode"}>
						{t("components.form.add.labels.launchCode")}:
					</label>
					<input
						id={"launchCode"}
						value={formData.launchCode}
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor={"date"}>
						{t("components.form.add.labels.date")}:
					</label>
					<input
						id={"date"}
						value={new Date(formData.date).toLocaleDateString()}
						type="date"
						onChange={handleInputChange}
					/>
					<label htmlFor={"success"}>
						{t("components.form.add.labels.success")}:
					</label>
					<input
						id={"success"}
						value={formData.success.toString()}
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor={"rocket"}>
						{t("components.form.add.labels.rocket")}:
					</label>
					<input
						id={"rocket"}
						value={formData.rocket.id}
						type="text"
						onChange={handleInputChange}
					/>
					<label htmlFor={"crew"}>
						{t("components.form.add.labels.crew")}:
					</label>
					<input
						id={"crew"}
						value={formData.crew.id}
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
