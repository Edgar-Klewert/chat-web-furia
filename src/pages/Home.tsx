import { Calendar, ChevronRight, MessageSquare, Users } from "lucide-react";
import type React from "react";
import { NavLink } from "react-router-dom";
import MatchTicker from "../components/MatchTicker";
import { useLanguage } from "../contexts/LanguageContext";

const Home: React.FC = () => {
	const { t } = useLanguage();

	return (
		<div className="fade-in">
			{/* Hero Section */}
			<div className="relative h-[70vh] bg-gradient-to-b from-black to-[#1E1E1E] flex items-center">
				<div
					className="absolute inset-0 z-0 opacity-20"
					style={{
						backgroundImage:
							"url(https://images.pexels.com/photos/30696550/pexels-photo-30696550/free-photo-of-spodek-arena-em-katowice-durante-evento-de-esports.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<div className="max-w-7xl mx-auto px-4 z-10 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
						{t("home.welcome")}{" "}
						<span className="text-[#F9C80E]">{t("home.fans")}</span>
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
						{t("home.subtitle")}
					</p>
					<NavLink
						to="/chat"
						className="bg-[#F9C80E] text-black px-8 py-4 rounded-md font-bold text-lg inline-flex items-center hover:bg-opacity-90 transition-colors shadow-lg"
					>
						<MessageSquare className="mr-2" />
						{t("home.startChatting")}
						<ChevronRight className="ml-2" />
					</NavLink>
				</div>
			</div>

			{/* Match Ticker */}
			<div className="bg-[#2D2D2D] py-6">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-xl font-bold mb-4 text-white">
						{t("home.upcomingMatches")}
					</h2>
					<MatchTicker />
				</div>
			</div>

			{/* Features Section */}
			<div className="py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center text-white">
						{t("home.features")} <span className="text-[#F9C80E]">FURIA</span>
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
							<div className="w-16 h-16 bg-[#F9C80E] rounded-full flex items-center justify-center mb-4">
								<MessageSquare size={28} className="text-black" />
							</div>
							<h3 className="text-xl font-bold mb-2 text-white">
								{t("home.liveChat")}
							</h3>
							<p className="text-gray-300">{t("home.liveChatDesc")}</p>
						</div>

						<div className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
							<div className="w-16 h-16 bg-[#F9C80E] rounded-full flex items-center justify-center mb-4">
								<Calendar size={28} className="text-black" />
							</div>
							<h3 className="text-xl font-bold mb-2 text-white">
								{t("home.matchUpdates")}
							</h3>
							<p className="text-gray-300">{t("home.matchUpdatesDesc")}</p>
						</div>

						<div className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
							<div className="w-16 h-16 bg-[#F9C80E] rounded-full flex items-center justify-center mb-4">
								<Users size={28} className="text-black" />
							</div>
							<h3 className="text-xl font-bold mb-2 text-white">
								{t("home.teamInfo")}
							</h3>
							<p className="text-gray-300">{t("home.teamInfoDesc")}</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-black py-16 px-4 text-center">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-white">
						{t("home.ready")}
					</h2>
					<p className="text-xl mb-8 text-gray-300">
						{t("home.readySubtitle")}
					</p>
					<NavLink
						to="/chat"
						className="bg-[#F9C80E] text-black px-8 py-4 rounded-md font-bold text-lg inline-flex items-center hover:bg-opacity-90 transition-colors shadow-lg"
					>
						{t("home.startNow")}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Home;
