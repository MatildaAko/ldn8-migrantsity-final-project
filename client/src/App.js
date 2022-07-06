import { Route, Routes } from "react-router-dom";

import ApplicantsForm from "./components/ApplicantsForm";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/application" element={<ApplicantsForm />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
