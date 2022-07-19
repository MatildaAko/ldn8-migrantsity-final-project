import React, { useState } from "react";

import "../../styles/ProfessionalQualifications.css";

import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Box,
} from "@mui/material";

function EducationHistoryModal({ setEducationInfo }) {
	const [open, setOpen] = useState(false);

	const [educationDetails, setEducationDetails] = useState({
		schoolName: "",
		course: "",
		subject: "",
		address1: "",
		address2: "",
		town: "",
		country: "",
		telephone: "",
		mobile: "",
		responsibilities: "",
		leavingReason: "",
	});

	const addEducation = (input) => (e) => {
		setEducationDetails({ ...educationDetails, [input]: e.target.value });
	};

	const addEducationToPage = () => {
		setEducationInfo((info) => [...info, educationDetails]);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	console.log(educationDetails);

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				+Add
			</Button>

			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						School Name<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="outlined-basic"
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("schoolName")}
					/>
					<br />
					<br />
					<DialogContentText>Course</DialogContentText>
					<TextField
						required
						id="outlined-basic"
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("course")}
					/>
					<br />
					<br />
					<DialogContentText>Subject</DialogContentText>
					<TextField
						required
						id="outlined-basic"
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("subject")}
					/>
					<br />
					<br />
					<DialogContentText>Address 1</DialogContentText>
					<TextField
						required
						id="outlined-basic"
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("address1")}
					/>
					<br />
					<br />
					<DialogContentText>Address 2</DialogContentText>
					<TextField
						id="outlined-basic"
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("address2")}
					/>
					<br />
					<br />
					<Box
						sx={{
							width: 500,
							height: 150,
							display: "flex",
							alignItems: "stretch",
							"& > :not(style)": { m: 1 },
						}}
					>
						<Box>
							<DialogContentText>Town</DialogContentText>
							<TextField label="" onChange={addEducation("town")} />
						</Box>
						<Box>
							<DialogContentText>Country</DialogContentText>
							<TextField
								helperText="Please leave blank if current employment"
								onChange={addEducation("country")}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							width: 500,
							height: 150,
							display: "flex",
							alignItems: "center",
							"& > :not(style)": { m: 1 },
						}}
					>
						<Box>
							<DialogContentText>Telephone</DialogContentText>
							<TextField type="number" onChange={addEducation("telephone")} />
						</Box>
						<Box>
							<DialogContentText>Mobile</DialogContentText>
							<TextField
								label=""
								type="number"
								onChange={addEducation("mobile")}
							/>
						</Box>
					</Box>
					<DialogContentText>Responsibilities:</DialogContentText>
					<TextField
						required
						multiline
						id="outlined-basic"
						variant="outlined"
						size="small"
						rows={4}
						fullWidth
						onChange={addEducation("responsibilities")}
					/>
					<br />
					<br />
					<br />
					<DialogContentText>
						Reason For Leaving / Explanation for Gap in Employment
						<span className="asterisk">*</span>
					</DialogContentText>
					<TextField
						required
						multiline
						id="outlined-basic"
						variant="outlined"
						size="small"
						rows={4}
						helperText="Please enter N/A if you are still employed or had no gaps in employment."
						fullWidth
						onChange={addEducation("leavingReason")}
					/>
				</DialogContent>
				<br />
				<br />
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={addEducationToPage}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EducationHistoryModal;
