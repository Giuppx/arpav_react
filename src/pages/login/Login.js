import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../footer/Footer";

export default function Login(props) {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let formErrors = {};
		if (!formData.email.includes("@")) {
			formErrors.email = "Inserisci un'email valida";
		}
		if (formData.password.length < 8) {
			formErrors.password = "La password deve avere almeno 8 caratteri";
		}

		setErrors(formErrors);

		if (Object.keys(formErrors).length > 0) return;

		const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@arpav\.it$/;

		const employee = await props.getEmployee(formData.email);

		if (employee) {
			console.log(employee);
			if (!EMAIL_REGEX.test(formData.email)) {
				return alert("non hai l'autorizzazione necessaria per proseguire");
			} else {
				props.setIsLoggedIn(true);
				navigate("/amministrazione");
			}
		}
	};

	return (
		<>
			<section id="login">
				<div className="container-fluid shadow-sm p-5 mb-5 bg-white">
					<div className="row">
						<div className="col-md-6 p-5">
							<h2 className="text-success">
								Accesso all’Area di Amministrazione
							</h2>
							<p className="lead">
								Questa sezione è riservata agli utenti autorizzati e consente
								l’accesso all’area di amministrazione dedicata alla gestione dei
								dipendenti.
								<br />
								Per procedere, inserisci le tue credenziali nel modulo.
								<br />
								Una volta effettuato l’accesso, potrai visualizzare, modificare
								e aggiornare le informazioni relative al personale.
							</p>
						</div>

						{/* Form */}
						<div className="col-md-6 p-5">
							<form onSubmit={handleSubmit}>
								<div className="row shadow bg-success text-white p-4 rounded">
									<div className="col-md-12 mb-5">
										<h4 className="text-center">Login amministrazione</h4>
									</div>

									<div className="col-md-12">
										{/* Email */}
										<div className="form-group mb-3">
											<input
												type="email"
												className={`form-control ${
													errors.email ? "is-invalid" : ""
												}`}
												name="email"
												id="email"
												placeholder="email"
												value={formData.email}
												onChange={handleChange}
											/>
											{errors.email && (
												<div className="invalid-feedback">
													<p className="fw-bold">{errors.email}</p>
												</div>
											)}
										</div>

										{/* Password */}
										<div className="form-group mb-3 position-relative">
											<input
												type="password"
												className={`form-control ${
													errors.password ? "is-invalid" : ""
												}`}
												name="password"
												id="password"
												placeholder="Password"
												value={formData.password}
												onChange={handleChange}
											/>
											{errors.password && (
												<div className="invalid-feedback">
													<p className="fw-bold">{errors.password}</p>
												</div>
											)}
										</div>
									</div>

									{/* Submit */}
									<div className="col-md-12 d-flex justify-content-center align-items-center">
										<button className="btn btn-success" type="submit">
											Accedi
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 p-0">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
