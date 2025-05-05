import type React from "react";
import { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const translations = {
	pt: {
		"nav.home": "Início",
		"nav.chat": "Chat",
		"nav.team": "Time",
		"nav.matches": "Partidas",
		"home.welcome": "Bem-vindo ao",
		"home.fans": "Chat dos Fãs da FURIA",
		"home.subtitle":
			"Fique conectado com as últimas notícias, partidas e converse com outros fãs da FURIA!",
		"home.startChatting": "Começar a Conversar",
		"home.upcomingMatches": "Próximas Partidas",
		"home.features": "Recursos do Chat para",
		"home.liveChat": "Chat ao Vivo",
		"home.liveChatDesc":
			"Conecte-se com outros fãs da FURIA durante as partidas e discuta estratégias, jogadas e mais.",
		"home.matchUpdates": "Atualizações de Partidas",
		"home.matchUpdatesDesc":
			"Receba atualizações em tempo real sobre placares, estatísticas dos jogadores e classificações dos torneios.",
		"home.teamInfo": "Informações do Time",
		"home.teamInfoDesc":
			"Acesse perfis de jogadores, estatísticas do time e as últimas notícias sobre seus jogadores favoritos da FURIA.",
		"home.ready": "Pronto para se juntar à comunidade FURIA?",
		"home.readySubtitle":
			"Comece a conversar com outros fãs e nunca perca uma atualização sobre seu time favorito!",
		"home.startNow": "Começar Agora",
	},
	en: {
		"nav.home": "Home",
		"nav.chat": "Chat",
		"nav.team": "Team",
		"nav.matches": "Matches",
		"home.welcome": "Welcome to",
		"home.fans": "FURIA Fans Chat",
		"home.subtitle":
			"Stay connected with the latest news, matches, and chat with other FURIA fans!",
		"home.startChatting": "Start Chatting",
		"home.upcomingMatches": "Upcoming Matches",
		"home.features": "Chat Features for",
		"home.liveChat": "Live Chat",
		"home.liveChatDesc":
			"Connect with other FURIA fans during matches and discuss strategies, plays, and more.",
		"home.matchUpdates": "Match Updates",
		"home.matchUpdatesDesc":
			"Get real-time updates on scores, player stats, and tournament standings.",
		"home.teamInfo": "Team Info",
		"home.teamInfoDesc":
			"Access player profiles, team stats, and the latest news about your favorite FURIA players.",
		"home.ready": "Ready to join the FURIA community?",
		"home.readySubtitle":
			"Start chatting with other fans and never miss an update about your favorite team!",
		"home.startNow": "Start Now",
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>("pt");

	const t = (key: string): string => {
		return (
			translations[language][key as keyof (typeof translations)["en"]] || key
		);
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
