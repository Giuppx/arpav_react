import { useState } from "react";

import Footer from "../../footer/Footer";
import AddEmployee from "./addEmployee/AddEmployee";

export default function Administration({
	employees,
	onAddEmployee,
	onEditEmployee,
	onDeleteEmployee,
}) {
	const [selectedEmployee, setSelectedEmploye] = useState(null);

	// accordion item
	const [openItem, setOpenItem] = useState(null);

	const toggleItem = (id) => {
		setOpenItem((prev) => (prev === id ? null : id));
	};

	// modal
	const [showModal, setShowModal] = useState(false);
	const [formMode, setFormMode] = useState("add");

	const handleFormMode = (mode) => {
		setFormMode(mode);
	};

	return (
		<>
			{/*  Employee management section */}
			<section
				id="gestione_dipendenti"
				className="container-fluid shadow p-5 bg-white">
				<div className="row">
					{/* Section title */}
					<div className="col-6">
						<h3 className="mb-0 mt-2 mt-md-0 text-success fw-bold">
							Gestione Dipendenti
						</h3>
						<p className="d-none d-md-block">
							Espandi un dipendente per modificare o rimuovere.
						</p>
					</div>

					{/* Add employee button */}
					<div className="col-6 text-end">
						<button
							className="btn btn-success btn-sm text-white"
							onClick={() => {
								setShowModal(true);
								handleFormMode("add");
							}}>
							Aggiungi
						</button>
					</div>
				</div>
				{/* Accordion */}
				{employees.length > 0 ? (
					<div className="accordion mt-4" id="accordionDipendenti">
						{employees.map((employee, index) => {
							return (
								<div className="accordion-item" key={index}>
									<h2 className="accordion-header" id={`heading${index}`}>
										<button
											className={`accordion-button text-success ${
												openItem === index ? "" : "collapsed"
											}`}
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse${index}`}
											aria-expanded={openItem === index}
											aria-controls={`collapse${index}`}
											onClick={() => toggleItem(index)}>
											<strong>{employee.cognome}</strong>
											&nbsp;&nbsp;|&nbsp;&nbsp;
											<strong>{employee.email}</strong>
										</button>
									</h2>

									<div
										id={`collapse${index}`}
										className={`accordion-collapse collapse ${
											openItem === index ? "show" : ""
										}`}
										aria-labelledby={`heading${index}`}
										data-bs-parent="#accordionDipendenti">
										<div className="accordion-body">
											{/* contenuto accordion */}
											<div className="row">
												<div className="col-md-6 mb-3">
													<strong className="text-success">Nome:</strong>{" "}
													{employee.nome}
												</div>
												<div className="col-md-6 mb-3">
													<strong className="text-success">
														Data di nascita:
													</strong>{" "}
													{employee.data_nascita}
												</div>
												<div className="col-md-6 mb-3">
													<strong className="text-success">
														Comune di residenza:
													</strong>{" "}
													{employee.comune_residenza}
												</div>
												<div className="col-md-6 mb-3">
													<strong className="text-success">
														Codice fiscale:
													</strong>{" "}
													{employee.codice_fiscale}
												</div>
											</div>

											<div className="d-flex justify-content-end gap-2">
												<button
													className="btn btn-sm btn-outline-primary"
													onClick={() => {
														setSelectedEmploye(employee);
														handleFormMode("edit");
														setShowModal(true);
													}}>
													<svg className="icon icon-primary">
														<use href="/svg/sprites.svg#it-pencil" />
													</svg>
												</button>
												<button
													className="btn btn-sm btn-outline-danger"
													onClick={() => {
														onDeleteEmployee(employee.id);
													}}>
													<svg className="icon icon-danger">
														<use href="/svg/sprites.svg#it-delete" />
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					"Aggiungi un dipendente"
				)}
				{showModal && (
					<AddEmployee
						isOpen={showModal}
						formMode={formMode}
						selectedEmployee={selectedEmployee}
						onAddEmployee={onAddEmployee}
						onEditEmployee={onEditEmployee}
						onClose={() => {
							setShowModal(false);
						}}
					/>
				)}
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
