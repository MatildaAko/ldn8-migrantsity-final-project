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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function EmploymentModal({ setUserDetails, userDetails, employments, setEmploymentInfo }) {
	const [open, setOpen] = useState(false);
	const [start_date, setStartDate] = useState(null);
	const [end_date, setEndDate] = useState(null);

	const [checked, setChecked] = useState(false);
	const [employmentDetails, setEmploymentDetails] = useState({
		position: "",
		employer: "",
		currently_working: false,
		start_date: "",
		end_date: "",
		responsibilities: "",
		leaving_reason: "",
	});
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const addEmployment = (input) => (e) => {
		setEmploymentDetails({ ...employmentDetails, [input]: e.target.value });
	};

	const stillWorkingCheck = (e) => {
		setChecked(e.target.checked);
		setEmploymentDetails({
			...employmentDetails,
			["currently_working"]: e.target.checked,
			["end_date"]: e.target.checked ? null : "",
		});
	};
	const changeStartDate = (e) => {
		setStartDate(e);
		setEmploymentDetails({
			...employmentDetails,
			["start_date"]: e,
		});
	};
	const changeEndDate = (e) => {
		setEndDate(e);
		setEmploymentDetails({
			...employmentDetails,
			["end_date"]: e,
		});
	};
	const resetEmployment = () => {
		setEmploymentDetails({
			...employmentDetails,
			["position"]: "",
			["employer"]: "",
			["currently_working"]: false,
			["start_date"]: "",
			["end_date"]: "",
			["responsibilities"]: "",
			["leaving_reason"]: "",
		});
		setStartDate(null);
		setEndDate(null);
		setChecked(false);
	};

	const addEmploymentToPage = () => {
		setEmploymentInfo((info) => [...info, employmentDetails]);
		setUserDetails({
			...userDetails,
			["employments"]: employments.concat( employmentDetails ),
		});
		resetEmployment();
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
						Position/Gap<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="position"
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEmployment("position")}
					/>
					<DialogContentText>
						Employer/Gap<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="employer"
						label=""
						variant="outlined"
						size="small"
						fullWidth
						onChange={addEmployment("employer")}
					/>
					<FormGroup>
						<FormControlLabel
							id="currently_working"
							control={
								<Checkbox
									value={checked}
									onChange={stillWorkingCheck}
									checked={checked}
								/>
							}
							label="I am currently working in this role"
						/>
					</FormGroup>

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
								Start Date<span className="asterisk"> *</span>
							</DialogContentText>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Stack spacing={2}>
									<DesktopDatePicker
										required
										inputFormat="dd/MM/yyyy"
										value={start_date}
										onChange={changeStartDate}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
						</Box>
						<Box>
							<DialogContentText>End Date</DialogContentText>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Stack spacing={2}>
									<DesktopDatePicker
										inputFormat="dd/MM/yyyy"
										value={end_date}
										maxDate={new Date()}
										minDate={start_date}
										onChange={changeEndDate}
										disabled={checked ? true : false}
										required={checked ? false : true}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
						</Box>
					</Box>
					<DialogContentText>Responsibilities:</DialogContentText>
					<TextField
						required
						multiline
						id="responsibilities"
						variant="outlined"
						size="small"
						rows={3}
						fullWidth
						onChange={addEmployment("responsibilities")}
					/>
					<br />
					<DialogContentText>
						Reason For Leaving / Explanation for Gap in Employment
						<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						multiline
						id="leaving_reason"
						variant="outlined"
						size="small"
						rows={3}
						onChange={addEmployment("leaving_reason")}
						helperText="Please enter N/A if you are still employed or had no gaps in employment."
						fullWidth
					/>
				</DialogContent>
				<br />
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={addEmploymentToPage}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EmploymentModal;
