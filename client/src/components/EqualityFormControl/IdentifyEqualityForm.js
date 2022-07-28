{
	/* Identify */
}
import React from "react";

import {
	Box,
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function IdentifyEqualityForm({ equality, changeEqualityDetails }) {
	const identify = ["Yes","No","Prefer not to say"];
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					Is the gender you identify with the same as your gender registered at
					birth?
				</FormLabel>
				<RadioGroup
					required
					aria-label="identify"
					name="identify"
					value={equality.identify}
					onChange={changeEqualityDetails("identify")}
					sx={{
						width: 420,
						height: 50,
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{identify.map((id, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={id}
								value={id}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
		</Box>
	);
}

export default IdentifyEqualityForm;
