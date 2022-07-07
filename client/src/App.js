import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import HMCDashboard from "./pages/HMCDashboard";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/hmcview" element={<HMCDashboard />} />
	</Routes>
);

export default App;
