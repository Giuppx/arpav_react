import { Link } from "react-router-dom";

export default function Data() {
	return (
		<>
			<section id="data_section">
				{/* Data list container */}
				<div className="container-fluid p-4 overflow-hidden">
					<div className="row">
						{/* Section heading */}
						<div className="col-md-12 px-5">
							<div className="link-list-wrapper">
								<ul className="link-list">
									<li>
										<h2 className="text-success text-center text-md-start">
											Dati ambientali
										</h2>
										<p className="text-center text-md-start">
											L'ambiente in Veneto: previsioni, dati ed elaborazioni
											prodotti dall'Agenzia.
										</p>
									</li>
									<hr />
								</ul>
							</div>
						</div>

						{/* Link rows */}
						<div className="col-md-12 px-5 text-center">
							<div className="row">
								{/* Row 1 */}
								<div className="row text-center p-0">
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">
												Aria dati in diretta
											</span>
										</Link>
									</div>
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">
												Aria dati validati
											</span>
										</Link>
									</div>
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">
												MeteoIdroNivo in diretta
											</span>
										</Link>
									</div>
								</div>

								{/* Row 2 */}
								<div className="row text-center p-0">
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">
												Bollettini
											</span>
										</Link>
									</div>
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">
												Argomento in forma
											</span>
										</Link>
									</div>
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">Pollini</span>
										</Link>
									</div>
								</div>

								{/* Row 3 */}
								<div className="row text-center p-0">
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 text-success"
											to="#">
											<span className="text-success fw-semibold">
												Aria dati in diretta
											</span>
										</Link>
									</div>
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 d-flex flex-column align-items-center text-success"
											to="#">
											<span className="text-success fw-semibold">
												Bollettini
											</span>
										</Link>
									</div>
									<div className="col-md-4 mb-3">
										<Link
											className="list-item d-block py-2 d-flex flex-column align-items-center text-success"
											to="#">
											<span className="text-success fw-semibold">
												Indicatori
											</span>
										</Link>
									</div>
								</div>

								{/* Button section */}
								<div className="col-md-12 p-0 mt-md-5 d-flex justify-content-center align-items-center">
									<Link
										type="button"
										className="btn btn-primary btn-xs bg-success text-center"
										style={{ position: "relative", right: "10px" }}
										to={"/datiAmbientali"}>
										Tutti i dati
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
