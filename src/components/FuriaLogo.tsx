import type React from "react";

interface FuriaLogoProps {
	size?: number;
	className?: string;
}

const FuriaLogo: React.FC<FuriaLogoProps> = ({ size = 24, className = "" }) => {
	return (
		<div
			className={`relative ${className}`}
			style={{ width: size, height: size }}
			aria-hidden="true"
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
				alt="FURIA Logo"
				className="w-full h-full object-contain"
			/>
		</div>
	);
};

export default FuriaLogo;
