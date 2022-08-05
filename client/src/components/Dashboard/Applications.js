import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Like from "../../assets/true.png";
import DisLike from "../../assets/false.png";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import axios from "axios";

const Applications = () => {
	const [applications, setApplications] = useState([]);
	const [status, setStatus] = useState([]);
	const [load, setLoad] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (label, event) => {
		const statusId = label.split(":")[0];
		const applicationId = anchorEl.id;
		const updatedApp = { "status_id": statusId };

		console.log(statusId, anchorEl.id, event.target);

		axios.put(`/api/applications/${applicationId}`, updatedApp);
		setAnchorEl(null);
		setLoad(!load);
	};

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

			fetch("/api/applications/status")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setStatus(body.map((el)=> `${el.id}:${el.status}`));
			})
			.catch((err) => {
				console.error(err);
			});
	}, [load]);
	console.log(applications);
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
			editable: true,
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
			editable: true,
		},
		{
			field: "rightToWork",
			headerName: "Right to Work",
			width: 100,
			editable: false,
			renderCell: (params) => (
				<img alt={params.value} src={params.value == "Yes" ? Like : DisLike} />
			),
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
				<IconButton
        aria-label="more"
        id={params.id}
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {status.map((option) => (
          <MenuItem key={option} id={params.id} selected={option === "1:Applied"} onClick={(event)=>handleClose(option, event)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
	</>
			),
		},
		{
			field: "details",
			headerName: "Details",
			width: 70,
			value: 1,
			editable: false,
			align: "right",
			renderCell: (params) => (
				<>
					<a href={`/applicationdetails/${params.id}`} id="detail">
						<ListAltIcon />
					</a>
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
			fullname:
				["Applied", "Rejected", "In progress"].includes(application.status)
					? application.id
					: application.fullname,
			city: application.town,
		};
	});
console.log(status);
	return (
		<>
			<Box
				container
				display="flex"
				alignItems="center"
				justifyContent="center"
				height="60vh"
				padding="0 84px"
			>
				<Box
					sx={{
						height: "100%",
						width: "100%",
						"& .other": {},
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
								case "Rejected":
									return "rejected";
								case "In progress":
									return "inProgress";
								case "Accepted":
									return "accepted";
								default:
									"other";
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
