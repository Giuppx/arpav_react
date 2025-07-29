/**
 * Problemi
 *
 * @RICERCA_INPUT
 * implementare la ricerca input; (opzionale)
 *
 *
 *
 */

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
	//toggle language
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [language, setLanguage] = useState("ITA");
	const toggleDropdown = () => setDropdownOpen((prev) => !prev);
	const closeDropdown = () => setDropdownOpen(false);

	//toggle menu
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	//toggle search
	// const [searchOpen, setSearchOpen] = useState(false);
	// const toggleSearch = () => setSearchOpen((prev) => !prev);

	return (
		<header>
			{/* Slim Header */}
			<div className="it-header-slim-wrapper bg-success-dark">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="it-header-slim-wrapper-content">
								<Link className="d-lg-block navbar-brand" to="/">
									Regione Veneto
								</Link>

								{/* language dropdown */}
								<div className="it-header-slim-right-zone">
									<div className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											role="button"
											data-bs-toggle="dropdown"
											onClick={toggleDropdown}
											aria-expanded={dropdownOpen}>
											<span className="visually-hidden">
												Selezione lingua: lingua selezionata
											</span>
											<span>{language}</span>
											<svg className="icon d-none d-lg-block">
												<use href="/svg/sprites.svg#it-expand" />
											</svg>
										</a>
										<div
											className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
											style={{ marginTop: "52px" }}>
											<div className="row">
												<div className="col-12">
													<div className="link-list-wrapper">
														<ul className="link-list">
															<li>
																<a
																	className="dropdown-item list-item"
																	style={{ cursor: "pointer" }}>
																	<span
																		className="text-success"
																		onClick={() => {
																			setLanguage("ITA");
																			closeDropdown();
																		}}>
																		ITA
																		<span className="visually-hidden">
																			selezionata
																		</span>
																	</span>
																</a>
															</li>
															<li>
																<a
																	className="dropdown-item list-item"
																	style={{ cursor: "pointer" }}>
																	<span
																		className="text-success"
																		onClick={() => {
																			setLanguage("ENG");
																			closeDropdown();
																		}}>
																		ENG
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* slim header link */}
									<Link
										to="/amministrazione"
										className="btn btn-primary btn-icon btn-full bg-success">
										<span className="rounded-icon">
											<svg className="icon icon-success">
												<use href="/svg/sprites.svg#it-user" />
											</svg>
										</span>
										<span className="d-none d-lg-block">
											Accedi all'area amministrativa
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Header central */}
			<div className="it-header-center-wrapper bg-success">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="it-header-center-content-wrapper">
								<div className="it-brand-wrapper">
									<Link to="/">
										<svg className="icon" aria-hidden="true">
											<use href="/svg/sprites.svg#it-pa" />
										</svg>
										<div className="it-brand-text">
											<div className="it-brand-title">ARPAV</div>
											<div className="it-brand-tagline d-none d-md-block">
												Monitoraggio ambientale e tutela del territorio veneto
											</div>
										</div>
									</Link>
								</div>
								<div className="it-right-zone">
									{/* burger toggle */}
									<button
										className="custom-navbar-toggler"
										type="button"
										aria-controls="nav0"
										aria-label="Mostra/Nascondi la navigazione"
										aria-expanded={isMenuOpen}
										onClick={toggleMenu}>
										<svg className="icon bg-override">
											<use href="/svg/sprites.svg#it-burger" />
										</svg>
									</button>

									{/* social links */}
									<div className="it-socials d-none d-lg-block d-lg-flex">
										<span>Seguici su</span>
										<ul>
											<li>
												<Link
													style={{ cursor: "pointer" }}
													aria-label="Facebook"
													target=" blank"
													rel="noreferrer"
													to="https://www.facebook.com/arpaveneto/?locale=it_IT">
													<svg className="icon">
														<use href="/svg/sprites.svg#it-facebook" />
													</svg>
												</Link>
											</li>
											<li>
												<Link
													style={{ cursor: "pointer" }}
													aria-label="Youtube"
													target="_blank"
													rel="noreferrer"
													to="https://www.youtube.com/user/arpaveneto">
													<svg className="icon">
														<use href="/svg/sprites.svg#it-youtube" />
													</svg>
												</Link>
											</li>
											<li>
												<Link
													style={{ cursor: "pointer" }}
													aria-label="X"
													target="_blank"
													rel="noreferrer"
													to="https://www.x.com/arpaveneto">
													<svg className="icon">
														<use href="/svg/sprites.svg#it-twitter" />
													</svg>
												</Link>
											</li>
										</ul>
									</div>
									{/* search */}
									<div className="it-search-wrapper d-md-flex">
										<span className="d-none d-lg-block">Cerca</span>
										<a
											style={{ cursor: "pointer" }}
											className="search-link rounded-icon"
											aria-label="Cerca nel sito">
											<svg className="icon icon-success">
												<use href="/svg/sprites.svg#it-search" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Header nav */}
			<div className="it-header-navbar-wrapper bg-success">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<nav
								className="navbar navbar-expand-lg has-megamenu"
								aria-label="Navigazione principale">
								<div
									className={`navbar-collapsable  ${
										isMenuOpen ? "show d-block expanded" : "collapse"
									}`}
									aria-hidden={!isMenuOpen}
									id="nav0"
									tabIndex="-1">
									<div
										className={`menu-wrapper w-50 ${
											isMenuOpen ? "bg-light" : ""
										}`}>
										<div className="close-div">
											<button
												className="btn close-menu"
												onClick={toggleMenu}
												type="button">
												<span className="visually-hidden">
													Nascondi la navigazione
												</span>
												<svg className="icon icon-danger ">
													<use href="/svg/sprites.svg#it-close-big" />
												</svg>
											</button>
										</div>
										<ul className="navbar-nav">
											<li className="nav-item active">
												<NavLink
													onClick={() => {
														setIsMenuOpen(false);
													}}
													className={({ isActive }) =>
														`nav-link outline-none ${
															isActive ? "active" : ""
														} ${isMenuOpen ? "text-success" : ""}`
													}
													to="/"
													end>
													<span>ARPAV</span>
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													onClick={() => {
														setIsMenuOpen(false);
													}}
													className={({ isActive }) =>
														`nav-link ${isActive ? "active" : ""}  ${
															isMenuOpen ? "text-success" : ""
														}`
													}
													to="/amministrazione">
													<span>Amministrazione</span>
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													onClick={() => {
														setIsMenuOpen(false);
													}}
													className={({ isActive }) =>
														`nav-link ${isActive ? "active" : ""}  ${
															isMenuOpen ? "text-success" : ""
														}`
													}
													to="/territorio">
													<span>Territorio</span>
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													onClick={() => {
														setIsMenuOpen(false);
													}}
													className={({ isActive }) =>
														`nav-link ${isActive ? "active" : ""} ${
															isMenuOpen ? "nav-link text-success" : ""
														}`
													}
													to="/datiAmbientali">
													<span>Dati</span>
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													onClick={() => {
														setIsMenuOpen(false);
													}}
													className={({ isActive }) =>
														`nav-link ${isActive ? "active" : ""}  ${
															isMenuOpen ? "text-success" : ""
														}`
													}
													to="/servizi">
													<span>Servizi</span>
												</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
