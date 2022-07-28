import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Like from "../../assets/true.png";
import DisLike from "../../assets/false.png";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Applications = () => {
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
			headerName: "Name/ID",
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
		{
			field: "actions",
			headerName: "Actions",
			width: 70,
			value: 1,
			editable: false,
			align: "right",
			renderCell: (params) => (
				<>
					<a href={`/applicationdetails/${params.id}`} id="detail" ><ListAltIcon /></a>
				</>
			),
		},
	];
	const rows = applications.map((application) => {
		return {
			id: application.id,
			jobTitle: application.job_title,
			rightToWork: `${application.right_to_work ? "Yes" : "No"}`,
			currentEmployee: `${application.current_employee ? "Yes" : "No"}`,
			hasGap: application.gap_reasons,
			cover: application.cover_letter,
			notes: application.notes,
			status: application.status,
			fullname: application.fullname,
			city: application.city,
		};
	});

    return (
        <>
		<Box
			container
			display="flex"
			alignItems="center"
			justifyContent="center"
			height="60vh"
			padding= "0 84px"
			>
		<Box
			sx={{
				height: "100%",
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
        </>
     );
};

export default Applications;