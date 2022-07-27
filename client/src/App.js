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
// import LoginButton from "./components/Auth0Login/login-button";

// const Middle = () => {

// 	const { user } = useAuth0();
// 	// if (user["https://roles"].includes("Admin")) {

// 	// }
// 	console.log(user);
// 		return (
// 			<>
// 				Hello <LoginButton />
// 			</>
// 		);
// };

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}
	return (
		<SnackbarProvider maxSnack={3}>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hmcview" element={<HMCDashboard />} />
		<Route path="/application" element={<ApplicantForm />} />
		<Route path="/applicantdashboard" element={<ApplicantDashboard applicantId={2} />} />
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
