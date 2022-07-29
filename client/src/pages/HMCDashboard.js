import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Button, Box } from "@mui/material";
import Loading from "../components/Auth0Login/Loading";
import HMCNavbar from "../components/ApplicantDashboard/HMCNavbar";
import Applications from "../components/Dashboard/Applications";
import Jobs from "../components/Dashboard/Jobs";

import "../styles/HMCDashboard.css";

import ApplicationsAdminBar from "../pages/ApplicationsAdminBar";

const HMCDashboard = () => {
	const { user } = useAuth0();
	const { name, picture } = user;
	const [panel, setPanel] = useState(<Applications />);
	return (
		<Container fluid>
			<ApplicationsAdminBar />
			<div className="userAndButtons">
				<HMCNavbar user={name} picture={picture} />
				<Box
					container
					display="flex"
					justifyContent="start"
					width="100%"
					// height="10vh"
					padding="0 84px"
				>
					<Button className="buttonApp" onClick={() => setPanel(<Applications />)}>
						{" "}
						Applications{" "}
					</Button>
					<Button className="buttonApp" onClick={() => setPanel(<Jobs />)}> Jobs </Button>
				</Box>
			</div>
			{panel}
		</Container>
	);
};

export default withAuthenticationRequired(HMCDashboard, {
	onRedirecting: () => <Loading />,
});
