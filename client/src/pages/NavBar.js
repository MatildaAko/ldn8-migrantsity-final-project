import React from "react";
import "../styles/NavBar.css";

function NavBar() {
	return (
		<div className="site-header-wrapper">
			<header className="site-header container">
				<a href="/" title="go back to Hackney Migrant centre homepage">
					<img
						crossOrigin="anonymous"
						className="site-logo"
						src="https://hackneymigrantcentre.org.uk/wp-content/uploads/2019/10/hackney-migrant-centre.png"
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
		</div>
	);
}

export default NavBar;
