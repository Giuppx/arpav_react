import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
	return (
		<>
			{/* Partners */}
			<div
				id="partners"
				className="section section-image m-0"
				style={{
					backgroundImage: "url('/assets/img/partners.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			{/* Footer */}
			<footer className="it-footer bg-dark text-white px-0 py-4 position-relative">
				<div className="container-fluid p-4 pb-0">
					<div className="row">
						{/* Logo e nome ente */}
						<div className="col-12">
							<div className="it-brand-wrapper mb-4 w-25">
								<Link to="/" className="d-flex text-decoration-none">
									<svg className="icon icon-xl icon-white bg-dark me-2">
										<use href="/svg/sprites.svg#it-pa"></use>
									</svg>
									<div className="it-brand-text mt-2">
										<div className="it-brand-title">ARPAV</div>
										<div className="it-brand-tagline d-none d-md-block"></div>
									</div>
								</Link>
							</div>
						</div>

						{/* Colonne */}
						<div className="col-6 col-md-3">
							<h4 className="text-uppercase">Amministrazione</h4>
							<ul className="list-unstyled">
								<li>
									<Link to="#">Giunta e Consiglio</Link>
								</li>
								<li>
									<Link to="#">Aree di competenza</Link>
								</li>
								<li>
									<Link to="/form-amministrazione">Area amministrativa</Link>
								</li>
								<li>
									<Link to="#">Luoghi</Link>
								</li>
								<li>
									<Link to="#">Associazioni e società partecipate</Link>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-3">
							<h4 className="text-uppercase">Servizi</h4>
							<ul className="list-unstyled">
								<li>
									<Link to="#">Pagamenti</Link>
								</li>
								<li>
									<Link to="#">Sostegno</Link>
								</li>
								<li>
									<Link to="#">Domande e iscrizioni</Link>
								</li>
								<li>
									<Link to="#">Segnalazioni</Link>
								</li>
								<li>
									<Link to="#">Autorizzazioni e concessioni</Link>
								</li>
								<li>
									<Link to="#">Certificati e dichiarazioni</Link>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-3">
							<h4 className="text-uppercase">Novità</h4>
							<ul className="list-unstyled">
								<li>
									<Link to="#">Notizie</Link>
								</li>
								<li>
									<Link to="#">Eventi</Link>
								</li>
								<li>
									<Link to="#">Comunicati stampa</Link>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-3">
							<h4 className="text-uppercase">Documenti</h4>
							<ul className="list-unstyled">
								<li>
									<Link to="#">Progetti e attività</Link>
								</li>
								<li>
									<Link to="#">Delibere, determine e ordinanze</Link>
								</li>
								<li>
									<Link to="#">Bandi</Link>
								</li>
								<li>
									<Link to="#">Concorsi</Link>
								</li>
								<li>
									<Link to="#">Albo pretorio</Link>
								</li>
							</ul>
						</div>
					</div>

					<hr className="my-4" />

					<div className="row">
						{/* Contatti */}
						<div className="col-md-4">
							<h4 className="text-uppercase">Contatti</h4>
							<p className="mb-0 fw-bold">Nome della sede</p>
							<p className="mb-0">Nome dell’indirizzo, n.civico</p>
							<p className="mb-0">CAP Nome della città (Provincia)</p>
							<p className="mb-0">CF 0985649876</p>
							<p className="mb-0">indirizzopecdellente@pec.gov.it</p>
							<p className="mb-0">+39 0609090909</p>
							<p className="mb-0">URP - Ufficio Relazioni con il Pubblico</p>
						</div>

						{/* Social */}
						<div className="col-md-4 text-md-center">
							<h4 className="text-uppercase">Seguici su</h4>
							<ul className="list-inline mt-2">
								{["facebook", "youtube", "twitter"].map((social) => (
									<li className="list-inline-item" key={social}>
										<Link
											target="_blank"
											to={
												social === "facebook"
													? "https://www.facebook.com/arpaveneto/?locale=it_IT"
													: social === "youtube"
													? "https://www.youtube.com/user/arpaveneto"
													: "https://www.x.com/arpaveneto"
											}
											aria-label={social}>
											<svg className="icon icon-sm icon-white bg-dark">
												<use href={`/svg/sprites.svg#it-${social}`} />
											</svg>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Newsletter */}
						<div className="col-md-4">
							<h4 className="text-uppercase">Newsletter</h4>
							<form
								className="mt-2"
								onSubmit={(e) => {
									e.preventDefault();
								}}>
								<div className="input-group">
									<input
										type="email"
										className="form-control"
										placeholder="Indirizzo email"
										aria-label="Iscriviti alla newsletter"
									/>
									<button
										className="btn btn-primary bg-dark border border-secondary text-white"
										type="submit">
										Iscriviti
									</button>
								</div>
							</form>
						</div>
					</div>

					<hr className="my-4" />

					{/* Bottom links */}
					<div className="row">
						<div className="col-12 d-flex flex-wrap gap-3 small">
							<Link to="#">Media Policy</Link>
							<Link to="#">Note Legali</Link>
							<Link to="/privacy-policy">Privacy Policy</Link>
							<Link to="#">Mappa del sito</Link>
							<Link to="#">Dichiarazione Accessibilità</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
