import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import HMCNavbar from "../components/ApplicantDashboard/HMCNavbar";

const HMCDashboard = () => {
	const [applications, setApplications] = useState([]);
	const [user, setUser] = useState({ username: "Dilara" });
  useEffect(() => {
		fetch("/api/applications")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
      .then((body) => {
				console.log(body);
				setApplications(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	const columns = [
		{
			field: "id",
			headerName: "Application ID",
			width: 120,
			renderCell: (params) => (
				<Link to={`/applicationdetails/${params.id}`}>
					<Button>{params.id}</Button>
				</Link>
			),
		},
		{
			field: "jobTitle",
			headerName: "Job Title",
			width: 150,
			editable: false,
		},
		{
			field: "currentlyWork",
			headerName: "Current Employee",
			width: 150,
			editable: false,
		},
		{
			field: "rightToWork",
			headerName: "Right to Work",
			description: "This column has a value getter and is not sortable.",
			width: 160,
			editable: false,
		},
		{
			field: "skills",
			headerName: "Skills",
			width: 200,
			editable: false,
		},
		{
			field: "hasGap",
			headerName: "Gap",
			width: 200,
			editable: false,
		},
		{
			field: "cover",
			headerName: "Cover Letter",
			width: 200,
			editable: false,
		},
	];
	const rows = applications.map((application) => {
		return {
			id: application.id,
			jobTitle: application.job_title,
			rightToWork: `${application.right_to_work ? "Yes" : "No"}`,
			currentlyWork: `${application.currently_work ? "Yes" : "No"}`,
			skills: application.skills.split(",").join("\n"),
			hasGap: application.gap_reasons,
			cover: application.cover_letter,
		};
	});
  return (
	<Container fluid>
		<HMCNavbar user={user} />
		<Box
			container
			display="flex"
			justifyContent="start"
			alignItems="center"
			width="100%"
			height="10vh"
			>
		</Box>
		<Box
			container
			display="flex"
			alignItems="center"
			justifyContent="center"
			height="20vh"
			padding= "84px"
			>
		<Box
			width="100%"
			direction="column"
			height="50vh"
		>
			<div><h3>Applications</h3></div>
			<DataGrid
				getRowHeight={() => "auto"}
				getEstimatedRowHeight={() => 10}
				rows={rows}
				columns={columns}
				rowsPerPageOptions={[10, 25, 50, 100]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</Box>
		</Box>
	</Container>
	);
};

export default HMCDashboard;

