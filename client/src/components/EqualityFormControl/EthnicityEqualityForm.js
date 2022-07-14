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

function EthnicityEqualityForm({ handleChange }) {
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
					<Select defaultValue="" id="grouped-select" label="Please Select">
						<ListSubheader>Asian or Asian British</ListSubheader>
						<MenuItem value="Indian" onChange={handleChange("ethnic_group")}>
							Indian
						</MenuItem>
						<MenuItem value="Pakistani" onChange={handleChange("ethnic_group")}>
							Pakistani
						</MenuItem>
						<MenuItem
							value="Bangladeshi"
							onChange={handleChange("ethnic_group")}
						>
							Bangladeshi
						</MenuItem>
						<MenuItem value="Chinese" onChange={handleChange("ethnic_group")}>
							Chinese
						</MenuItem>
						<ListSubheader>
							Black, African, Caribbean or Black British
						</ListSubheader>
						<MenuItem value="African" onChange={handleChange("ethnic_group")}>
							African
						</MenuItem>
						<MenuItem value="Caribbean" onChange={handleChange("ethnic_group")}>
							Caribbean
						</MenuItem>
						<ListSubheader>Mixed or Multiple ethnic groups</ListSubheader>
						<MenuItem
							value="White and Black Caribbean"
							onChange={handleChange("ethnic_group")}
						>
							White and Black Caribbean
						</MenuItem>
						<MenuItem
							value="White and Black African"
							onChange={handleChange("ethnic_group")}
						>
							White and Black African
						</MenuItem>
						<MenuItem
							value="White and Asian"
							onChange={handleChange("ethnic_group")}
						>
							White and Asian
						</MenuItem>
						<ListSubheader>White</ListSubheader>
						<MenuItem value="English" onChange={handleChange("ethnic_group")}>
							English
						</MenuItem>
						<MenuItem value="Welsh" onChange={handleChange("ethnic_group")}>
							Welsh
						</MenuItem>
						<MenuItem value="Scottish" onChange={handleChange("ethnic_group")}>
							Scottish
						</MenuItem>
						<MenuItem
							value="Northern Irish"
							onChange={handleChange("ethnic_group")}
						>
							Northern Irish
						</MenuItem>
						<MenuItem value="Irish" onChange={handleChange("ethnic_group")}>
							Irish
						</MenuItem>
						<MenuItem value="British" onChange={handleChange("ethnic_group")}>
							British
						</MenuItem>
						<MenuItem
							value="Gypsy or Irish Traveller"
							onChange={handleChange("ethnic_group")}
						>
							Gypsy or Irish Traveller
						</MenuItem>
						<ListSubheader>Other ethnic group</ListSubheader>
						<MenuItem value="Arab" onChange={handleChange("ethnic_group")}>
							Arab
						</MenuItem>
						<MenuItem value="N/A" onChange={handleChange("ethnic_group")}>
							Prefer not to say
						</MenuItem>
					</Select>
				</FormControl>
				<FormControlLabel
					control={
						<TextField
							id="standard-basic"
							onChange={handleChange("ethnic_group")}
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
