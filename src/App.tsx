import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { LanguageProvider } from "./contexts/LanguageContext";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import TeamInfo from "./pages/TeamInfo";
import "./App.css";

function App() {
	return (
		<LanguageProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="chat" element={<Chat />} />
						<Route path="team" element={<TeamInfo />} />
						<Route path="matches" element={<Matches />} />
					</Route>
				</Routes>
			</Router>
		</LanguageProvider>
	);
}

export default App;
