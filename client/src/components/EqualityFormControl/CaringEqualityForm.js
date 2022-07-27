{
	/* Do you have caring responsibilities? If yes, please tick all that apply.
	 */
}
import React from "react";

import {
	Box,
	Select,
	FormControl,
	FormLabel,
} from "@mui/material";

function CaringEqualityForm({ equality, changeEqualityDetails }) {
	const items = [
		"No",
		"Primary carer of a child/children (under 18)",
		"Primary carer of disabled child/children",
		"Primary carer of disabled adult (18 and over)",
		"Primary carer of older person",
		"Secondary carer (another person carries out the main caring role)",
		"Prefer not to say",
		];
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="outlined">
			<FormLabel component="legend">
					<b>
						Do you have caring responsibilities? If yes, please tick all that
						apply.
					</b>
				</FormLabel>
				<br />
				<Select native value={equality.caring} onChange={changeEqualityDetails("caring")}>
					<option aria-label="Please Select" value="">
						Please Select
					</option>
					{items.map((item) => {
						return(
							<>
							<option value={item}>{item}</option>
							</>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
}

export default CaringEqualityForm;
