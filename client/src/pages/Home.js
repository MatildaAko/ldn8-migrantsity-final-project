import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

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
