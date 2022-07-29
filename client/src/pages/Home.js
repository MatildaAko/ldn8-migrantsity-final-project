import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "../components/Auth0Login/auth-nav";


import "../styles/App.css";

export function Home() {

	return (
		<div className="page-header">
			<div className="container">
				<header>
					<h1 className="page-header__title">Jobs</h1>
					<div className="links">
						<Link  className="item" to="/">home</Link> <span>|</span>
						<Link className="item" to="/application">Application</Link>  <span>|</span>
						<Link className="item" to="/applicantdashboard">Account Details</Link>  <span>|</span>
						<span className="item">
							<AuthenticationButton />
						</span>
					</div>
				</header>
			</div>
		</div>
	);
}

export default Home;