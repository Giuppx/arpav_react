import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				{/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/amministrazione" element={<Administration />} />
				<Route path="/login" element={<Login />} />
				<Route path="#" element={<PageInProgress />} />
				<Route path="*" element={<Notfound />} /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
