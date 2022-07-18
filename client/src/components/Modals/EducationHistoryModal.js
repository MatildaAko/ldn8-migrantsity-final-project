import React from "react";

import "../../styles/ProfessionalQualifications.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";

function EducationHistoryModal({ setEduOpen }) {

	const handleClose = () => {
		setEduOpen(false);
	};

	return (
		<div>
			{open && (
				<div className="editList">
					<DialogContent className="editList">
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
						<Box className="flex-space">
							<Box className="flex-half">
								<DialogContentText>Town</DialogContentText>
								<TextField label="" />
							</Box>
							<Box className="flex-half">
								<DialogContentText>Country</DialogContentText>
								<TextField
									label="United Kingdom"
									helperText="Please leave blank if current employment"
								/>
							</Box>
						</Box>
						<Box className="flex-space">
							<Box className="flex-half">
								<DialogContentText>Telephone</DialogContentText>
								<TextField label="" type="number" />
							</Box>
							<Box className="flex-half">
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
							Reason For Leaving / Explanation for Gap in Employment
							<span className="asterisk">*</span>
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
				</div>
			)}
		</div>
	);
}

export default EducationHistoryModal;
