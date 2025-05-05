// Simple response generator for the FURIA chat bot
export const getFuriaResponses = (userInput: string): string => {
	const input = userInput.toLowerCase();

	// Arrays of responses by category
	const greetings = [
		"Olá, tudo bem? Como posso te ajudar hoje?",
		"E aí! Bem-vindo ao chat da FURIA! Como posso ajudar?",
		"Salve, fã da FURIA! O que você quer saber sobre nosso time?",
	];

	const teamInfo = [
		"A FURIA é uma organização brasileira de esports fundada em 2017, com times em diversos jogos como CS:GO, Valorant e outros.",
		"Nosso time de CS:GO conta com jogadores talentosos como arT, yuurih, KSCERATO, drop e saffee.",
		"A FURIA tem uma história de orgulho para o Brasil no cenário internacional!",
	];

	const nextMatch = [
		"O próximo jogo da FURIA será contra Team Liquid pelo ESL Pro League. Não perca!",
		"Temos um jogo importante chegando contra NAVI pelo BLAST Premier. Vai ser fogo!",
		"Nosso próximo desafio será contra FaZe Clan no IEM Cologne. Marque na agenda!",
	];

	const recentResults = [
		"Recentemente vencemos a partida contra G2 por 2-0 (16-12 em Nuke e 16-14 em Inferno).",
		"No último jogo, infelizmente perdemos para Vitality por 1-2 (16-10, 9-16, 11-16).",
		"Estamos em boa fase, com 3 vitórias nos últimos 4 jogos!",
	];

	const merchandise = [
		"Você pode encontrar todos os produtos oficiais da FURIA na loja oficial: shop.furia.gg",
		"Temos camisetas, moletons, bonés e muito mais na nossa loja oficial!",
		"A nova coleção de uniformes já está disponível na loja oficial da FURIA!",
	];

	const defaultResponses = [
		"Não entendi bem. Você pode perguntar sobre o time, próximos jogos ou resultados recentes.",
		"Hmm, não tenho certeza do que você quer saber. Tente perguntar sobre jogadores, torneios ou calendário de jogos.",
		"Desculpe, não compreendi. Quer saber sobre o time de CS:GO da FURIA, calendário ou resultados?",
	];

	// Check input for keywords and return appropriate response
	if (
		input.match(/oi|olá|ola|iae|e ai|salve|bom dia|boa tarde|boa noite|hey/)
	) {
		return getRandomResponse(greetings);
	}

	if (
		input.match(
			/time|equipe|jogadores|quem joga|players|elenco|história|historia/,
		)
	) {
		return getRandomResponse(teamInfo);
	}

	if (
		input.match(
			/próximo jogo|proximo jogo|quando joga|próxima partida|proxima partida|agenda|calendario|calendário/,
		)
	) {
		return getRandomResponse(nextMatch);
	}

	if (
		input.match(
			/resultado|últimos jogos|ultimos jogos|como foi|ganhou|perdeu|vitória|vitoria|derrota/,
		)
	) {
		return getRandomResponse(recentResults);
	}

	if (
		input.match(
			/loja|comprar|camisa|camiseta|moletom|merchandise|produtos|comprar/,
		)
	) {
		return getRandomResponse(merchandise);
	}

	return getRandomResponse(defaultResponses);
};

// Helper function to get a random response from an array
const getRandomResponse = (responses: string[]): string => {
	const randomIndex = Math.floor(Math.random() * responses.length);
	return responses[randomIndex];
};
