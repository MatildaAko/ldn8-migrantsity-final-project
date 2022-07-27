import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Button, Box } from "@mui/material";
import Loading from "../components/Auth0Login/Loading";
import HMCNavbar from "../components/ApplicantDashboard/HMCNavbar";
import Applications from "../components/Dashboard/Applications";
import Jobs from "../components/Dashboard/Jobs";

const HMCDashboard = () => {
	const { user } = useAuth0();
	const { name, picture } = user;
	const [panel, setPanel] = useState(<Applications />);
  return (
	<Container fluid>
			<HMCNavbar user={name} picture={picture} />
			<Box
				container
				display="flex"
				justifyContent="start"
				width="100%"
				height="10vh"
				padding= "0 84px"
				>
				<Button onClick={()=> setPanel(<Applications />)} > Applications </Button>
				<Button onClick={()=> setPanel(<Jobs />)} > Jobs </Button>
			</Box>
			{panel}
	</Container>
	);
};

export default withAuthenticationRequired(HMCDashboard, {
	onRedirecting: () => <Loading />,
});