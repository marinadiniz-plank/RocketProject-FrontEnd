import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/CSS/buttons.css";
import { Modal } from "../Modal/Modal";

type AddButtonProps = {
	title: string;
	children: ReactNode;
};

const AddButton: React.FC<AddButtonProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<a href="#" className="add_btn" onClick={() => setIsOpen(true)}>
				<h5>{t("components.buttons.add")}</h5>
			</a>
			{isOpen && (
				<Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
					{children}
				</Modal>
			)}
		</>
	);
};

export default AddButton;
