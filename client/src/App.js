import { Route, Routes } from "react-router-dom";

import ApplicantForm from "./components/ApplicantsForms/ApplicantForm";
import Loading from "./components/Auth0Login/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";

import HMCDashboard from "./pages/HMCDashboard";
import ApplicationDetails from "./pages/ApplicationDetails";

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hmcview" element={<HMCDashboard />} />
		<Route path="/application" element={<ApplicantForm />} />
			<Route
				path="/applicationdetails/:id"
				element={<ApplicationDetails />}
			/>
		</Routes>
	);
};

export default App;
