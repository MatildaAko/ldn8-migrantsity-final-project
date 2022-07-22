import React, { useState } from "react";

import "../../styles/ProfessionalQualifications.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { InputLabel } from "@mui/material";
import { commonLanguages } from "../ApplicantsForms/LanguageOptions";

function LanguagesModal({ setLanguageInfo, setUserDetails, userDetails, languages }) {
	const [open, setOpen] = useState(false);
	const [knownLanguages, setKnownLanguages] = useState("");
	const [degree, setDegree] = useState("");
	const [radioSpoken, setRadioSpoken] = useState(Boolean);
	const [radioWritten, setRadioWritten] = useState(Boolean);
	const [languageDetails, setLanguageDetails] = useState({
		language: "",
		fluency: "",
		spoken: null,
		written: null,
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChangeLanguage = (event) => {
		setKnownLanguages(event.target.value);
		setLanguageDetails({
			...languageDetails,
			["language"]: event.target.value,
		});
	};
	const resetLanguages = () => {
		setLanguageDetails({
			...languageDetails,
			["language"]: "",
			["fluency"]: "",
			["spoken"]: null,
			["written"]: null,
		});
		setKnownLanguages("");
		setDegree("");
		setRadioSpoken(null);
		setRadioWritten(null);
	};

	const addLanguageToPage = () => {
		setLanguageInfo((info) => [...info, languageDetails]);
		setUserDetails({
			...userDetails,
			["languages"]: languages.concat(languageDetails),
		});
		resetLanguages();
		handleClose();
	};

	const handleChangeDegree = (event) => {
		setDegree(event.target.value);
		setLanguageDetails({ ...languageDetails, ["fluency"]: event.target.value });
	};

	const handleChangeSpoken = (event) => {
		setRadioSpoken(event.target.value);
		setLanguageDetails({ ...languageDetails, ["spoken"]: event.target.value });
	};

	const handleChangeWritten = (event) => {
		setRadioWritten(event.target.value);
		setLanguageDetails({ ...languageDetails, ["written"]: event.target.value });
	};
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
								<InputLabel id="knownLanguages">Please Select</InputLabel>
								<Select
									labelId="languages"
									value={knownLanguages}
									label=""
									onChange={handleChangeLanguage}
									variant="outlined"
								>
									{commonLanguages.map((language, index) => {
										return (
											<MenuItem key={index} value={language}>
												{language}
											</MenuItem>
										);
									})}
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
								<InputLabel id="fluency">Please Select</InputLabel>
								<Select
									labelId="fluency"
									value={degree}
									label=""
									onChange={handleChangeDegree}
									variant="outlined"
								>
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
									value={radioSpoken}
									onChange={handleChangeSpoken}
								>
									<FormControlLabel
										value="Yes"
										control={<Radio />}
										label="Yes"
									/>
									<FormControlLabel value="No" control={<Radio />} label="No" />
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
									value={radioWritten}
									onChange={handleChangeWritten}
								>
									<FormControlLabel
										value="Yes"
										control={<Radio />}
										label="Yes"
									/>
									<FormControlLabel value="No" control={<Radio />} label="No" />
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
