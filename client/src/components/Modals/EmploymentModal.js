import React from "react";

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

function EmploymentModal() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState(new Date());
	const [checked, setChecked] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (newDate) => {
		setDate(newDate);
	};

	const handleChangeCheck = (event) => {
		setChecked(event.target.checked);
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
						id="outlined-basic"
						label=""
						variant="outlined"
						size="small"
						fullWidth
					/>
					<br />
					<br />
					<DialogContentText>
						Employer/Gap<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						id="outlined-basic"
						label=""
						variant="outlined"
						size="small"
						fullWidth
					/>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									defaultChecked
									checked={checked}
									onChange={handleChangeCheck}
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
										label=""
										inputFormat="dd/MM/yyyy"
										value={date}
										onChange={handleChange}
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
										label=""
										inputFormat="dd/MM/yyyy"
										value={date}
										onChange={handleChange}
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
						id="outlined-basic"
						label=""
						variant="outlined"
						size="small"
						rows={4}
						fullWidth
					/>
					<br />
					<br />
					<DialogContentText>
						Reason For Leaving / Explanation for Gap in Employment<span className="asterisk"> *</span>
					</DialogContentText>
					<TextField
						required
						multiline
						id="outlined-basic"
						label=""
						variant="outlined"
						size="small"
						rows={4}
						helperText="Please enter N/A if you are still employed or had no gaps in employment."
						fullWidth
					/>
				</DialogContent>
				<br />
				<br />
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={handleClose}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EmploymentModal;
