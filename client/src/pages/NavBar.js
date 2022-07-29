// import React, { useState } from "react";
import "../styles/NavBar.css";
// import Home from "./Home";
// import ApplicationsAdminBar from "./ApplicationsAdminBar";
// import ApplicationFormAndDetails from "./ApplicationFormAndDetails";


function NavBar() {
	// const [pageBar, setPageBar] = useState("/");

	return (
		<div className="site-header-wrapper">
			<header className="site-header container">
				<a href="/" title="go back to Hackney Migrant centre homepage">
					<img
						crossOrigin="anonymous"
						className="site-logo"
						src="https://res.cloudinary.com/ltming4/image/upload/v1658948037/hackney-migrant-centre_sqmnt0.png"
						alt="Hackney Migrant Centre logo"
					/>
				</a>

				<nav className="nav-primary last-is-cta" role="navigation">
					<ul>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
							<a href="https://hackneymigrantcentre.org.uk/drop-in/">
								Advice service
							</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-693">
							<a href="https://hackneymigrantcentre.org.uk/volunteer/">
								Volunteer with us
							</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
							<a href="https://hackneymigrantcentre.org.uk/campaigns/">
								Campaigns
							</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
							<a href="https://hackneymigrantcentre.org.uk/about-us/">
								What we do
							</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52">
							<a href="https://hackneymigrantcentre.org.uk/blog/">News</a>
						</li>
						<li
							className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-707 current_page_item menu-item-3844"
							aria-current="page"
						>
							<a href="/">Jobs</a>
						</li>
						<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51">
							<a href="https://hackneymigrantcentre.org.uk/donate/">Donate</a>
						</li>
					</ul>
				</nav>
			</header>
			{/* {<Navigate setPageBar={"/"} to="/" replace={true} /> ? (
				<Home />
			) : <Navigate setPageBar={"/application"} to="/application" replace={true} /> ? (
				<ApplicationFormAndDetails  />
			) : (
				<ApplicationsAdminBar />
			)} */}
			{/* {pageBar === "Home" ? (
				<Home setPageBar={setPageBar} />
			) : pageBar === "Form" ? (
				<ApplicationFormAndDetails setPageBar={setPageBar} />
			) : (
				<ApplicationsAdminBar setPageBar={setPageBar} />
			)} */}
		</div>
	);
}

export default NavBar;
