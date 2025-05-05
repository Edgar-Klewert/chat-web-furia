import { Calendar, Clock, MapPin } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface Match {
	id: number;
	opponent: string;
	opponentLogo: string;
	date: Date;
	tournament: string;
	tournamentLogo: string;
	location: string;
	maps: string[];
	result?: {
		score: [number, number];
		status: "win" | "loss" | "draw";
	};
}

const upcomingMatches: Match[] = [
	{
		id: 1,
		opponent: "Team Liquid",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/f/f3/Team_Liquid_2020_logo.svg/1200px-Team_Liquid_2020_logo.svg.png",
		date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
		tournament: "ESL Pro League",
		tournamentLogo:
			"https://img-cdn.hltv.org/eventlogo/4Ax2-3ZcvzGJYTkQ9QkO7u.png?ixlib=java-2.1.0&w=50&s=ecdc5802d98dc41988af7dcc7e9aef87",
		location: "Online",
		maps: ["Inferno", "Nuke", "Mirage"],
	},
	{
		id: 2,
		opponent: "NAVI",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/d/d6/Natus_Vincere_logo.svg/1200px-Natus_Vincere_logo.svg.png",
		date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
		tournament: "BLAST Premier",
		tournamentLogo:
			"https://img-cdn.hltv.org/eventlogo/5Kj3UfHgMbDTCsz-11GjBZ.png?ixlib=java-2.1.0&w=50&s=c04ec838de4afa7f26940ca77d9e97fc",
		location: "Stockholm, Sweden",
		maps: ["Vertigo", "Ancient", "Dust2"],
	},
	{
		id: 3,
		opponent: "FaZe Clan",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/c/cb/FaZe_Clan_logo.svg/1200px-FaZe_Clan_logo.svg.png",
		date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 days from now
		tournament: "IEM Cologne",
		tournamentLogo:
			"https://img-cdn.hltv.org/eventlogo/HsKFqKTz4s9nrRtgZUEZ8D.png?ixlib=java-2.1.0&w=50&s=20c0c7180838a47cab8fe4bf6b30e3ea",
		location: "Cologne, Germany",
		maps: ["Overpass", "Inferno", "Mirage"],
	},
];

const pastMatches: Match[] = [
	{
		id: 4,
		opponent: "Vitality",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/d/d4/Vitality_logo.svg/1200px-Vitality_logo.svg.png",
		date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
		tournament: "ESL Pro League",
		tournamentLogo:
			"https://img-cdn.hltv.org/eventlogo/4Ax2-3ZcvzGJYTkQ9QkO7u.png?ixlib=java-2.1.0&w=50&s=ecdc5802d98dc41988af7dcc7e9aef87",
		location: "Online",
		maps: ["Nuke", "Inferno", "Mirage"],
		result: {
			score: [1, 2],
			status: "loss",
		},
	},
	{
		id: 5,
		opponent: "G2",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/3/3a/G2_Esports_2020_logo.svg/1200px-G2_Esports_2020_logo.svg.png",
		date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
		tournament: "ESL Pro League",
		tournamentLogo:
			"https://img-cdn.hltv.org/eventlogo/4Ax2-3ZcvzGJYTkQ9QkO7u.png?ixlib=java-2.1.0&w=50&s=ecdc5802d98dc41988af7dcc7e9aef87",
		location: "Online",
		maps: ["Nuke", "Inferno"],
		result: {
			score: [2, 0],
			status: "win",
		},
	},
	{
		id: 6,
		opponent: "Astralis",
		opponentLogo:
			"https://liquipedia.net/commons/images/6/6e/Astralis_logo.svg",
		date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), // 8 days ago
		tournament: "BLAST Premier",
		tournamentLogo:
			"https://img-cdn.hltv.org/eventlogo/5Kj3UfHgMbDTCsz-11GjBZ.png?ixlib=java-2.1.0&w=50&s=c04ec838de4afa7f26940ca77d9e97fc",
		location: "Copenhagen, Denmark",
		maps: ["Overpass", "Inferno", "Ancient"],
		result: {
			score: [2, 1],
			status: "win",
		},
	},
];

const getStatusColor = (status?: "win" | "loss" | "draw") => {
	switch (status) {
		case "win":
			return "bg-green-500";
		case "loss":
			return "bg-red-500";
		case "draw":
			return "bg-yellow-500";
		default:
			return "bg-gray-500";
	}
};

const getTimeUntilMatch = (date: Date) => {
	const now = new Date();
	const diff = date.getTime() - now.getTime();

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	if (days > 0) {
		return `${days}d ${hours}h`;
	}
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	return `${hours}h ${minutes}m`;
};

const formatMatchDate = (date: Date) => {
	return new Intl.DateTimeFormat("pt-BR", {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	}).format(date);
};

