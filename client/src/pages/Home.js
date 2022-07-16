
import { Link } from "react-router-dom";

import "./Home.css";
import Login from "./Login";

const Home = () => {
	return (
		<main role="main">
			<div>
				<h1>MIGRANTSITY</h1>
				<h2 className="message" data-qa="message">
					Hackney Migrant Center
				</h2>
				<br />
				<Login />
				<br />
				<Link to="/application">Application</Link>
			</div>
		</main>
	);
};

export default Home;
