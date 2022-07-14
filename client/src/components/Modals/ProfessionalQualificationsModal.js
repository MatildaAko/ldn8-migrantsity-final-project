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

function ProfessionalQualificationsModal() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState(new Date());

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (newDate) => {
		setDate(newDate);
	};

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				+Add
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						Title<span>*</span>
					</DialogContentText>
					<TextField
						required
						id="outlined-basic"
						label=""
						variant="outlined"
						size="small"
						fullWidth
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
								Date<span>*</span>
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
							<DialogContentText>Status</DialogContentText>
							<TextField label="" />
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>Cancel</Button>
					<Button variant="contained" onClick={handleClose}>Save</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ProfessionalQualificationsModal;
