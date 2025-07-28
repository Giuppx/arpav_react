import { Link } from "react-router-dom";

import "./News.css";

export default function News() {
	return (
		<>
			<section id="notizie">
				{/* Header */}
				<header className="bg-success p-4 ">
					<h3 className="text-white text-center">NOTIZIE IN EVIDENZA</h3>
					{/* Card container */}
					<div className="container mb-1 mt-4">
						<div className="row">
							{[1, 2, 3].map((item) => (
								<div className="col-xl-4" key={item}>
									<div className="card-wrapper card-space">
										<div className="card card-bg">
											<div className="card-body">
												<h5 className="card-title text-success">
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor…
												</h5>
												<p className="card-text">
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua.
												</p>
												<Link className="read-more text-decoration-none" to="#">
													<span className="text text-success">
														Leggi di più
													</span>
													<svg className="icon">
														<use href="/designers_italia/bootstrap-italia/svg/sprites.svg#it-arrow-right" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</header>
				{/* Main */}
				<main>
					<div className="container p-5 mt-5 mb-5">
						<div className="row d-flex align-items-center">
							{/* Card 1 */}
							<div
								className="col-md-6 mb-2 mb-md-0 mx-md-1 position-relative text-white p-5"
								style={{
									backgroundImage: "url('assets/img/ultime_pub.jpg')",
									backgroundSize: "cover",
									backgroundPosition: "center",
									height: "300px",
									cursor: "pointer",
								}}>
								<div
									className="position-absolute top-0 start-0 w-100 h-100 overlay-success"
									style={{ opacity: 0.9 }}
								/>
								<div className="position-relative text-center mt-5">
									<h2 className="it-brand-title">Ultime pubblicazioni</h2>
									<p className="lead">
										Relazioni e documenti di ultima pubblicazione
									</p>
								</div>
							</div>

							{/* Card 2 */}
							<div
								className="col position-relative text-white p-5 px-0"
								style={{
									backgroundImage: "url('assets/img/piu_cliccati.jpg')",
									backgroundSize: "cover",
									backgroundPosition: "center",
									height: "300px",
									cursor: "pointer",
								}}>
								<div
									className="position-absolute top-0 start-0 w-100 h-100 overlay-success"
									style={{ opacity: 0.9 }}
								/>
								<div className="position-relative text-center mt-5">
									<h2 className="it-brand-title">Più cliccati</h2>
									<p className="lead">Le pagine più visitate dagli utenti</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</section>
		</>
	);
}
