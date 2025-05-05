import type React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen bg-[#1E1E1E]">
			<Navbar />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
