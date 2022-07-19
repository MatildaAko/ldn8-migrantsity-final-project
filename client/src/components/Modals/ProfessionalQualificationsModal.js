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
	Stack,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function ProfessionalQualificationsModal({ setProfessionalInfo }) {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(null);

	const [professionalDetails, setProfessionalDetails] = useState({
		title: "",
		date: "",
		status: "",
	});

	const addProfessional = (input) => (e) => {
		setProfessionalDetails({ ...professionalDetails, [input]: e.target.value });
	};

	const changeDate = (e) => {
		setDate(e);
		setProfessionalDetails({
			...professionalDetails,
			["date"]: e,
		});
	};

	const addProfessionalToPage = () => {
		setProfessionalInfo((info) => [...info, professionalDetails]);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	console.log(professionalDetails);

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
						id="outlined-basic"
						label=""
						variant="outlined"
						size="small"
						fullWidth
						onChange={addProfessional("title")}
					/>
					<Box
						sx={{
							width: 500,
							height: 200,
							display: "flex",
							alignItems: "center",
							"& > :not(style)": { m: 1 },
						}}
					>
						<Box>
							<DialogContentText>
								Date<span className="asterisk">*</span>
							</DialogContentText>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Stack spacing={2}>
									<DesktopDatePicker
										inputFormat="dd/MM/yyyy"
										value={date}
										onChange={changeDate}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
						</Box>
						<Box>
							<DialogContentText>Status</DialogContentText>
							<TextField onChange={addProfessional("status")} />
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={addProfessionalToPage}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ProfessionalQualificationsModal;
