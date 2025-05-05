import type React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="flex items-center space-x-2">
			<button
				type="button"
				onClick={() => setLanguage("pt")}
				aria-pressed={language === "pt"}
				className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
					language === "pt"
						? "bg-[#F9C80E] text-black"
						: "text-gray-400 hover:text-white"
				}`}
			>
				PT
			</button>
			<button
				type="button"
				onClick={() => setLanguage("en")}
				aria-pressed={language === "en"}
				className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
					language === "en"
						? "bg-[#F9C80E] text-black"
						: "text-gray-400 hover:text-white"
				}`}
			>
				EN
			</button>
		</div>
	);
};

export default LanguageSwitcher;
