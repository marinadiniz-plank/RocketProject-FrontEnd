/* eslint-disable prettier/prettier */
import { useTranslation } from "react-i18next";
import '../assets/CSS/dropMenu.css';
export function LanguageSelector() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-selector-container">

            <select
                className="language-selector"
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
            >
                <option
                    className="lang"
                    value="en"
                >
                    🇺🇸 English
                </option>
                <option
                    className="lang"
                    value="pt"
                >
                    🇧🇷 Português
                </option>
                <option
                    className="lang"
                    value="fran"
                >
                    🇫🇷 French
                </option>
            </select>
        </div>
    );
}


