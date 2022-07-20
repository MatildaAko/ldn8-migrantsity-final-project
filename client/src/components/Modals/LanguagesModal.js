import React from "react";

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
import { useState } from "react";
import e from "express";

function LanguagesModal({setLanguageInfo}) {
	const [open, setOpen] = useState(false);
	const [languages, setLanguages] = useState("");
	const [degree, setDegree] = useState("");
	const [radioSpoken, setRadioSpoken] = useState();
	const [radioWritten, setRadioWritten] = useState();
	const [languageDetails, setLanguageDetails] = useState({
		language: "",
		fluency: "",
		spoken: null,
		written: null
	})

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChangeLanguage = (event) => {
		setLanguages(event.target.value);
		setLanguageDetails({ ...languageDetails, [language]: e.target.value });
		console.log(languageDetails)
	};

	const handleChangeDegree = (event) => {
		setDegree(event.target.value);
	};

	const handleChangeSpoken = (event) => {
		setRadioSpoken(event.target.value);
	};

	const handleChangeWritten = (event) => {
		setRadioWritten(event.target.value);
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
								<Select
									labelId="languages"
									value={languages}
									label=""
									onChange={handleChangeLanguage}
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
								variant="container"
								sx={{ m: 1, minWidth: 220 }}
								size="small"
							>
								<Select
									labelId="demo-select-small"
									value={degree}
									label=""
									onChange={handleChangeDegree}
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
					<Button variant="contained" onClick={handleClose}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default LanguagesModal;
