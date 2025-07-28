import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
	const [showBanner, setShowBanner] = useState(false);
	const [showPreferences, setShowPreferences] = useState(false);
	const [preferences, setPreferences] = useState({
		newsletter: false,
		tecnici: true,
		terze: false,
	});

	useEffect(() => {
		const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
		let accepted = false;

		if (stored === "accepted") {
			accepted = true;
			return;
		} else if (stored) {
			try {
				const parsed = JSON.parse(stored);
				console.log("parsed:", parsed);
				if (parsed?.accepted) accepted = true;
				return;
			} catch (error) {
				console.warn("Cookie consent parsing error:", error);
			}
		}

		if (!accepted) {
			const timer = setTimeout(() => {
				setShowBanner(true);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
		setShowBanner(false);
	};

	const handleSavePreferences = () => {
		localStorage.setItem(
			COOKIE_CONSENT_KEY,
			JSON.stringify({
				accepted: true,
				preferences,
			})
		);
		setShowBanner(false);
	};

	const togglePreference = (key) => {
		setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<>
			{showBanner && (
				<>
					<div className="modal-backdrop fade show"></div>
					<section
						className="cookiebar position-fixed bottom-0 start-50 translate-middle-x bg-success text-white p-4 rounded d-flex flex-column"
						style={{
							zIndex: 9999,
						}}>
						<div className="row">
							<div className="col-md-12">
								<h5 className="mb-3 lead">
									Questo sito utilizza cookie tecnici, analytics e di terze
									parti.
									<br />
									Proseguendo nella navigazione accetti l’utilizzo dei cookie.
								</h5>
							</div>
							<div className="col-md-12 px-4">
								<div className="d-flex align-items-center mb-3 flex-wrap">
									<p>
										<button
											onClick={() => setShowPreferences(!showPreferences)}
											className="btn btn-link link-light text-decoration-underline mx-2 p-0">
											Preferenze
										</button>
									</p>
									<p>
										<Link
											to={"/privacyPolicy"}
											className="link-light text-decoration-underline mx-2">
											Scopri di più
										</Link>
									</p>
									<button
										onClick={handleAccept}
										className="btn btn-success mx-2">
										Accetta
									</button>
								</div>
							</div>
						</div>

						{showPreferences && (
							<div className="border-top border-white pt-3">
								<div className="form-check mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										id="toggle-newsletter"
										checked={preferences.newsletter}
										onChange={() => togglePreference("newsletter")}
									/>
									<label
										className="form-check-label text-white"
										htmlFor="toggle-newsletter">
										Cookie newsletter
									</label>
								</div>
								<div className="form-check mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										id="toggle-cookie-tecnici"
										checked
										disabled
									/>
									<label
										className="form-check-label text-white"
										htmlFor="toggle-cookie-tecnici">
										Cookie tecnici (necessari)
									</label>
								</div>
								<div className="form-check mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										id="toggle-cookie-terze"
										checked={preferences.terze}
										onChange={() => togglePreference("terze")}
									/>
									<label
										className="form-check-label text-white"
										htmlFor="toggle-cookie-terze">
										Cookie di terze parti
									</label>
								</div>
								<button
									onClick={handleSavePreferences}
									className="btn btn-success w-100">
									Salva preferenze
								</button>
							</div>
						)}
					</section>
				</>
			)}
		</>
	);
}
