import { Link } from "react-router-dom";

export default function Errore404() {
	return (
		<>
			<div className="it-page-background">
				<div className="container py-5 text-center">
					<div className="row justify-content-center">
						<div className="col-12 col-md-8">
							<p>...Ops!</p>
							<h1 className="display-1 text-success">404</h1>
							<p className="lead">Pagina non trovata</p>
							<p>
								La pagina che stai cercando potrebbe essere stata rimossa o
								spostata.
							</p>
							<Link to="/" className="btn btn-success mt-3">
								Torna alla Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
