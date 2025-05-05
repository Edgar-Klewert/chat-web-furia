import { Calendar, Star, TrendingUp, Trophy } from "lucide-react";
import type React from "react";

interface Player {
	id: number;
	name: string;
	nickname: string;
	role: string;
	photoUrl: string;
	nationality: string;
	age: number;
	stats: {
		rating: number;
		killsPerRound: number;
		headshots: number;
		mapsPlayed: number;
	};
}

const players: Player[] = [
	{
		id: 1,
		name: "Andrei Piovezan",
		nickname: "arT",
		role: "In-game Leader",
		photoUrl:
			"https://img-cdn.hltv.org/playerbodyshot/GkzVY0YB8Uf9MN3QJZ2sv4.png?ixlib=java-2.1.0&w=400&s=8c938b949b34c558387a10a5a95284a8",
		nationality: "Brasil",
		age: 27,
		stats: {
			rating: 1.05,
			killsPerRound: 0.67,
			headshots: 48.2,
			mapsPlayed: 187,
		},
	},
	{
		id: 2,
		name: "Yuri Santos",
		nickname: "yuurih",
		role: "Rifler",
		photoUrl:
			"https://img-cdn.hltv.org/playerbodyshot/FLthi1Y15ocSu2hkp2JYPJ.png?ixlib=java-2.1.0&w=400&s=14e6d9d86a4025a1ccd5b214c4a42baf",
		nationality: "Brasil",
		age: 24,
		stats: {
			rating: 1.18,
			killsPerRound: 0.74,
			headshots: 51.3,
			mapsPlayed: 201,
		},
	},
	{
		id: 3,
		name: "Kaike Cerato",
		nickname: "KSCERATO",
		role: "Rifler",
		photoUrl:
			"https://img-cdn.hltv.org/playerbodyshot/DT-2SEfexYHKu2rk7UOiDl.png?ixlib=java-2.1.0&w=400&s=c5cc0968017fb068d9bd5adcc37550be",
		nationality: "Brasil",
		age: 24,
		stats: {
			rating: 1.22,
			killsPerRound: 0.76,
			headshots: 49.5,
			mapsPlayed: 198,
		},
	},
	{
		id: 4,
		name: "André Abreu",
		nickname: "drop",
		role: "Support",
		photoUrl:
			"https://liquipedia.net/commons/images/thumb/7/77/Drop_at_PGL_Cluj-Napoca_2025.jpg/900px-Drop_at_PGL_Cluj-Napoca_2025.jpg",
		nationality: "Brasil",
		age: 21,
		stats: {
			rating: 1.09,
			killsPerRound: 0.68,
			headshots: 47.8,
			mapsPlayed: 178,
		},
	},
	{
		id: 5,
		name: "Rafael Costa",
		nickname: "saffee",
		role: "AWPer",
		photoUrl:
			"https://liquipedia.net/commons/images/thumb/7/77/Drop_at_PGL_Cluj-Napoca_2025.jpg/900px-Drop_at_PGL_Cluj-Napoca_2025.jpg",
		nationality: "Brasil",
		age: 28,
		stats: {
			rating: 1.14,
			killsPerRound: 0.72,
			headshots: 38.6,
			mapsPlayed: 183,
		},
	},
];

const achievements = [
	{
		id: 1,
		title: "ESL Pro League Season 16",
		placement: "3-4th Place",
		year: 2022,
	},
	{
		id: 2,
		title: "IEM Fall 2021: South America",
		placement: "1st Place",
		year: 2021,
	},
	{
		id: 3,
		title: "DreamHack Masters Spring 2021",
		placement: "2nd Place",
		year: 2021,
	},
	{
		id: 4,
		title: "BLAST Premier: Global Final 2020",
		placement: "3-4th Place",
		year: 2021,
	},
	{
		id: 5,
		title: "ESL Pro League Season 12",
		placement: "3-4th Place",
		year: 2020,
	},
];

