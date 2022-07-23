/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import AuthenticationButton from "../components/Auth0Login/auth-nav";
import "../styles/App.css";

function NavBar() {
	return (
		<>
			<header className="header">
					<img
						className="logo"
						src="https://hackneymigrantcentre.org.uk/wp-content/uploads/2019/10/hackney-migrant-centre.png"
						alt="logo"
					/>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn">
					<span className="navicon"></span>
				</label>
				<ul className="menu">
					<li>
						<a href="http://localhost:3000/">Home</a>
					</li>
					<li>
						<a href="#application">
							<Link to="/application">Application</Link>
						</a>
					</li>
					<li>
						<a href="#applicant-dashboard">
							<Link to="/applicantdashboard">Applicant Dashboard</Link>
						</a>
					</li>

					<li>
						<a href="/hmcview">
							<Link to="/hmcview">HMC Dashboard</Link>
						</a>
					</li>

					<li><a href="#login"><AuthenticationButton /></a></li>
				</ul>
			</header>
		</>
	);
}

export default NavBar;
