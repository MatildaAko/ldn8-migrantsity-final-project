// import { Link } from "react-router-dom";
import AuthenticationButton from "../components/Auth0Login/auth-nav";

import "../styles/App.css";


import "./Home.css";
export function Home() {
	return (
		<div className="page-header">
			<div className="container">
				<header>
					<h1 className="page-header__title">Jobs</h1>
					<span><AuthenticationButton /></span>
				</header>
			</div>
		</div>

	);
}

export default Home;


// import { Link } from "react-router-dom";
// import AuthenticationButton from "../components/Auth0Login/auth-nav";

// import "./Home.css";
// export function Home() {

//     return (
//         <main role="main">
//             <div>
//                 <h1>MIGRANTSITY</h1>
//                 <h2 className="message" data-qa="message">
//                     Hackney Migrant Center
//                 </h2>
//                 <br />
//                 <AuthenticationButton />
//                 <br />
//                 <Link to="/application">Application</Link>
//         <br />
//                 <Link to="/hmcview">HMC Dashboard</Link>
//         <br />
//                 <Link to="/applicantdashboard">Applicant Dashboard</Link>
//         <br />
//                 <Link to="/equality">Equality Form</Link>
//             </div>
//         </main>
//     );
// }

// export default Home;
