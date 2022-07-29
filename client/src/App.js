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
// import { useState } from "react";
import NavBar from "./pages/NavBar";

import Home from "./pages/Home";

const App = () => {
	const { isLoading } = useAuth0();
  import MiddlePage from "./components/Auth0Login/MiddlePage";
	// const [applicantId, setApplicantId] = useState("");

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
				<Route
					path="/application"
					element={<ApplicantForm />}
					setPageBar={"Form"}
				/>
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
