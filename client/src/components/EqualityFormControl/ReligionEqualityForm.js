{
	/* What is your religion or belief? */
}
import React, { useRef } from "react";

import {
	Box,
	TextField,
	FormLabel,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";

function ReligionEqualityForm({ changeEqualityDetails }) {
	const ref = useRef(null);
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your religion or belief?</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="No religion or belief"
							/>
						}
						value="No religion or belief"
						label="No religion or belief"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="Buddhist"
							/>
						}
						value="Buddhist"
						label="Buddhist"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="Christian"
							/>
						}
						value="Christian"
						label="Christian"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="Hindu"
							/>
						}
						value="Hindu"
						label="Hindu"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="Jewish"
							/>
						}
						value="Jewish"
						label="Jewish"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="Muslim"
							/>
						}
						value="Muslim"
						label="Muslim"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="Sikh"
							/>
						}
						value="Sikh"
						label="Sikh"
						labelPlacement="start"
					/>

					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("religion")}
								name="not-answered"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
				</FormGroup>
				<FormControlLabel
					control={
						<TextField
							onChange={changeEqualityDetails("religion")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="If other religion or belief, please write in:"
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

export default ReligionEqualityForm;
