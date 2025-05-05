import { format } from "date-fns";
import { Calendar, Image, SendHorizontal, Smile } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFuriaResponses } from "../utils/chatUtils";

interface Message {
	id: string;
	text: string;
	sender: "user" | "bot";
	timestamp: Date;
}

const Chat: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			id: "1",
			text: "Olá! Bem-vindo ao chat da FURIA! Como posso ajudar você hoje?",
			sender: "bot",
			timestamp: new Date(),
		},
	]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);

	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [scrollToBottom]);

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();

		if (!input.trim()) return;

		// Add user message
		const userMessage: Message = {
			id: Date.now().toString(),
			text: input,
			sender: "user",
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setIsTyping(true);

		// Simulate bot response
		setTimeout(() => {
			const botResponse = getFuriaResponses(input);

			const botMessage: Message = {
				id: (Date.now() + 1).toString(),
				text: botResponse,
				sender: "bot",
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
			setIsTyping(false);
		}, 1500);
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-64px-80px)] fade-in">
			<div className="bg-[#2D2D2D] rounded-lg shadow-xl h-full flex flex-col">
				{/* Chat header */}
				<div className="bg-black p-4 rounded-t-lg flex items-center border-b border-gray-800">
					<div className="relative mr-3">
						<img
							src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
							alt="FURIA Logo"
							className="w-10 h-10"
						/>
						<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
					</div>
					<div>
						<h2 className="font-bold text-lg text-white">FURIA Chat</h2>
						<p className="text-sm text-gray-400">
							Online | Respondendo rapidamente
						</p>
					</div>
				</div>

				{/* Messages area */}
				<div className="flex-grow p-4 overflow-y-auto bg-[#1E1E1E]">
					<div className="space-y-4">
						{messages.map((message) => (
							<div
								key={message.id}
								className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
							>
								<div
									className={`max-w-[80%] rounded-lg p-3 ${
										message.sender === "user"
											? "bg-[#2D2D2D] text-white rounded-tr-none"
											: "bg-[#F9C80E] text-black rounded-tl-none"
									} slide-in`}
								>
									<p>{message.text}</p>
									<p
										className={`text-xs mt-1 ${
											message.sender === "user"
												? "text-gray-400"
												: "text-gray-700"
										}`}
									>
										{format(message.timestamp, "HH:mm")}
									</p>
								</div>
							</div>
						))}

						{isTyping && (
							<div className="flex justify-start">
								<div className="bg-[#F9C80E] text-black rounded-lg rounded-tl-none p-3 max-w-[80%]">
									<div className="flex space-x-2">
										<div
											className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"
											style={{ animationDelay: "0ms" }}
										/>
										<div
											className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"
											style={{ animationDelay: "150ms" }}
										/>
										<div
											className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"
											style={{ animationDelay: "300ms" }}
										/>
									</div>
								</div>
							</div>
						)}

						<div ref={messagesEndRef} />
					</div>
				</div>

				{/* Input area */}
				<div className="p-3 border-t border-gray-800">
					<form
						onSubmit={handleSendMessage}
						className="flex items-center space-x-2"
					>
						<button
							type="button"
							aria-label="Smile emoji"
							className="text-gray-400 hover:text-[#F9C80E] p-2 rounded-full transition-colors"
						>
							<Smile size={22} />
						</button>
						<button
							type="button"
							aria-label="Attach image"
							className="text-gray-400 hover:text-[#F9C80E] p-2 rounded-full transition-colors"
						>
							<Image size={22} />
						</button>
						<button
							type="button"
							aria-label="Schedule a match"
							className="text-gray-400 hover:text-[#F9C80E] p-2 rounded-full transition-colors"
						>
							<Calendar size={22} />
						</button>

						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Escreva sua mensagem..."
							className="flex-grow bg-[#1E1E1E] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F9C80E]"
						/>

						<button
							type="submit"
							aria-label="Send message"
							className={`p-2 rounded-full ${
								input.trim()
									? "bg-[#F9C80E] text-black"
									: "bg-gray-700 text-gray-400 cursor-not-allowed"
							} transition-colors`}
							disabled={!input.trim()}
						>
							<SendHorizontal size={22} />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;
