import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, Button, GlobalStyles, Menu, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ApplicantNavbar from "../components/ApplicantDashboard/ApplicantNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

const ApplicantDashboard = ({ applicantId }) => {
	const [applications, setApplications] = useState([]);
	const [applicant, setApplicant] = useState([]);
  useEffect(() => {
		fetch(`/api/applications/${applicantId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
      .then((data) => {
				console.log(data);
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
				console.log(data);
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
			headerName: "Action",
			width: 100,
			value: 1,
			editable: false,
			renderCell: () => (
				<>
				<IconButton aria-label="Example" onClick={gridMenuClick}>
				<FontAwesomeIcon icon={faEllipsisV} />
				</IconButton>
				<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={gridMenuClick}
						MenuListProps={{
						'aria-labelledby': 'basic-button',
						}}
					>
					<MenuItem onClick={gridMenuAction}><DeleteIcon /> Delete</MenuItem>
					<MenuItem onClick={gridMenuAction}><EditIcon /> Edit</MenuItem>
				</Menu>
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
	// 	setEduOpen(!eduOpen);
	// };

	// const handleEditClick = (params) => {
	// 	console.log("Params : ", params.target.value);
	// 	setEduOpen(!eduOpen);
	// };

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const gridMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const gridMenuAction = () => {
		setAnchorEl(null);
	};
  return (
		<Container fluid>
            <ApplicantNavbar applicant={applicant} />
				<Box
					container
					display="flex"
					justifyContent="start"
					alignItems="center"
					width="80%"
					height="10vh"
					>

</Box>
				<Box
					container
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100%"
					height="80vh"
					>
				<Box
					width="80%"
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

