{
	/* What is your sexual orientation? */
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

function SexOrientationEqualityForm({ changeEqualityDetails }) {
	const ref = useRef(null);
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your sexual orientation?</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Heterosexual "
							/>
						}
						value="Heterosexual"
						label="Heterosexual "
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Gay"
							/>
						}
						value="Gay"
						label="Gay"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Lesbian"
							/>
						}
						value="Lesbian"
						label="Lesbian"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Bisexual"
							/>
						}
						value="Bisexual"
						label="Bisexual"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Asexual"
							/>
						}
						value="Asexual"
						label="Asexual"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Pansexual"
							/>
						}
						value="Pansexual"
						label="Pansexual"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
								name="Undecided"
							/>
						}
						value="Undecided"
						label="Undecided"
						labelPlacement="start"
					/>

					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("sex_orientation")}
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
							onChange={changeEqualityDetails("sex_orientation")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="If you prefer to use your own identity, please write in:"
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

export default SexOrientationEqualityForm;
