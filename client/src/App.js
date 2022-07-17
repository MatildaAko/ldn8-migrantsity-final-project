import { Route, Routes } from "react-router-dom";

import ApplicantForm from "./components/ApplicantsForms/ApplicantForm";
import Home from "./pages/Home";

import HMCDashboard from "./pages/HMCDashboard";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ApplicationDetails from "./pages/ApplicationDetails";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<Register />} />
			<Route path="/hmcview" element={<HMCDashboard />} />
			<Route path="/application" element={<ApplicantForm />} />
			<Route path="/applicationdetails/:id" element={<ApplicationDetails />} />
		</Routes>
	);
};

export default App;
