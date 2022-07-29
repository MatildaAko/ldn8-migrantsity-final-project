// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ApplicantForm from "./components/ApplicantsForms/ApplicantForm";
import Loading from "./components/Auth0Login/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import EqualityForm from "./pages/EqualityForm";
import HMCDashboard from "./pages/HMCDashboard";
import ApplicationDetails from "./pages/ApplicationDetails";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import { SnackbarProvider } from "notistack";
import "./styles/App.css";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
// import ApplicationFormAndDetails from "./pages/ApplicationFormAndDetails";
// import ApplicationsAdminBar from "./pages/ApplicationsAdminBar";

const App = () => {
	const { isLoading } = useAuth0();
	// const [pageBar, setPageBar] = useState("Home");

	if (isLoading) {
		return <Loading />;
	}
	return (
		<SnackbarProvider maxSnack={3}>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hmcview" element={<HMCDashboard />} />
				<Route
					path="/application"
					element={<ApplicantForm />}
					setPageBar={"Form"}
				/>
				<Route
					path="/applicantdashboard"
					element={<ApplicantDashboard applicantId={2} />}
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
