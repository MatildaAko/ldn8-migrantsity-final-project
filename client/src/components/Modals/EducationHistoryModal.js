import React from "react";

import "../../styles/ProfessionalQualifications.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";

function EducationHistoryModal() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
						label=""
						variant="outlined"
						size="small"
						fullWidth
					/>
					<br />
					<br />
					<DialogContentText>Course</DialogContentText>
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
					<DialogContentText>Subject</DialogContentText>
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
					<DialogContentText>Address 1</DialogContentText>
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
					<DialogContentText>Address 2</DialogContentText>
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
							<TextField label="" />
						</Box>
						<Box>
							<DialogContentText>Country</DialogContentText>
							<TextField
								label="United Kingdom"
								helperText="Please leave blank if current employment"
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
							<TextField label="" type="number" />
						</Box>
						<Box>
							<DialogContentText>Mobile</DialogContentText>
							<TextField label="" type="number" />
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
					<br />
					<DialogContentText>
						Reason For Leaving / Explanation for Gap in Employment<span className="asterisk">*</span>
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

export default EducationHistoryModal;
