import { format } from "date-fns";
import { Calendar, MapPin, Trophy } from "lucide-react";
import type React from "react";

interface Match {
	id: number;
	opponent: string;
	opponentLogo: string;
	date: Date;
	tournament: string;
	location: string;
	maps: string[];
}

const upcomingMatches: Match[] = [
	{
		id: 1,
		opponent: "Team Liquid",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/f/f3/Team_Liquid_2020_logo.svg/1200px-Team_Liquid_2020_logo.svg.png",
		date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
		tournament: "ESL Pro League",
		location: "Online",
		maps: ["Inferno", "Nuke", "Mirage"],
	},
	{
		id: 2,
		opponent: "NAVI",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/d/d6/Natus_Vincere_logo.svg/1200px-Natus_Vincere_logo.svg.png",
		date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
		tournament: "BLAST Premier",
		location: "Stockholm, Sweden",
		maps: ["Vertigo", "Ancient", "Dust2"],
	},
	{
		id: 3,
		opponent: "FaZe Clan",
		opponentLogo:
			"https://liquipedia.net/commons/images/thumb/c/cb/FaZe_Clan_logo.svg/1200px-FaZe_Clan_logo.svg.png",
		date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
		tournament: "IEM Cologne",
		location: "Cologne, Germany",
		maps: ["Overpass", "Inferno", "Mirage"],
	},
];

const MatchTicker: React.FC = () => {
	return (
		<div className="overflow-x-auto">
			<div className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-4">
				{upcomingMatches.map((match) => (
					<div
						key={match.id}
						className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-800 hover:border-[#F9C80E] transition-colors duration-300"
					>
						<header className="bg-black p-4 flex justify-between items-center">
							<div className="flex items-center space-x-3">
								<img
									src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
									alt="FURIA logo"
									className="w-8 h-8 object-contain"
								/>
								<span className="text-lg font-bold text-white">FURIA</span>
							</div>
							<span className="text-[#F9C80E] font-bold">VS</span>
							<div className="flex items-center space-x-3">
								<span className="text-lg font-bold text-white">
									{match.opponent}
								</span>
								<img
									src={match.opponentLogo}
									alt={`${match.opponent} logo`}
									className="w-8 h-8 object-contain"
								/>
							</div>
						</header>

						<section className="p-4">
							<div className="flex items-center text-gray-300 mb-2">
								<Calendar size={16} className="mr-2 text-[#F9C80E]" />
								<span>{format(match.date, "PPP, HH:mm")}</span>
							</div>

							<div className="flex items-center text-gray-300 mb-2">
								<Trophy size={16} className="mr-2 text-[#F9C80E]" />
								<span>{match.tournament}</span>
							</div>

							<div className="flex items-center text-gray-300 mb-3">
								<MapPin size={16} className="mr-2 text-[#F9C80E]" />
								<span>{match.location}</span>
							</div>

							<div className="mt-3 flex items-center justify-center flex-wrap gap-2">
								{match.maps.map((map) => (
									<span
										key={map}
										className="px-2 py-1 text-xs bg-black text-white rounded"
									>
										{map}
									</span>
								))}
							</div>
						</section>

						<footer className="border-t border-gray-800 p-3 text-center">
							<button
								type="button"
								className="text-[#F9C80E] font-medium hover:underline"
								aria-label={`Set reminder for match against ${match.opponent}`}
							>
								Set Reminder
							</button>
						</footer>
					</div>
				))}
			</div>
		</div>
	);
};

export default MatchTicker;
