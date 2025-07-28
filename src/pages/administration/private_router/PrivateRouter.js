import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children, isLoggedIn }) {
	if (!isLoggedIn) {
		return <Navigate to={"/login"}></Navigate>;
	}

	return children;
}
