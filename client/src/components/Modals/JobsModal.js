import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import EditIcon from "@mui/icons-material/Edit";

function JobModal({ postJob, IsAdd, job }) {

    const [openModal, setOpenModal] = useState(false);
	const [jobDetails, setJobDetails] = useState(job?job:{ id:"", title:"", description:"", skills_require:"" });
	const handleClickOpen = () => {
		setOpenModal(true);
	};
	const handleClose = () => {
		setOpenModal(false);
	};

	const addJob = (input) => (e) => {
		setJobDetails({ ...jobDetails, [input]: e.target.value });
	};

	const resetForm = () => {
		setJobDetails({
			...jobDetails,
			["title"]: "",
			["description"]: "",
			["skills_require"]: "",
		});
	};

	const handlePostJob = () => {
		postJob(jobDetails, IsAdd);
		resetForm();
		handleClose();
	};

	return (
		<div >
			{IsAdd?<Button variant="contained" onClick={handleClickOpen}>
				+ADD
			</Button>:
            <EditIcon onClick={handleClickOpen} />
            }
			<Dialog
                fullWidth
                open={openModal}
                onClose={handleClose}
                >
				<DialogContent>
					<DialogContentText>
						Job Title<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="job-title"
						label=""
						variant="outlined"
						size="small"
                        value={jobDetails.title}
						fullWidth
						onChange={addJob("title")}
					/>
					<br />
					<br />
					<DialogContentText>Description</DialogContentText>
					<TextField
                        multiline
						id="description"
						label=""
						variant="outlined"
						size="large"
                        value={jobDetails.description}
						fullWidth
						onChange={addJob("description")}
					/>
					<br />
					<br />
					<DialogContentText>Skills Require</DialogContentText>
					<TextField
                        multiline
						id="skills-require"
						label=""
						variant="outlined"
						size="large"
                        value={jobDetails.skills_require}
						fullWidth
						onChange={addJob("skills_require")}
					/>
					<br />
					<br />
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={handlePostJob}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default JobModal;
