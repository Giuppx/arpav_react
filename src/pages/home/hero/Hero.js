import { Link } from "react-router-dom";

import "./Hero.css";

export default function Hero() {
	return (
		<>
			<section className="it-hero-wrapper it-primary it-overlay text-white">
				{/* background img */}
				<div className="img-responsive-wrapper">
					<div className="img-responsive">
						<div className="img-wrapper">
							<img
								src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
								title="titolo immagine"
								alt="descrizione immagine"
							/>
						</div>
					</div>
				</div>

				{/* text */}
				<div className="container-fluid mx-md-3 text-white">
					<div className="row">
						<div className="col-12">
							<div className="it-hero-text-wrapper bg-dark">
								<span className="it-category">Tutela ambientale</span>
								<h2>Proteggiamo l'ambiente, monitoriamo il territorio</h2>
								<p className="d-none d-lg-block">
									ARPAV svolge attività di prevenzione e controllo per la tutela
									dell’ambiente e della salute dei cittadini. Attraverso il
									monitoraggio costante dell’aria, dell’acqua e del suolo,
									supporta le politiche ambientali regionali e promuove una
									cultura di sostenibilità.
								</p>
								<div className="it-btn-container">
									<Link className="btn btn-sm btn-primary" to="/servizi">
										I nostri servizi
									</Link>
									<a
										className="btn btn-sm btn-outline-primary mx-3"
										href="#data_section">
										Consulta i dati
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
