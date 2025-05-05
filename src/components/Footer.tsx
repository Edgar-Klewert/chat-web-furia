import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";
import type React from "react";
import FuriaLogo from "./FuriaLogo";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black py-8 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0 flex items-center">
						<FuriaLogo size={36} />
						<span className="ml-3 text-white font-bold text-xl">
							FURIA FANS
						</span>
					</div>

					<div className="flex space-x-6 mb-6 md:mb-0">
						<a
							href="https://twitter.com/FURIA"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-[#F9C80E] transition-colors"
						>
							<Twitter size={24} />
						</a>
						<a
							href="https://www.instagram.com/furiagg/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-[#F9C80E] transition-colors"
						>
							<Instagram size={24} />
						</a>
						<a
							href="https://www.twitch.tv/furiatv"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-[#F9C80E] transition-colors"
						>
							<Twitch size={24} />
						</a>
						<a
							href="https://www.youtube.com/c/FURIA"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-[#F9C80E] transition-colors"
						>
							<Youtube size={24} />
						</a>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm mb-4 md:mb-0">
						© {currentYear} FURIA Fan Chat. All rights reserved.
					</p>
					<div className="flex space-x-6">
						<a href="/terms" className="text-gray-400 hover:text-white text-sm">
							Terms of Service
						</a>
						<a
							href="/privacy"
							className="text-gray-400 hover:text-white text-sm"
						>
							Privacy Policy
						</a>
						<a
							href="/contact"
							className="text-gray-400 hover:text-white text-sm"
						>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
