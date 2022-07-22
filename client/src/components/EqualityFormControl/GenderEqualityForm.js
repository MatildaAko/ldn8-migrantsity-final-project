{
	/* Gender */
}
import React, { useState } from "react";

import {
	Box,
	TextField,
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function GenderEqualityForm({ changeEqualityDetails, equality, setEquality }) {
	const genders = [
		"Male",
		"Female",
		"Intersex",
		"Non Binary",
		"Other",
		"Prefer not to say",
	];
	const [chosenGender, setChosenGender] = useState("");

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>Gender</b>
				</FormLabel>
				<RadioGroup
					required
					aria-label="gender"
					name="gender"
					onChange={(e) => {
						setChosenGender(e.target.value);
						setEquality({ ...equality, ["gender"]: e.target.value });
					}}
					sx={{
						width: 420,
						height: 50,
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{genders.map((gender, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={gender}
								value={gender}
							/>
						);
					})}
				</RadioGroup>
				<br />
				<br />
				<FormControlLabel
					control={
						<TextField
							disabled={chosenGender !== "Other" ? true : false}
							id="standard-basic"
							label=""
							variant="standard"
							onChange={changeEqualityDetails("gender")}
						/>
					}
					label="If you prefer to use your own gender identity, please write in:"
					labelPlacement="start"
				/>
			</FormControl>
			<FormControl
				required
				error={"error"}
				component="fieldset"
				sx={{ m: 3 }}
				variant="standard"
			></FormControl>
		</Box>
	);
}

export default GenderEqualityForm;


