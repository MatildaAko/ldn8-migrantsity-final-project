import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteModal from "../Modals/Delete";
import JobModal from "../Modals/JobsModal";
import axios from "axios";
import { useSnackbar } from "notistack";

const Jobs = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [jobs, setJobs] = useState([{ id:"", title:"", description:"", skills_require:"", used:false }]);
	const [load, setload] = useState(false);

	const deleteHandler = (id) => {
		axios.delete(`/api/jobs/${id}`)
		.then(() => {
			enqueueSnackbar("The job has been deleted!", { variant: "error" });
			setload(!load);
		});
	};
	const postJob = (jobDetails, isAdd) => {
		console.log(jobDetails, isAdd);
		const job = { title: jobDetails.title, description: jobDetails.description, skills_require: jobDetails.skills_require };
		if (isAdd) {
		axios.post("/api/jobs", job)
		.then(() => {
			enqueueSnackbar("New job has been added!", { variant: "success" });
		});
	} else {
		axios.put(`/api/jobs/${jobDetails.id}`, job)
		.then(() => {
			enqueueSnackbar("New job has been update!", { variant: "success" });
		});
	}
	setload(!load);
	};
	useEffect(() => {
		fetch("/api/jobs")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
      .then((body) => {
				setJobs(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [load]);


	const columns = [
		{
			field: "title",
			headerName: "Job Title",
			width: 200,
			editable: false,
		},
		{
			field: "description",
			headerName: "Job Description",
			width: 500,
			editable: false,
		},
		{
			field: "skills_require",
			headerName: "Skills Require",
			width: 400,
			editable: false,
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
				{!params.row.used&&<JobModal postJob = { postJob } job = { params.row } IsAdd = { false } />}
				{!params.row.used&&<DeleteModal deleteHandler = {deleteHandler} item = {{ id: params.id, title:"job" }} />}
				</>
			),
		},
	];
	const rows = jobs.map((job) => {
		return {
			id: job.id,
			title: job.title,
			description: job.description,//.slice(0,80),
			skills_require: job.skills_require,//.slice(0,80),
			used: job.used,
		};
	});
	return (
	<Container fluid>
		<Box
			container
			display="flex"
			flexDirection="column"
			alignItems="start"
			justifyContent="center"
			height="50vh"
			padding= "84px"
			rowGap={1}
			>
		<JobModal postJob = { postJob } IsAdd = { true } />
		<Box
			sx={{
				height: "100%",
				width: "100%",
			}}
			>
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

export default Jobs;