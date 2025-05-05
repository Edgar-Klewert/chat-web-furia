import { Calendar, Home, Menu, MessageSquare, Users, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import FuriaLogo from "./FuriaLogo";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { t } = useLanguage();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-black px-4 py-3 sticky top-0 z-50 shadow-md">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<NavLink to="/" className="flex items-center space-x-3">
					<FuriaLogo size={40} />
					<span className="text-white font-bold text-xl">FURIA FANS</span>
				</NavLink>

				<div className="hidden md:flex items-center space-x-6">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`furia-nav-link flex items-center space-x-2 ${isActive ? "active" : ""}`
						}
						end
					>
						<Home size={18} />
						<span>{t("nav.home")}</span>
					</NavLink>
					<NavLink
						to="/chat"
						className={({ isActive }) =>
							`furia-nav-link flex items-center space-x-2 ${isActive ? "active" : ""}`
						}
					>
						<MessageSquare size={18} />
						<span>{t("nav.chat")}</span>
					</NavLink>
					<NavLink
						to="/team"
						className={({ isActive }) =>
							`furia-nav-link flex items-center space-x-2 ${isActive ? "active" : ""}`
						}
					>
						<Users size={18} />
						<span>{t("nav.team")}</span>
					</NavLink>
					<NavLink
						to="/matches"
						className={({ isActive }) =>
							`furia-nav-link flex items-center space-x-2 ${isActive ? "active" : ""}`
						}
					>
						<Calendar size={18} />
						<span>{t("nav.matches")}</span>
					</NavLink>
					<LanguageSwitcher />
				</div>

				<div className="md:hidden flex items-center space-x-4">
					<LanguageSwitcher />
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
						aria-label="Toggle menu"
						type="button" // Tipo explícito adicionado aqui
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#1E1E1E] py-4 px-4 absolute w-full left-0 top-full shadow-lg slide-in">
					<div className="flex flex-col space-y-4">
						{[
							{ to: "/", label: t("nav.home"), icon: <Home size={20} /> },
							{
								to: "/chat",
								label: t("nav.chat"),
								icon: <MessageSquare size={20} />,
							},
							{ to: "/team", label: t("nav.team"), icon: <Users size={20} /> },
							{
								to: "/matches",
								label: t("nav.matches"),
								icon: <Calendar size={20} />,
							},
						].map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`furia-nav-link py-3 px-4 rounded-md flex items-center space-x-3 ${isActive ? "bg-[#2D2D2D] active" : ""}`
								}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.icon}
								<span>{item.label}</span>
							</NavLink>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
