import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import ApplicationDetails from "./ApplicationDetails";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const HMCDashboard = () => {
	const [applications, setApplications] = useState([]);
  useEffect(() => {
		fetch("/api/applicants")
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
		{ field: "id", headerName: "Application ID", width: 120 },
		{
			field: "jobtitle",
			headerName: "Job Title",
			width: 150,
			editable: false,
		},
		{
			field: "currentlywork",
			headerName: "Current Employee",
			width: 150,
			editable: false,
		},
		{
			field: "righttowork",
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
			field: "hasgap",
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
			// jobtitle: application.surname,
			righttowork: application.right_to_work,
			currentlywork: application.currently_work,
			skills: application.skills.split(",").join("\n"),
			hasgap: application.gap_reasons,
			cover: application.supp_statement,
		};
	});
  return (
		<Container fluid>
			<Box sx={{ height: 400, width: "100%" }}>
				<DataGrid
					getRowHeight={() => "auto"}
					getEstimatedRowHeight={() => 200}
					rows={rows}
					columns={columns}
					pageSize={applications.length % 10}
					rowsPerPageOptions={[10, 25, 50, 100]}
					checkboxSelection
					disableSelectionOnClick
				/>
			</Box>
		</Container>
	);
};

export default HMCDashboard;

