import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import "../styles/App.css";

const ApplicationDetails = () => {

  let { id } = useParams();
  const [applications, setApplications] = useState([]);
  useEffect(() => {
   const fetchData = async () => {

			const res = await fetch(`/api/applications/${id}`);
			const data = await res.json();
			setApplications(data);
		};
		fetchData();
	}, [id]);

	const applicationInformation = Object.assign({}, ...applications);
	console.log({ applicationInformation });
	return (
		<div className="content-details">
			{applications.length && (
				<Box className="applicationDetails">
					<Card>
						<CardContent>
							<Typography variant="h3">
								Application ID: {applicationInformation.id}
							</Typography>
							<Typography variant="body1">
								<b>Job Title:</b> {applicationInformation.job_title}
							</Typography>
							<Typography variant="body1">
								<b>Current HMC Employee:</b>{" "}
								{applicationInformation.current_employee ? "Yes" : "No"}
							</Typography>
							<Typography variant="body1">
								<b>Has right to work:</b>{" "}
								{applicationInformation.right_to_work ? "Yes" : "No"}
							</Typography>
							<Typography variant="body1">
								<b>Job Title:</b> {applicationInformation.job_title}
							</Typography>
							{["Applied", "Rejected", "In progress"].includes(
								applicationInformation.status
							) && (
								<>
									<Typography variant="body1">
										<b>First Name:</b> {applicationInformation.first_name}
									</Typography>
									<Typography variant="body1">
										<b>Last Name:</b> {applicationInformation.last_name}
									</Typography>
									<Typography variant="body1">
										<b>Address:</b>{" "}
										{`${applicationInformation.address1}, ${
											applicationInformation.address2
										}, ${
											applicationInformation.address3
												? `${applicationInformation.address3},`
												: ""
										} ${applicationInformation.town}, ${
											applicationInformation.country
										}, ${applicationInformation.postcode}`}
									</Typography>
									<Typography variant="body1">
										<b>Telephone:</b> {applicationInformation.telephone}
									</Typography>
									<Typography variant="body1">
										<b>Mobile:</b> {applicationInformation.mobile}
									</Typography>
									{/* <Typography variant="body1">
									<b>:</b> {applicationInformation.}
								</Typography>
								<Typography variant="body1">
									<b>:</b> {applicationInformation.}
								</Typography> */}
								</>
							)}
						</CardContent>
					</Card>
				</Box>
			)}
			<Link to="/hmcview">
				<Button>Back</Button>
			</Link>
			<Button>Delete</Button>
		</div>
	);
};

export default ApplicationDetails;
