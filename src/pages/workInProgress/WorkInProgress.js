export default function WorkInProgress() {
	return (
		<div className="it-page-background">
			<div className="container py-5 text-center">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 d-flex flex-column align-items-center">
						<svg className="icon d-none icon-xl d-lg-block my-4">
							<use href="/svg/sprites.svg#it-settings" />
						</svg>
						<h1 className="display-5 text-success">Pagina in lavorazione</h1>
						<p className="lead">
							Stiamo lavorando per completare questa sezione del sito.
						</p>
						<p>Riprova a visitarla più avanti. Grazie per la pazienza.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
