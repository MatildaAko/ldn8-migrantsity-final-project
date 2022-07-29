import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { useSnackbar } from "notistack";

function SingleApplication({ applicant_id }) {
	const { enqueueSnackbar } = useSnackbar();

    const [allJobs, setAllJobs] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [applicationDetails, setApplicationDetails] = useState({
        applicant_id: applicant_id,
        job_id: "",
        cover_letter: "",
        description: "",
    });

    const handleClickOpen = () => {
		setOpenModal(true);
	};

    const handleClose = () => {
		setOpenModal(false);
	};

    const resetForm = () => {
		setApplicationDetails({
			...applicationDetails,
			["applicat_is"]: "",
            ["job_id"]: "",
			["cover_letter"]: "",
			["description"]: "",
		});
	};

	const handlePostApplication = () => {
		axios.post("/api/applications", applicationDetails)
        .then (() => {
            enqueueSnackbar("New application has been created!", { variant: "success" });
            resetForm();
            handleClose();
        });
	};

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
        };

console.log("aap",applicationDetails);
    return (
		<Box sx={{ m: "0 0 20px 80px" }} >
			<Button variant="contained" onClick={handleClickOpen}>
				New Application
			</Button>
			<Dialog
                fullWidth
                open={openModal}
                onClose={handleClose}
                >
				<DialogContent>
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
        <br />
        <br />
        <TextField
            id="cover-letter"
            sx={{ width: "100%" }}
            aria-label="cover-letter"
            label="Cover Letter"
            multiline
            rows={4}
            value={applicationDetails.cover_letter}
            onChange={(event) => {
                handleChange(event, "cover_letter");
                }}
                />
        <br />
        <br />
        <TextField
            id="description"
            aria-label="description"
            label="Description"
            multiline
            rows={4}
            value={applicationDetails.description}
            sx={{ width: "100%" }}
            onChange={(event) => {
                handleChange(event, "description");
                }}
                />

			</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={handlePostApplication}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

export default SingleApplication;
