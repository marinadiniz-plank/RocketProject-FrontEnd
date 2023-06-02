import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/CSS/form.css";
import { Data } from "./RocketData";

export type FormProps = {
	formLabels: string[];
	initialData: Data;
	onSubmit: (id: number, formData: Data) => void;
};

export const RocketEditForm: React.FC<FormProps> = ({
	formLabels,
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
				{formLabels.map((item) => {
					if (item === "id") return null;
					return (
						<div key={item} className="form-field">
							<label htmlFor={item}>{item}</label>
							<input
								id={item}
								value={formData[item as keyof Data]}
								type="text"
								onChange={handleInputChange}
							/>
						</div>
					);
				})}
				<button className="btn" type="submit">
					<h4>{t("components.buttons.edit")}</h4>
				</button>
			</form>
		</>
	);
};
