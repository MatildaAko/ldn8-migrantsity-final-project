
import { Link } from "react-router-dom";
import Login from "./Login";

import "./Home.css";
export function Home() {

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
}

export default Home;
