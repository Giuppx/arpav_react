import React from "react";
import ReactDOM from "react-dom/client";

// import bootstrap
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";

import App from "./App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
