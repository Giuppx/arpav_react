import Footer from "../../footer/Footer";

export default function PrivacyPolicy() {
	return (
		<>
			<section id="privacyPolicy_section">
				<div className="container p-5 mt-5 text-center">
					<h1 className="text-success">Privacy policy</h1>
					<hr />

					{/* cookie section */}
					<section id="cookie_section" className="mt-5 text-start">
						<h3 className="text-success">COSA SONO I COOKIE</h3>
						<p className="lead">
							I cookie sono informazioni immesse sul browser dell’utente quando
							visita un sito web o utilizza un social network con il suo pc,
							smartphone o tablet. Ogni cookie può contenere diversi dati come,
							ad esempio, il nome del server da cui proviene, un identificatore
							numerico, ecc.
						</p>
						<p className="lead">
							Alcuni cookie sono usati per eseguire autenticazioni informatiche,
							monitoraggio di sessioni e memorizzazione di informazioni
							specifiche sugli utenti che accedono ad una pagina web.
						</p>
						<p className="lead">
							Questi cookie, cosiddetti tecnici, sono spesso utili, perché
							possono rendere più veloce e rapida la navigazione e fruizione del
							web, perché ad esempio intervengono a facilitare alcune procedure
							quando fai acquisti online, quando ti autentichi ad aree ad
							accesso riservato o quando un sito web riconosce in automatico la
							lingua che utilizzi di solito
						</p>
						<p className="lead">
							Una particolare tipologia di cookie, detti analytics, sono invece
							utilizzati dai gestori dei siti web per raccogliere informazioni,
							in forma aggregata, sul numero degli utenti e su come questi
							visitano il sito stesso, e quindi elaborare statistiche generali
							sul servizio e sul suo utilizzo.
						</p>
						<p className="lead fw-semibold">
							L’articolo 7, comma 3, del CAD richiede alle Pubbliche
							Amministrazioni di pubblicare sui propri siti le statistiche di
							utilizzo dei servizi digitali forniti. Le “Linee Guida di design
							per i siti internet e i servizi digitali della Pubblica
							Amministrazione” prescrivono la pubblicazione di informazioni,
							opportunamente aggregate e anonimizzate, derivanti dal
							monitoraggio statistico attivato sul singolo sito e/o servizio.
						</p>
					</section>

					{/* privacy section */}
					<section id="normativa_privacy" className="text-start mt-5">
						<h3 className="text-success">CONFORMITÀ ALLA NORMATIVA PRIVACY</h3>
						<p className="lead">
							L’art. 122 del Decreto Legislativo n. 196 del 2003 (Codice
							Privacy) impone la richiesta del consenso esclusivamente per quei
							cookie che non sono classificati come “tecnici”.
						</p>
						<p className="lead">
							È auspicabile che un sito della Pubblica Amministrazione contenga
							solamente cookie tecnici e cookie analitici che consentono di
							effettuare la raccolta e l’analisi statistica del traffico e del
							comportamento utente rispetto all’accesso e utilizzo del sito, al
							fine di migliorare l’esperienza d’uso mediante la rilevazione
							qualitativa e quantitativa dei dati di fruizione, nel rispetto e
							per le finalità previste dalla normativa. Consulta il paragrafo
							seguente per alcuni strumenti utili in questo senso.
						</p>
						<p className="lead">
							Se invece intendi utilizzare altri tipi di cookie - scelta che
							dovrà essere preceduta da un’attenta valutazione in merito
							all’effettiva necessità di ricorrervi - il consenso è la base
							legale necessaria per poter trattare i dati personali derivanti
							dagli stessi, e tali dati potranno essere raccolti solo dopo che
							gli utenti avranno espresso il loro consenso esplicito alle
							relative specifiche finalità di utilizzo. Ricorda di tenere sempre
							in considerazione le garanzie da assicurare in relazione a
							possibili trasferimenti di dati verso Paesi terzi che, in ogni
							caso, devono avvenire nel rispetto degli artt. 44 e ss. del GDPR.
						</p>
						<p className="lead">
							In ipotesi di utilizzo di ulteriori cookie, i siti web devono
							soddisfare i seguenti requisiti per la raccolta del consenso:
						</p>
						<ul>
							<li className="lead">
								il consenso preventivo ed esplicito che deve essere ottenuto
								prima di qualsiasi attivazione dei cookie (ad eccezione dei
								cookie necessari, inseriti nella whitelist);
							</li>
							<li className="lead">
								i consensi devono essere specifici, ovvero l'utente deve poter
								attivare alcuni cookie, lasciando al contempo disattivati altri:
								non deve quindi trovarsi costretto ad acconsentire a tutti o a
								nessuno;
							</li>
							<li className="lead">
								il consenso deve essere prestato liberamente, cioè non deve
								essere forzato;
							</li>
							<li className="lead">
								i consensi devono poter essere revocati con la stessa facilità
								con cui vengono forniti;
							</li>
							<li className="lead">
								i consensi devono essere custoditi in modo sicuro, come
								documentazione legale. Sia in caso di cookie tecnici che di
								altri, all’interessato va sempre fornita l’informativa. Ti
								suggeriamo, quindi, di predisporre una cookie policy dove
								indicherai, oltre ai requisiti dell’art. 13 del GDPR, il nome e
								la funzionalità dei cookie associati al tuo sito internet o
								servizio.
							</li>
						</ul>
					</section>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 p-0">
							<Footer />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
