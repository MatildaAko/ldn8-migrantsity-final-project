import React, { useState } from "react";

import "../../styles/ProfessionalQualifications.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function ProfessionalQualificationsModal({
	setQualificationInfo,
	qualifications,
	setUserDetails,
	userDetails,
}) {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(null);
	const [qualificationDetails, setQualificationDetails] = useState({
		title: "",
		date: "",
		status: "",
	});

	const addQualification = (input) => (e) => {
		setQualificationDetails({
			...qualificationDetails,
			[input]: e.target.value,
		});
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const changeDate = (e) => {
		setDate(e);
		setQualificationDetails({
			...qualificationDetails,
			["date"]: e,
		});
	};

	const resetQualifications = () => {
		setQualificationDetails({
			...qualificationDetails,
			["title"]: "",
			["date"]: "",
			["status"]: "",
		});
		setDate(null);
	};

	const addQualificationsToPage = () => {
		setQualificationInfo((info) => [...info, qualificationDetails]);
		setUserDetails({
			...userDetails,
			["qualifications"]:
				qualifications.concat(qualificationDetails),
		});
		resetQualifications();
		handleClose();
	};


	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				+Add
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						Title<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="title"
						label=""
						variant="outlined"
						fullWidth
						onChange={addQualification("title")}
						/>
						<br />
						<br />
						<Box
						sx={{
							display: "flex",
							alignItems: "center",
							"& > :not(style)": { m: 0 },
						}}
						>
						<Box>
							<DialogContentText>
								Date<span className="asterisk">*</span>
							</DialogContentText>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DesktopDatePicker
									inputFormat="dd/MM/yyyy"
									value={date}
									onChange={changeDate}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Box>
						<Box sx={{ padding: 2 }}></Box>
						<Box>
							<DialogContentText>Status</DialogContentText>
							<TextField
								id="status"
								label=""
								variant="outlined"
								fullWidth
								onChange={addQualification("status")}
							/>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={addQualificationsToPage}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ProfessionalQualificationsModal;