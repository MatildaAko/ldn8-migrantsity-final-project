import React, { useState } from "react";

import "../../styles/ProfessionalQualifications.css";

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Box,
	FormControl,
	Select,
	MenuItem,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormLabel,
} from "@mui/material";

function LanguagesModal({ setLanguageInfo }) {
	const [open, setOpen] = useState(false);

	const [languageDetails, setLanguageDetails] = useState({
		language: "",
		degreeOfFluency: "",
		spoken: Boolean,
		written: Boolean,
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const addLanguage = (input) => (e) => {
		setLanguageDetails({ ...languageDetails, [input]: e.target.value });
	};

	const addLanguageToPage = () => {
		setLanguageInfo((info) => [...info, languageDetails]);
	};

	console.log(languageDetails);

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				+Add
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<Box
						sx={{
							width: 550,
							height: 200,
							display: "flex",
							alignItems: "center",
							"& > :not(style)": { m: 1 },
						}}
					>
						<Box>
							<DialogContentText>
								Language<span className="asterisk"> *</span>
							</DialogContentText>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 200 }}
								size="small"
							>
								<Select
									labelId="demo-select-small"
									value={languageDetails.language}
									onChange={addLanguage("language")}
									variant="outlined"
								>
									<MenuItem value="">
										<em>Please Select</em>
									</MenuItem>
									<MenuItem value={"English"}>English</MenuItem>
									<MenuItem value={"Mandarin"}>Mandarin</MenuItem>
									<MenuItem value={"Hindi"}>Hindi</MenuItem>
									<MenuItem value={"Spanish"}>Spanish</MenuItem>
									<MenuItem value={"French"}>French</MenuItem>
									<MenuItem value={"Arabic"}>Arabic</MenuItem>
									<MenuItem value={"Bengali"}>Bengali</MenuItem>
									<MenuItem value={"Russian"}>Russian</MenuItem>
									<MenuItem value={"Portuguese"}>Portuguese</MenuItem>
									<MenuItem value={"Indonesian"}>Indonesian</MenuItem>
									<MenuItem value={"Turkish"}>Turkish</MenuItem>
									<MenuItem value={"Italian"}>Italian</MenuItem>
									<MenuItem value={"German"}>German</MenuItem>
									<MenuItem value={"Persian"}>Persian</MenuItem>
									<MenuItem value={"Romanian"}>Romanian</MenuItem>
									<MenuItem value={"Polish"}>Polish</MenuItem>
									<MenuItem value={"Lithuanian"}>Lithuanian</MenuItem>
									<MenuItem value={"Somali"}>Somali</MenuItem>
									<MenuItem value={"Gujarati"}>Gujarati</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box>
							<DialogContentText>Degree of Fluency*</DialogContentText>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 220 }}
								size="small"
							>
								<Select
									labelId="demo-select-small"
									value={languageDetails.degreeOfFluency}
									label=""
									onChange={addLanguage("degreeOfFluency")}
									variant="outlined"
								>
									<MenuItem value="">
										<em>Please Select</em>
									</MenuItem>
									<MenuItem value={"Elementary Proficiency"}>
										Elementary Proficiency
									</MenuItem>
									<MenuItem value={"Limited Working Proficiency"}>
										Limited Working Proficiency
									</MenuItem>
									<MenuItem value={"Professional Working Proficiency"}>
										Professional Working Proficiency
									</MenuItem>
									<MenuItem value={"Full Professional Proficiency"}>
										Full Professional Proficiency
									</MenuItem>
									<MenuItem value={"Native"}>Native</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>
					<Box
						className="spokenAndWritten"
						sx={{
							width: 420,
							height: 100,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							"& > :not(style)": { m: 1 },
						}}
					>
						<Box>
							<FormControl>
								<FormLabel id="demo-controlled-radio-buttons-group">
									Spoken
								</FormLabel>
								<RadioGroup
									sx={{ display: "flex", flexDirection: "row" }}
									aria-label="demo-controlled-radio-buttons-group"
									name="controlled-radio-buttons-group"
									value={languageDetails.spoken}
									onChange={addLanguage("spoken")}
								>
									<FormControlLabel
										value={true}
										control={<Radio />}
										label="Yes"
									/>
									<FormControlLabel
										value={false}
										control={<Radio />}
										label="No"
									/>
								</RadioGroup>
							</FormControl>
						</Box>
						<Box>
							<FormControl>
								<FormLabel id="demo-controlled-radio-buttons-group">
									Written
								</FormLabel>
								<RadioGroup
									sx={{ display: "flex", flexDirection: "row" }}
									aria-label="demo-controlled-radio-buttons-group"
									name="controlled-radio-buttons-group"
									value={languageDetails.written}
									onChange={addLanguage("written")}
								>
									<FormControlLabel
										value={true}
										control={<Radio />}
										label="Yes"
									/>
									<FormControlLabel
										value={false}
										control={<Radio />}
										label="No"
									/>
								</RadioGroup>
							</FormControl>
						</Box>
					</Box>
				</DialogContent>

				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" onClick={addLanguageToPage}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default LanguagesModal;
