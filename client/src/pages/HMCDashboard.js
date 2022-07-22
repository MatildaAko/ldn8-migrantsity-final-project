import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Auth0Login/Loading";
import HMCNavbar from "../components/ApplicantDashboard/HMCNavbar";
import Like from "../assets/like.png";
import DisLike from "../assets/dislike.png";

const HMCDashboard = () => {
	const { user } = useAuth0();
	const { nickname, picture } = user;
	const [applications, setApplications] = useState([]);
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
			field: "fullname",
			headerName: "Name",
			width: 150,
			editable: false,
		},
		{
			field: "jobTitle",
			headerName: "Job Title",
			width: 250,
			editable: false,
		},
		{
			field: "status",
			headerName: "STATUS",
			width: 120,
			editable: false,
		},
		{
			field: "city",
			headerName: "City",
			width: 130,
			editable: false,
		},
		{
			field: "notes",
			headerName: "Notes",
			width: 300,
			editable: false,
		},
		{
			field: "rightToWork",
			headerName: "Right to Work",
			description: "This column has a value getter and is not sortable.",
			width: 100,
			editable: false,
			renderCell: (params) => <img alt={params.value} src={params.value=="Yes"?Like:DisLike} />,
		},
	];
	const rows = applications.map((application) => {
		return {
			id: application.id,
			jobTitle: application.job_title,
			rightToWork: `${application.right_to_work ? "Yes" : "No"}`,
			notes: application.notes,
			status: application.status,
			fullname: application.fullname,
			city: application.city,
		};
	});
  return (
	<Container fluid>
		<HMCNavbar user={nickname} picture={picture} />
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
			sx={{
				height: 300,
				width: "100%",
				"& .other": {
				},
				"& .rejected": {
					backgroundColor: "#ff943975",
					color: "#1a3e72",
				},
				"& .inProgress": {
					backgroundColor: "#b9d5ff91",
					color: "#1a3e72",
				},
			}}
		>
			<DataGrid
				getCellClassName={(params) => {
					switch (params.value) {
						case "Rejected": return "rejected";
						case "In progress": return "inProgress";
						case "Accepted": return "accepted";
						default: "other";
					}
				}}
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

export default withAuthenticationRequired(HMCDashboard, {
	onRedirecting: () => <Loading />,
});