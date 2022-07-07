import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import HMCDashboard from "./pages/HMCDashboard";
import ApplicationDetails from "./pages/ApplicationDetails";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/hmcview" element={<HMCDashboard />} />
			<Route
				path="/applicationdetails/:id"
				element={<ApplicationDetails />}
			/>
		</Routes>
	);
};

export default App;