const TeamInfo: React.FC = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-8 fade-in">
			<h1 className="text-3xl font-bold mb-8 text-white">
				FURIA CS:GO <span className="text-[#F9C80E]">Team</span>
			</h1>

			{/* Team Overview */}
			<div className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg mb-10">
				<div className="flex flex-col md:flex-row gap-6">
					<div className="w-full md:w-1/3">
						<img
							src="hhttps://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
							alt="FURIA Logo"
							className="w-full max-h-64 object-contain"
						/>
					</div>

					<div className="w-full md:w-2/3">
						<h2 className="text-2xl font-bold mb-4 text-white">
							Team Overview
						</h2>

						<p className="text-gray-300 mb-4">
							FURIA Esports is a Brazilian professional esports organization
							founded in August 2017. The CS:GO division has established itself
							as one of the top teams in the world, representing Brazil on the
							international stage.
						</p>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
							<div className="bg-[#1E1E1E] p-4 rounded-lg text-center">
								<Trophy size={24} className="text-[#F9C80E] mx-auto mb-2" />
								<p className="text-gray-400 text-sm">HLTV Ranking</p>
								<p className="text-white font-bold text-xl">#7</p>
							</div>

							<div className="bg-[#1E1E1E] p-4 rounded-lg text-center">
								<Star size={24} className="text-[#F9C80E] mx-auto mb-2" />
								<p className="text-gray-400 text-sm">Tournament Wins</p>
								<p className="text-white font-bold text-xl">12</p>
							</div>

							<div className="bg-[#1E1E1E] p-4 rounded-lg text-center">
								<Calendar size={24} className="text-[#F9C80E] mx-auto mb-2" />
								<p className="text-gray-400 text-sm">Founded</p>
								<p className="text-white font-bold text-xl">2017</p>
							</div>

							<div className="bg-[#1E1E1E] p-4 rounded-lg text-center">
								<TrendingUp size={24} className="text-[#F9C80E] mx-auto mb-2" />
								<p className="text-gray-400 text-sm">Win Rate</p>
								<p className="text-white font-bold text-xl">68%</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Player Roster */}
			<h2 className="text-2xl font-bold mb-6 text-white">Player Roster</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
				{players.map((player) => (
					<div
						key={player.id}
						className="bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-102 transition-transform duration-300"
					>
						<div className="h-64 overflow-hidden bg-black">
							<img
								src={player.photoUrl}
								alt={player.nickname}
								className="w-full h-full object-cover object-top"
							/>
						</div>

						<div className="p-5">
							<div className="flex justify-between items-start mb-3">
								<div>
									<h3 className="text-[#F9C80E] font-bold text-2xl">
										{player.nickname}
									</h3>
									<p className="text-gray-300">{player.name}</p>
								</div>
								<span className="bg-[#1E1E1E] text-white px-3 py-1 rounded-full text-sm">
									{player.role}
								</span>
							</div>

							<div className="flex justify-between mb-4">
								<div>
									<p className="text-gray-400 text-xs">NATIONALITY</p>
									<p className="text-white">{player.nationality}</p>
								</div>
								<div>
									<p className="text-gray-400 text-xs">AGE</p>
									<p className="text-white">{player.age}</p>
								</div>
							</div>

							<div className="border-t border-gray-700 pt-4">
								<h4 className="text-white text-sm font-medium mb-2">STATS</h4>

								<div className="grid grid-cols-2 gap-3">
									<div>
										<p className="text-gray-400 text-xs">RATING 2.0</p>
										<p className="text-[#F9C80E] font-bold">
											{player.stats.rating}
										</p>
									</div>
									<div>
										<p className="text-gray-400 text-xs">KILLS/ROUND</p>
										<p className="text-white">{player.stats.killsPerRound}</p>
									</div>
									<div>
										<p className="text-gray-400 text-xs">HEADSHOT %</p>
										<p className="text-white">{player.stats.headshots}%</p>
									</div>
									<div>
										<p className="text-gray-400 text-xs">MAPS PLAYED</p>
										<p className="text-white">{player.stats.mapsPlayed}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Achievements */}
			<h2 className="text-2xl font-bold mb-6 text-white">
				Recent Achievements
			</h2>

			<div className="bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-black">
							<tr>
								<th className="text-left py-4 px-6 text-white">Tournament</th>
								<th className="text-left py-4 px-6 text-white">Placement</th>
								<th className="text-left py-4 px-6 text-white">Year</th>
							</tr>
						</thead>
						<tbody>
							{achievements.map((achievement, index) => (
								<tr
									key={achievement.id}
									className={`${index % 2 === 0 ? "bg-[#2D2D2D]" : "bg-[#262626]"} hover:bg-[#333333] transition-colors`}
								>
									<td className="py-4 px-6 text-white">{achievement.title}</td>
									<td className="py-4 px-6 text-[#F9C80E] font-medium">
										{achievement.placement}
									</td>
									<td className="py-4 px-6 text-gray-300">
										{achievement.year}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TeamInfo;
