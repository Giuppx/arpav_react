import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/privacy_policy/Privacy_Policy";
import Administration from "./pages/administration/Administration";
import Login from "./pages/login/Login";
import PrivateRouter from "./pages/administration/private_router/PrivateRouter";
import Errore404 from "./pages/404/Error404";
import WorkInProgress from "./pages/workInProgress/WorkInProgress";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [employees, setEmployees] = useState([]);

	const getAllEmployees = async () => {
		const resp = await axios.get(
			"https://6864ea425b5d8d03397ed017.mockapi.io/arpav/dipendenti/dipendente"
		);
		const employees = await resp.data;
		setEmployees(employees);
	};

	const getEmployee = async (employeeEmail) => {
		try {
			const resp = await axios.get(
				`https://6864ea425b5d8d03397ed017.mockapi.io/arpav/dipendenti/dipendente?email=${employeeEmail}`
			);
			const employee = await resp.data;
			return employee;
		} catch (error) {
			alert("utente non registrato", error.message);
		}
	};

	const addEmployee = async (newEmployee) => {
		try {
			const resp = await axios.post(
				"https://6864ea425b5d8d03397ed017.mockapi.io/arpav/dipendenti/dipendente",
				newEmployee
			);
			const employee = await resp.data;
			setEmployees((prev) => [...prev, employee]);
			alert("dipendente aggiunto");
		} catch (error) {
			console.log(error.message);
			alert("errore: ", error.message);
		}
	};

	const editEmployee = async (editedEmployee, editedEmployeeID) => {
		try {
			const resp = await axios.put(
				`https://6864ea425b5d8d03397ed017.mockapi.io/arpav/dipendenti/dipendente/${editedEmployeeID}`,
				editedEmployee
			);
			const updatedEmployee = await resp.data;
			setEmployees((prev) =>
				prev.map((empl) =>
					empl.id === editedEmployeeID ? updatedEmployee : empl
				)
			);

			alert("dipendente aggiornato");
		} catch (error) {
			alert("errore: ", error.message);
		}
	};

	const deleteEmployee = async (id) => {
		try {
			await axios.delete(
				`https://6864ea425b5d8d03397ed017.mockapi.io/arpav/dipendenti/dipendente/${id}`
			);

			setEmployees((prev) => prev.filter((emp) => emp.id !== id));
			alert("dipendente eliminato");
		} catch (error) {
			alert("errore: ", error.message);
		}
	};

	useEffect(() => {
		getAllEmployees();
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacyPolicy" element={<PrivacyPolicy />} />
				<Route
					path="/amministrazione"
					element={
						<PrivateRouter isLoggedIn={isLoggedIn}>
							<Administration
								employees={employees}
								onAddEmployee={addEmployee}
								onEditEmployee={editEmployee}
								onDeleteEmployee={deleteEmployee}
							/>
						</PrivateRouter>
					}
				/>
				<Route
					path="/login"
					element={
						<Login getEmployee={getEmployee} setIsLoggedIn={setIsLoggedIn} />
					}
				/>
				<Route path="/territorio" element={<WorkInProgress />} />
				<Route path="/datiAmbientali" element={<WorkInProgress />} />
				<Route path="/servizi" element={<WorkInProgress />} />
				<Route path="/lavorazione" element={<WorkInProgress />} />
				<Route path="*" element={<Errore404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
