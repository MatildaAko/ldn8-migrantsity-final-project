
import { Link } from "react-router-dom";

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
				<Link to="/hmcview">HMC Dashboard</Link>
				<br />
				<Link to="/application">Application</Link>
        <br />
				<Link to="/equality">Equality Form</Link>
			</div>
		</main>
	);
}

export default Home;
