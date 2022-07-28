import React, { useState, useEffect } from "react";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import FormControl from "@mui/material/FormControl";


const ApplicationForm = ({ setUserDetails, userDetails, applicationDetails, setApplicationDetails }) => {
    const [allJobs, setAllJobs] = useState([]);

    console.log(applicationDetails, userDetails);
    useEffect(() => {
        async function loadJob() {
        const arr = [];
        await axios.get("/api/jobs")
        .then((res) => {
            res.data.map((job) => {
                arr.push({ label: job.title, id: job.id });
            });
            setAllJobs(arr);
        });
    }
    loadJob();
}, []);

    const handleChange = (event, param) => {
        setApplicationDetails({ ...applicationDetails, [param]: event.target.value  });
        setUserDetails({ ...userDetails, ["application"]: applicationDetails });
	};

    return (
        <FormControl>
        <InputLabel id="jobs-label">Jobs</InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="jobs-label"
          id="jobs"
          value={applicationDetails.job_id}
          label="Jobs"
          onChange={(event) => {
            handleChange(event, "job_id");
            }}
        >
            {allJobs.map((job, index) => {
                return(
               <MenuItem key={index+1} value={job.id}>{job.label}</MenuItem>
                );
            })}
        </Select>
        <br></br>
        <TextField
            id="cover-letter"
            aria-label="cover-letter"
            label="Cover Letter"
            multiline
            rows={8}
            value={applicationDetails.cover_letter}
            sx={{ width: 600 }}
            onChange={(event) => {
                handleChange(event, "cover_letter");
                }}
                />
        <br></br>
        <TextField
            id="description"
            aria-label="description"
            label="Description"
            multiline
            rows={8}
            value={applicationDetails.description}
            sx={{ width: 600 }}
            onChange={(event) => {
                handleChange(event, "description");
                }}
                />
        </FormControl>
        );
};

export default ApplicationForm;
