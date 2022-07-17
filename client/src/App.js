import { Route, Routes } from "react-router-dom";

import ApplicantForm from "./components/ApplicantsForms/ApplicantForm";
import About from "./pages/About";
import Home from "./pages/Home";

import EqualityForm from "./pages/EqualityForm";
import HMCDashboard from "./pages/HMCDashboard";
import ApplicationDetails from "./pages/ApplicationDetails";
import ApplicantDashboard from "./pages/ApplicantDashboard";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/hmcview" element={<HMCDashboard />} />
		<Route path="/application" element={<ApplicantForm />} />
		<Route path="/applicantdashboard" element={<ApplicantDashboard applicantId={2} />} />
		<Route path="/equality" element={<EqualityForm />} />
			<Route
				path="/applicationdetails/:id"
				element={<ApplicationDetails />}
			/>
		</Routes>
	);
};

export default App;
