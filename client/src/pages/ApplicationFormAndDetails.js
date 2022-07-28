import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "../components/Auth0Login/auth-nav";

import "../styles/App.css";

function ApplicationFormAndDetails({ setPageBar }) {
	setPageBar("Form");
	return (
		<div className="page-header">
			<div className="container">
				<header>
					<h1 className="page-header__title">Form</h1>
					<div className="links">
						<Link className="item" to="/">
							home
						</Link>{" "}
						<span>|</span>
						<Link className="item" to="/application">
							Application
						</Link>{" "}
						<span>|</span>
						<Link className="item" to="/applicantdashboard">
							Account Details
						</Link>{" "}
						<span>|</span>
						{/* <Link className="item" to="/jobAlerts">Job alerts</Link> <span>|</span> */}
						<span className="item">
							<AuthenticationButton />
						</span>
					</div>
				</header>
			</div>
		</div>
	);
}

export default ApplicationFormAndDetails;
