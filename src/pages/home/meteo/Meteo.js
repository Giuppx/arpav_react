import { useState, useEffect } from "react";
import axios from "axios";

export default function Meteo() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({});

	useEffect(() => {
		console.log(weather);
	}, [weather]);

	useEffect(() => {
		const getLocation = async () => {
			try {
				//get current position
				const resp = await axios.get("https://ipapi.co/json/");
				const currentLocation = await resp.data;
				fetchWeather(currentLocation.city);
			} catch (error) {
				console.log(error.message);
			}
		};
		getLocation();
	}, []);

	const fetchWeather = async (cityName) => {
		if (!cityName) alert("inserisci una città!");
		try {
			const API_KEY = "15017f4e5159a171b36371462698a7d9";
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}&lang=it`
			);
			const data = await response.data;
			setWeather({
				region: data.sys.country,
				city: data.name,
				temperature: data.main.temp,
				conditions: data.weather[0].description,
				humidity: data.main.humidity,
			});
		} catch (error) {
			console.error("Error fetching weather:", error);
			setWeather({});
		}
	};

	return (
		<>
			<section id="meteo-section">
				<div className="container-fluid px-0 overflow-hidden">
					<div className="row shadow-sm p-3 mb-1 bg-white px-5 pb-0 d-flex align-items-center">
						{/* Section title */}
						<div className="col-md-12 col-lg-6 d-none d-md-block">
							<h3 className="text-success text-center text-md-start">
								Dati meteo
							</h3>
						</div>

						{/* Search input */}
						<div className="col-md-12 col-lg-6 mt-3 mt-md-5">
							<div className="form-group">
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-group-3"
										name="input-group-3"
										placeholder="Inserisci nome città"
										value={city}
										onChange={(e) => setCity(e.target.value)}
									/>
									<div className="input-group-append">
										<button
											className="btn btn-success"
											type="button"
											id="button-3"
											onClick={() => {
												fetchWeather(city);
											}}>
											Cerca
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Weather result */}
					{weather.city && (
						<div className="row bg-success text-white p-3">
							<div className="col-md-12 text-center">
								<div className="container  p-3">
									<p className="lead" id="regione">
										{weather.region}
									</p>
									<h2 id="citta">{weather.city}</h2>
									<div className="row mt-5">
										<div className="col-md-4">
											<p className="fw-semibold" id="temperatura_titolo">
												Temperatura:
											</p>
											<p className="lead" id="temperatura">
												{weather.temperature}°C
											</p>
										</div>
										<div className="col-md-4">
											<p className="fw-semibold" id="condizioni_titolo">
												Condizioni:
											</p>
											<p className="lead" id="condizioni">
												{weather.conditions}
											</p>
										</div>
										<div className="col-md-4">
											<p className="fw-semibold" id="umidita_titolo">
												Umidità:
											</p>
											<p className="lead" id="umidita">
												{weather.humidity}%
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
