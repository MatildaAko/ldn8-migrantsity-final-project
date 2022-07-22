{
	/* What is your flexible working arrangement?
	 */
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

function WorkingArrangementEqualityForm({ changeEqualityDetails }) {
	const ref = useRef(null);
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your flexible working arrangement?</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="None"
							/>
						}
						value="None"
						label="None"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Flexi-time"
							/>
						}
						value="Flexi-time"
						label="Flexi-time"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Staggered hours"
							/>
						}
						values="Staggered hours"
						label="Staggered hours"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Term-time hours"
							/>
						}
						value="Term-time hours"
						label="Term-time hours"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Annualised hours"
							/>
						}
						value="Annualised hours"
						label="Annualised hours"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Job-share"
							/>
						}
						value="Job-share"
						label="Job-share"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Flexible shifts"
							/>
						}
						value="Flexible shifts"
						label="Flexible shifts"
						labelPlacement="start"
					/>

					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Compressed hours"
							/>
						}
						value="Compressed hours"
						label="Compressed hours"
						labelPlacement="start"
					/>

					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Homeworking"
							/>
						}
						value="Homeworking"
						label="Homeworking"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("flexible_working")}
								name="Prefer not to say"
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
							onChange={changeEqualityDetails("flexible_working")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="If other, please write in:"
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

export default WorkingArrangementEqualityForm;
