import { Route, Routes } from "react-router-dom";

import ApplicantForm from "./components/ApplicantsForms/ApplicantForm";
import Loading from "./components/Auth0Login/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import EqualityForm from "./pages/EqualityForm";
import HMCDashboard from "./pages/HMCDashboard";
import ApplicationDetails from "./pages/ApplicationDetails";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import { SnackbarProvider } from "notistack";
import "./styles/App.css";

import NavBar from "./pages/NavBar";
import MiddlePage from "./components/Auth0Login/MiddlePage";
import { useState } from "react";

const App = () => {
	const { isLoading } = useAuth0();
	const [applicantId, setApplicantId] = useState("");

	if (isLoading) {
		return <Loading />;
	}
	return (
		<SnackbarProvider maxSnack={3}>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/middle"
					element={
						<MiddlePage applicantId={applicantId} setApplicantId={setApplicantId} />
					}
				/>
				<Route path="/hmcview" element={<HMCDashboard />} />
				<Route path="/application" element={<ApplicantForm />} />
				<Route
					path="/applicantdashboard"
					element={<ApplicantDashboard applicantId={applicantId} />}
				/>
				<Route path="/equality" element={<EqualityForm />} />
				<Route
					path="/applicationdetails/:id"
					element={<ApplicationDetails />}
				/>
			</Routes>
		</SnackbarProvider>
	);
};

export default App;
