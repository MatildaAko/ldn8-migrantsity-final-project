import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ApplicantNavbar from "../components/ApplicantDashboard/ApplicantNavbar";
import ApplicantCard from "../components/ApplicantDashboard/ApplicantCard";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Auth0Login/Loading";

const ApplicantDashboard = ({ applicantId }) => {
	const [applications, setApplications] = useState([]);
	const [applicant, setApplicant] = useState([]);
	const { user } = useAuth0();
  useEffect(() => {
		fetch(`/api/applications/${applicantId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
      .then((data) => {
				// console.log(data);
				setApplications(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [applicantId]);

  useEffect(() => {
		fetch(`/api/${applicantId}/applications`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
      .then((data) => {
				setApplications(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [applicantId]);

	// const handleAddClick = () => {
	// 	setOpen(!open);
	// };
  return (
	<Container fluid>
        <ApplicantNavbar applicant={applicant} user={user} />
		{applications.map((application) => {
		return(
			<>
			<div>
				<ApplicantCard application = { application } />
			</div>
			</>
			);
		})}
	</Container>
	);
};

export default withAuthenticationRequired(ApplicantDashboard, {
	onRedirecting: () => <Loading />,
});