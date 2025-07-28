import "./Home.css";

import Hero from "./hero/Hero";
import Meteo from "./meteo/Meteo";
import Data from "./data/Data";
import News from "./news/News";
import Footer from "../../footer/Footer";
import CookieBanner from "../../cookieBanner/CookieBanner";

export default function Home() {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 p-0 d-none d-lg-block">
						<Hero />
					</div>
					<div className="col-md-12 p-0">
						<Meteo />
					</div>
					<div className="col-md-12 p-2">
						<Data />
					</div>
					<div className="col-md-12 p-0">
						<News />
					</div>
					<div className="col-md-12 p-0">
						<Footer />
					</div>
				</div>
				<CookieBanner />
			</div>
		</>
	);
}