const Matches: React.FC = () => {
	const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

	return (
		<div className="max-w-7xl mx-auto px-4 py-8 fade-in">
			<h1 className="text-3xl font-bold mb-8 text-white">
				FURIA <span className="text-[#F9C80E]">Matches</span>
			</h1>

			{/* Tabs */}
			<div className="flex border-b border-gray-700 mb-8">
				<button
					type="button"
					className={`px-6 py-3 font-medium text-sm flex items-center ${activeTab === "upcoming" ? "text-[#F9C80E] border-b-2 border-[#F9C80E]" : "text-gray-400 hover:text-white"}`}
					onClick={() => setActiveTab("upcoming")}
				>
					<Calendar size={18} className="mr-2" />
					Upcoming Matches
				</button>
				<button
					type="button"
					className={`px-6 py-3 font-medium text-sm flex items-center ${activeTab === "past" ? "text-[#F9C80E] border-b-2 border-[#F9C80E]" : "text-gray-400 hover:text-white"}`}
					onClick={() => setActiveTab("past")}
				>
					<Clock size={18} className="mr-2" />
					Past Matches
				</button>
			</div>

			{/* Matches List */}
			<div className="space-y-6">
				{activeTab === "upcoming" &&
					(upcomingMatches.length > 0 ? (
						upcomingMatches.map((match) => (
							<div
								key={match.id}
								className="bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
							>
								{/* Match Header */}
								<div className="bg-black p-4 flex justify-between items-center">
									<div className="flex items-center space-x-3">
										<img
											src={match.tournamentLogo}
											alt={match.tournament}
											className="w-8 h-8 object-contain"
										/>
										<span className="text-white">{match.tournament}</span>
									</div>
									<div className="flex items-center">
										<Clock size={16} className="text-[#F9C80E] mr-2" />
										<span className="text-white text-sm font-medium">
											{getTimeUntilMatch(match.date)}
										</span>
									</div>
								</div>

								{/* Match Content */}
								<div className="p-6">
									<div className="flex flex-col md:flex-row justify-between items-center mb-6">
										<div className="flex flex-col items-center md:items-end mb-4 md:mb-0">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/FURIA_logo.svg/1200px-FURIA_logo.svg.png"
												alt="FURIA"
												className="w-16 h-16 object-contain mb-2"
											/>
											<span className="text-xl font-bold text-white">
												FURIA
											</span>
										</div>

										<div className="text-center px-8">
											<div className="text-3xl font-semibold text-[#F9C80E]">
												vs
											</div>
										</div>

										<div className="flex flex-col items-center md:items-start">
											<img
												src={match.opponentLogo}
												alt={match.opponent}
												className="w-16 h-16 object-contain mb-2"
											/>
											<span className="text-xl font-bold text-white">
												{match.opponent}
											</span>
										</div>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-sm text-gray-400">
											{match.location}
										</span>
										<span className="text-sm text-gray-400">
											{formatMatchDate(match.date)}
										</span>
									</div>
								</div>
							</div>
						))
					) : (
						<div className="text-center text-white">No upcoming matches</div>
					))}

				{activeTab === "past" &&
					(pastMatches.length > 0 ? (
						pastMatches.map((match) => (
							<div
								key={match.id}
								className="bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
							>
								{/* Match Header */}
								<div className="bg-black p-4 flex justify-between items-center">
									<div className="flex items-center space-x-3">
										<img
											src={match.tournamentLogo}
											alt={match.tournament}
											className="w-8 h-8 object-contain"
										/>
										<span className="text-white">{match.tournament}</span>
									</div>
									<div className="flex items-center">
										<MapPin size={16} className="text-[#F9C80E] mr-2" />
										<span className="text-white text-sm font-medium">
											{match.location}
										</span>
									</div>
								</div>

								{/* Match Content */}
								<div className="p-6">
									<div className="flex flex-col md:flex-row justify-between items-center mb-6">
										<div className="flex flex-col items-center md:items-end mb-4 md:mb-0">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/FURIA_logo.svg/1200px-FURIA_logo.svg.png"
												alt="FURIA"
												className="w-16 h-16 object-contain mb-2"
											/>
											<span className="text-xl font-bold text-white">
												FURIA
											</span>
										</div>

										<div className="text-center px-8">
											<div className="text-3xl font-semibold text-[#F9C80E]">
												vs
											</div>
										</div>

										<div className="flex flex-col items-center md:items-start">
											<img
												src={match.opponentLogo}
												alt={match.opponent}
												className="w-16 h-16 object-contain mb-2"
											/>
											<span className="text-xl font-bold text-white">
												{match.opponent}
											</span>
										</div>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-sm text-gray-400">
											{match.location}
										</span>
										<span className="text-sm text-gray-400">
											{formatMatchDate(match.date)}
										</span>
										<span
											className={`text-sm ${getStatusColor(match.result?.status)}`}
										>
											{match.result?.status}
										</span>
									</div>
								</div>
							</div>
						))
					) : (
						<div className="text-center text-white">No past matches</div>
					))}
			</div>
		</div>
	);
};

export default Matches;
