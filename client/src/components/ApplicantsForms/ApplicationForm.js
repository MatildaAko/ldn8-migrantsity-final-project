/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";

const ApplicationForm = ({ setUserDetails, userDetails }) => {
	const [allJobs, setAllJobs] = useState([]);
	const [jobID, setJobID] = useState(0);
	const [coverLetter, setCoverLetter] = useState("");
	const [description, setDescription] = useState("");
	const [applicationDetails, setApplicationDetails] = useState({
		job_id: "",
		cover_letter: "",
		description: "",
	});

	useEffect(() => {
		const arr = [];
		axios.get("/api/jobs").then((res) => {
			res.data.map((job) => {
				arr.push({ label: job.title, id: job.id });
			});
			setAllJobs(arr);
		});
	}, []);

	useEffect(() => {
		setApplicationDetails({
			job_id: jobID,
			cover_letter: coverLetter,
			description: description,
		});
		setUserDetails({ ...userDetails, ["application"]: [applicationDetails] });
	}, [jobID, coverLetter, description]);

	const handleChangeJob = (event, value) => {
		setJobID(value.id);
	};

	const handleChangeCoverLetter = (event) => {
		setCoverLetter(event.target.value);
	};

	const handleChangeDescription = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
			<Autocomplete
				disablePortal
				id="job"
				aria-label="job"
				name="job"
				options={allJobs}
				sx={{ width: 600 }}
				renderInput={(params) => <TextField {...params} label="Jobs" />}
				onChange={handleChangeJob}
			/>
			<br></br>
			<TextField
				id="cover-letter"
				aria-label="cover-letter"
				label="Cover Letter"
				multiline
				rows={8}
				defaultValue=""
				sx={{ width: 600 }}
				onChange={handleChangeCoverLetter}
			/>
			<br></br>
			<br></br>
			<TextField
				id="description"
				aria-label="description"
				label="Description"
				multiline
				rows={8}
				defaultValue=""
				sx={{ width: 600 }}
				onChange={handleChangeDescription}
			/>
		</div>
	);
};

export default ApplicationForm;
