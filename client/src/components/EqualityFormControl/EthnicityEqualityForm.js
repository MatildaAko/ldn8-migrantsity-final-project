{
	/* What is your ethnicity? */
}
// import React, { useEffect, useState } from "react";
import React from "react";

import {
	Box,
	FormControl,
	FormLabel,
	InputLabel,
	Select,
	ListSubheader,
	MenuItem,
	FormControlLabel,
	TextField,
} from "@mui/material";

// const API =
// 	"https://ldn8-migrantsity-final-project.herokuapp.com/api/ethnic_groups";

function EthnicityEqualityForm({ equality, changeEqualityDetails }) {
	// const [ethnicGroup, setEthnicGroup] = useState([]);

	// const getTodos = async () => {
	// 	try {
	// 		const response = await fetch(API);
	// 		const jsonData = await response.json();

	// 		console.log(jsonData);

	// 		setEthnicGroup(jsonData);
	// 	} catch (err) {
	// 		console.error(err.message);
	// 	}
	// };

	// useEffect(() => {
	// 	getTodos();
	// 	// eslint-disable-next-line
	// }, []);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<FormControl>
					<FormLabel component="legend">What is your ethnicity?</FormLabel>
					<p>
						Ethnic origin is not about nationality, place of birth or
						citizenship. It is about the group to which you perceive you belong.
						Please tick the appropriate box.
					</p>
				</FormControl>
				<FormControl sx={{ m: 1, minWidth: 320 }}>
					<InputLabel htmlFor="grouped-select">Please Select</InputLabel>
					<Select
						defaultValue=""
						id="grouped-select"
						label="Please Select"
						value={equality.ethnic_group}
						onChange={changeEqualityDetails("ethnic_group")}
					>
						<ListSubheader>Asian or Asian British</ListSubheader>
						<MenuItem value="Indian">
							Indian
						</MenuItem>
						<MenuItem value="Pakistani" >
							Pakistani
						</MenuItem>
						<MenuItem
							value="Bangladeshi"
						>
							Bangladeshi
						</MenuItem>
						<MenuItem value="Chinese" >
							Chinese
						</MenuItem>
						<ListSubheader>
							Black, African, Caribbean or Black British
						</ListSubheader>
						<MenuItem value="African" >
							African
						</MenuItem>
						<MenuItem value="Caribbean" >
							Caribbean
						</MenuItem>
						<ListSubheader>Mixed or Multiple ethnic groups</ListSubheader>
						<MenuItem
							value="White and Black Caribbean"
						>
							White and Black Caribbean
						</MenuItem>
						<MenuItem
							value="White and Black African"
						>
							White and Black African
						</MenuItem>
						<MenuItem
							value="White and Asian"
						>
							White and Asian
						</MenuItem>
						<ListSubheader>White</ListSubheader>
						<MenuItem value="English" >
							English
						</MenuItem>
						<MenuItem value="Welsh" >
							Welsh
						</MenuItem>
						<MenuItem value="Scottish" >
							Scottish
						</MenuItem>
						<MenuItem value="Northern Irish">
							Northern Irish
						</MenuItem>
						<MenuItem value="Irish" >
							Irish
						</MenuItem>
						<MenuItem value="British" >
							British
						</MenuItem>
						<MenuItem value="Gypsy or Irish Traveller" >
							Gypsy or Irish Traveller
						</MenuItem>
						<ListSubheader>Other ethnic group</ListSubheader>
						<MenuItem value="Arab" >
							Arab
						</MenuItem>
						<MenuItem value="N/A" >
							Prefer not to say
						</MenuItem>
					</Select>
				</FormControl>
				<FormControlLabel
					control={
						<TextField
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="Any other ethnic group, please write in:  "
					labelPlacement="start"
				/>
			</Box>
		</>
	);
}

export default EthnicityEqualityForm;
