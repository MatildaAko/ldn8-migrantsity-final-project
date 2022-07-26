import React, { useState } from "react";

import "../../styles/ProfessionalQualifications.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";

function EducationHistoryModal({
	setEducationInfo,
	setUserDetails,
	userDetails,
	education,
}) {
	const [eduOpen, setEduOpen] = useState(false);
	const [mobile, setMobile] = useState("");
	const [telephone, setTelephone] = useState("");
	const [educationDetails, setEducationDetails] = useState({
		school_name: "",
		course_name: "",
		subject: "",
		address1: "",
		address2: "",
		town: "",
		country: "",
		telephone: "",
		mobile: "",
		grades: "",
	});

	const handleClickOpen = () => {
		setEduOpen(true);
	};

	const handleClose = () => {
		setEduOpen(false);
	};

	const addEducation = (input) => (e) => {
		setEducationDetails({ ...educationDetails, [input]: e.target.value });
	};

	const setTelephoneValue = (e) => {
		e.target.value = e.target.value.replace(/[^0-9+-]/g, "");
		setTelephone(e.target.value);
		setEducationDetails({
			...educationDetails,
			["telephone"]: telephone,
		});
	};

	const setMobileValue = (e) => {
		e.target.value = e.target.value.replace(/[^0-9+-]/g, "");
		setMobile(e.target.value);
		setEducationDetails({
			...educationDetails,
			["mobile"]: mobile,
		});
	};


	const resetEducation = () => {
		setEducationDetails({
			...educationDetails,
			["school_name"]: "",
			["course_name"]: "",
			["subject"]: "",
			["address1"]: "",
			["address2"]: "",
			["town"]: "",
			["country"]: "",
			["telephone"]: "",
			["mobile"]: "",
			["grades"]: "",
		});
	};

	const addEducationToPage = () => {
		setEducationInfo((info) => [...info, educationDetails]);
		setUserDetails({
			...userDetails,
			["education"]: education.concat(educationDetails),
		});
		resetEducation();
		handleClose();
	};

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				+Add
			</Button>
			<Dialog open={eduOpen} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						School Name<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="school-name"
						label=""
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("school_name")}
					/>
					<br />
					<br />
					<DialogContentText>Course</DialogContentText>
					<TextField
						required
						id="course"
						label=""
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("course_name")}
					/>
					<br />
					<br />
					<DialogContentText>Subject</DialogContentText>
					<TextField
						required
						id="subject"
						label=""
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
						id="address1"
						label=""
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("address1")}
					/>
					<br />
					<br />
					<DialogContentText>Address 2</DialogContentText>
					<TextField
						required
						id="address2"
						label=""
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEducation("address2")}
					/>
					<br />
					<br />
					<Box className="flex-space">
						<Box className="flex-half">
							<DialogContentText>Town</DialogContentText>
							<TextField
								id="town"
								label=""
								variant="outlined"
								size="small"
								fullWidth
								onChange={addEducation("town")}
							/>
						</Box>
						<Box className="flex-half">
							<DialogContentText>Country</DialogContentText>
							<TextField
								id="country"
								label=""
								variant="outlined"
								size="small"
								fullWidth
								onChange={addEducation("country")}
							/>
						</Box>
					</Box>
					<Box className="flex-space">
						<Box className="flex-half">
							<DialogContentText>Telephone</DialogContentText>
							<TextField
								id="telephone"
								type="tel"
								value={telephone}
								label=""
								variant="outlined"
								size="small"
								fullWidth
								onChange={setTelephoneValue}
							/>
						</Box>
						<Box className="flex-half">
							<DialogContentText>Mobile</DialogContentText>
							<TextField
								id="mobile"
								type="tel"
								value={mobile}
								label=""
								variant="outlined"
								size="small"
								fullWidth
								onChange={setMobileValue}
							/>
						</Box>
					</Box>
					<Box>
						<DialogContentText>Grades:</DialogContentText>
						<TextField
							required
							multiline
							id="grades"
							variant="outlined"
							size="small"
							rows={4}
							fullWidth
							onChange={addEducation("grades")}
						/>
					</Box>
				</DialogContent>
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
