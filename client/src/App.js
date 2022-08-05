// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import ApplicantForm from "./components/ApplicantsForms/ApplicantForm";
import Loading from "./components/Auth0Login/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import EqualityForm from "./pages/EqualityForm";
import HMCDashboard from "./pages/HMCDashboard";
import ApplicationDetails from "./pages/ApplicationDetails";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import { SnackbarProvider } from "notistack";
import NavBar from "./pages/NavBar";
import MiddlePage from "./components/Auth0Login/MiddlePage";
import Home from "./pages/Home";
import axios from "axios";
import "./styles/App.css";

const App = () => {
	const { isLoading, user } = useAuth0();
	const [applicantId, setApplicantId] = useState("");

	if(user && user["https://ldn8-migrantsity-final-project.herokuapp.com/roles"][0]==="Applicant") {
		axios.get(`/api/applicants/email/${user.email}`)
		.then((res) => {
			if(res.data.length>0) {
				console.log(res.data[0]);
			} else {
				console.log("Redirect to Application Form...", applicantId);
			}
		});
	}

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
