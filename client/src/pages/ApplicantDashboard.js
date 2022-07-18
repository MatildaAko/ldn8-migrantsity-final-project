import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ApplicantNavbar from "../components/ApplicantDashboard/ApplicantNavbar";

import DeleteModal from "../components/Modals/Delete";

const ApplicantDashboard = ({ applicantId }) => {
	const [applications, setApplications] = useState([]);
	const [applicant, setApplicant] = useState([]);
	const [open, setOpen] = useState(false);
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
	}, []);

  useEffect(() => {
		fetch(`/api/${applicantId}/applications`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
      .then((data) => {
				// console.log(data);
				setApplicant(data[0]);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
    const columns = [
		{
			field: "id",
			headerName: "Application ID",
			width: 110,
			renderCell: (params) => (
				<Link to={`/applicationdetails/${params.id}`}>
					<Button>{params.id}</Button>
				</Link>
			),
		},
		{
			field: "jobTitle",
			headerName: "Job Title",
			width: 200,
			editable: false,
		},
		{
			field: "currentlyWork",
			headerName: "Current Employee",
			width: 140,
			editable: false,
		},
		{
			field: "rightToWork",
			headerName: "Right to Work",
			description: "This column has a value getter and is not sortable.",
			width: 110,
			editable: false,
		},
		{
			field: "skills",
			headerName: "Skills",
			width: "300",
			editable: false,
		},
		{
			field: "actions",
			headerName: "Actions",
			width: 90,
			value: 1,
			editable: false,
			align: "right",
			renderCell: (params) => (
				<>
					<a href={`/applicationdetails/${params.id}`} id="detail" ><ListAltIcon  /></a>
					<EditIcon id="edit" onClick={handleEditClick} />
					<DeleteModal id="delete" onClick={handleDeleteClick} />
				</>
			),
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

	// const handleAddClick = () => {
	// 	setOpen(!open);
	// };

	const handleEditClick = (params) => {
		console.log("Params : ", params.target.value);
		setOpen(!open);
	};

	const handleDeleteClick = (params) => {
		console.log("Params : ", params.target.value);
		setOpen(!open);
	};

  return (
		<Container fluid>
            <ApplicantNavbar applicant={applicant} />
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

export default ApplicantDashboard;

