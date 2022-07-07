import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import EqualityForm from "./pages/EqualityForm";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/equality" element={<EqualityForm />} />
	</Routes>
);

export default App;
