import React from "react";

export default class AddEmployee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: "",
			cognome: "",
			email: "",
			dataNascita: "",
			comune: "",
			codiceFiscale: "",
			errors: {},
			disabled: true,
			touched: {
				nome: false,
				cognome: false,
				email: false,
				dataNascita: false,
				comune: false,
				codiceFiscale: false,
			},
			mode: props.formMode,
		};
	}

	componentDidMount() {
		const mode = this.state.mode;
		if (mode === "edit") {
			const {
				nome,
				cognome,
				email,
				data_nascita,
				comune_residenza,
				codice_fiscale,
			} = this.props.selectedEmployee;
			this.setState({
				nome: nome,
				cognome: cognome,
				email: email,
				dataNascita: new Date(data_nascita).toISOString().substring(0, 10),
				comune: comune_residenza,
				codiceFiscale: codice_fiscale,
				disabled: false,
				touched: {
					nome: true,
					cognome: true,
					email: true,
					dataNascita: true,
					comune: true,
					codiceFiscale: true,
				},
			});
		}
	}

	checkInputs = () => {
		const errors = {};
		const { nome, cognome, email, dataNascita, comune, codiceFiscale } =
			this.state;

		if (!nome.trim()) {
			errors.nome = "Campo obbligatorio!";
		} else {
			const NAME_REGEX = /^[A-Za-z]{4,}$/;
			if (!NAME_REGEX.test(nome))
				errors.nome =
					"Il nome deve contenere almeno 4 lettere senza spazi, numeri o simboli";
		}

		if (!cognome.trim()) {
			errors.cognome = "Campo obbligatorio!";
		} else {
			const SURNAME_REGEX = /^[A-Za-z]{4,}$/;
			if (!SURNAME_REGEX.test(cognome))
				errors.cognome =
					"Il cognome deve contenere almeno 4 lettere senza spazi,numeri o simboli";
		}

		if (!email.trim()) {
			errors.email = "Campo obbligatorio!";
		} else {
			const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!EMAIL_REGEX.test(email)) errors.email = "Email non valida";
		}

		if (!dataNascita) {
			errors.dataNascita = "Campo obbligatorio!";
		} else {
			const data = new Date(dataNascita);
			if (isNaN(data.getTime()) || data > new Date())
				errors.dataNascita = "Data non valida";
		}

		if (!comune.trim()) {
			errors.comune = "Campo obbligatorio!";
		} else {
			const COMUNE_REGEX = /^[A-Za-z]{4,}$/;
			if (!COMUNE_REGEX.test(comune))
				errors.comune = "Il comune non deve contenere spazi, simboli o numeri";
		}

		if (!codiceFiscale.trim()) {
			errors.codiceFiscale = "Campo obbligatorio!";
		} else {
			const CF_REGEX =
				/^[A-Z]{6}[0-9]{2}[A-EHLMPR-T]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
			if (!CF_REGEX.test(codiceFiscale))
				errors.codiceFiscale = "Codice fiscale non valido";
		}

		const isValid = Object.keys(errors).length === 0;
		this.setState({ errors, disabled: !isValid });
		return isValid;
	};

	handleChange = (e) => {
		const { id, value } = e.target;
		this.setState({ [id]: value }, () => {
			if (this.state.touched[id]) {
				this.checkInputs();
			}
		});
	};

	handleBlur = (e) => {
		const { id } = e.target;
		this.setState(
			(prevState) => ({
				touched: { ...prevState.touched, [id]: true },
			}),
			() => {
				this.checkInputs();
			}
		);
	};

	handleReset = () => {
		this.setState({
			nome: "",
			cognome: "",
			email: "",
			dataNascita: "",
			comune: "",
			codiceFiscale: "",
			errors: {},
			disabled: true,
			touched: {
				nome: false,
				cognome: false,
				email: false,
				dataNascita: false,
				comune: false,
				codiceFiscale: false,
			},
			mode: this.props.formMode,
		});
	};

	handleClose = () => {
		this.props.onClose();
		this.handleReset();
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { nome, cognome, email, dataNascita, comune, codiceFiscale } =
			this.state;

		const newEmployee = {
			nome: nome,
			cognome: cognome,
			email: email,
			data_nascita: dataNascita,
			comune_residenza: comune,
			codice_fiscale: codiceFiscale,
		};

		this.setState({
			touched: {
				nome: true,
				cognome: true,
				email: true,
				dataNascita: true,
				comune: true,
				codiceFiscale: true,
			},
		});

		if (this.checkInputs()) {
			if (this.state.mode === "add") {
				this.props.onAddEmployee(newEmployee);
			} else {
				this.props.onEditEmployee(newEmployee, this.props.selectedEmployee.id);
			}
			this.handleReset();
		}
	};

	render() {
		const { errors, touched } = this.state;

		return (
			<>
				{/* shadow */}
				{this.props.isOpen && <div className="modal-backdrop fade show"></div>}
				{/* modal */}
				<div
					className={`modal fade ${this.props.isOpen ? "d-block show" : ""}`}
					id="add_modal"
					tabIndex="-1"
					aria-labelledby="add_modalLabel"
					aria-hidden={!this.props.isOpen}>
					<div className="modal-dialog modal-lg modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title text-success" id="add_modalLabel">
									{this.state.mode === "add"
										? "Aggiungi Dipendente"
										: "Modifica Dipendente"}
								</h5>
								<button
									type="button"
									className="btn-close"
									aria-label="Chiudi"
									onClick={this.handleClose}></button>
							</div>
							<div className="modal-body">
								<form id="addForm" onSubmit={this.handleSubmit} noValidate>
									<div className="row">
										{/* Nome */}
										<div className="col-md-6 mb-3">
											<label htmlFor="nome" className="form-label">
												Nome
											</label>
											<input
												type="text"
												className={`form-control ${
													touched.nome && errors.nome
														? "is-invalid"
														: touched.nome && !errors.nome
														? "is-valid"
														: ""
												}`}
												id="nome"
												value={this.state.nome}
												onChange={this.handleChange}
												onBlur={this.handleBlur}
												required
											/>
											{touched.nome && errors.nome && (
												<div className="invalid-feedback">{errors.nome}</div>
											)}
										</div>

										{/* Cognome */}
										<div className="col-md-6 mb-3">
											<label htmlFor="cognome" className="form-label">
												Cognome
											</label>
											<input
												type="text"
												className={`form-control ${
													touched.cognome && errors.cognome
														? "is-invalid"
														: touched.cognome && !errors.cognome
														? "is-valid"
														: ""
												}`}
												id="cognome"
												value={this.state.cognome}
												onChange={this.handleChange}
												onBlur={this.handleBlur}
												required
											/>
											{touched.cognome && errors.cognome && (
												<div className="invalid-feedback">{errors.cognome}</div>
											)}
										</div>

										{/* Email */}
										<div className="col-md-6 mb-3">
											<label htmlFor="email" className="form-label">
												Email
											</label>
											<input
												type="email"
												className={`form-control ${
													touched.email && errors.email
														? "is-invalid"
														: touched.email && !errors.email
														? "is-valid"
														: ""
												}`}
												id="email"
												value={this.state.email}
												onChange={this.handleChange}
												onBlur={this.handleBlur}
												required
											/>
											{touched.email && errors.email && (
												<div className="invalid-feedback">{errors.email}</div>
											)}
										</div>

										{/* Data di nascita */}
										<div className="col-md-6 mb-3">
											<label htmlFor="dataNascita" className="form-label">
												Data di nascita
											</label>
											<input
												type="date"
												className={`form-control ${
													touched.dataNascita && errors.dataNascita
														? "is-invalid"
														: touched.dataNascita && !errors.dataNascita
														? "is-valid"
														: ""
												}`}
												id="dataNascita"
												value={this.state.dataNascita}
												onChange={this.handleChange}
												onBlur={this.handleBlur}
												required
											/>
											{touched.dataNascita && errors.dataNascita && (
												<div className="invalid-feedback">
													{errors.dataNascita}
												</div>
											)}
										</div>

										{/* Comune */}
										<div className="col-md-6 mb-3">
											<label htmlFor="comune" className="form-label">
												Comune di residenza
											</label>
											<input
												type="text"
												className={`form-control ${
													touched.comune && errors.comune
														? "is-invalid"
														: touched.comune && !errors.comune
														? "is-valid"
														: ""
												}`}
												id="comune"
												value={this.state.comune}
												onChange={this.handleChange}
												onBlur={this.handleBlur}
												required
											/>
											{touched.comune && errors.comune && (
												<div className="invalid-feedback">{errors.comune}</div>
											)}
										</div>

										{/* Codice fiscale */}
										<div className="col-md-6 mb-3">
											<label htmlFor="codiceFiscale" className="form-label">
												Codice fiscale
											</label>
											<input
												type="text"
												className={`form-control ${
													touched.codiceFiscale && errors.codiceFiscale
														? "is-invalid"
														: touched.codiceFiscale && !errors.codiceFiscale
														? "is-valid"
														: ""
												}`}
												id="codiceFiscale"
												value={this.state.codiceFiscale}
												onChange={this.handleChange}
												onBlur={this.handleBlur}
												required
											/>
											{touched.codiceFiscale && errors.codiceFiscale && (
												<div className="invalid-feedback">
													{errors.codiceFiscale}
												</div>
											)}
										</div>
									</div>
								</form>
							</div>
							<div className="modal-footer justify-content-between">
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={this.handleReset}>
									Reset
								</button>
								<button
									type="submit"
									form="addForm"
									className="btn btn-success"
									disabled={this.state.disabled}>
									{this.state.mode === "add" ? "Aggiungi" : "Modifica"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
