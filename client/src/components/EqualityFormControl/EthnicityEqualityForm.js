{
	/* What is your ethnicity? */
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

function EthnicityEqualityForm({ handleChange }) {
	const ref = useRef(null);
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">What is your ethnicity?</FormLabel>
				<p>
					Ethnic origin is not about nationality, place of birth or citizenship.
					It is about the group to which you perceive you belong. Please tick
					the appropriate box.
				</p>
				{/* Asian or Asia British */}
				<FormLabel component="legend">Asian or Asian British</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="indian"
							/>
						}
						value="Indian"
						label="Indian"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="pakistani"
							/>
						}
						value="Pakistani"
						label="Pakistani"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="bangladeshi"
							/>
						}
						value="Bangladeshi"
						label="Bangladeshi"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="chinese"
							/>
						}
						value="Chinese"
						label="Chinese"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="prefer not to say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
					<br />
					<br />
					<div className="other-asian-background">
						<p>Any other Asian background, please write in: </p>
						<TextField
							id="outlined-multiline-static"
							label="others"
							multiline
							rows={3}
							variant="outlined"
							onChange={handleChange("ethnic_group")}
							defaultValue={""}
						/>
					</div>
				</FormGroup>

				<br />

				{/* Black, Africa, Caribbean or Black British */}
				<FormLabel component="legend">
					Black, African, Caribbean or Black British
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="african"
							/>
						}
						value="African"
						label="African"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="caribbean"
							/>
						}
						value="Caribbean"
						label="Caribbean"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="prefer not to say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
					<br />
					<br />
					<div className="other-black-african-caribbean-background">
						<p>
							Any other Black, African or Caribbean background, please write in:{" "}
						</p>
						<TextField
							id="outlined-multiline-static"
							label="others"
							multiline
							rows={3}
							variant="outlined"
							onChange={handleChange("ethnic_group")}
							defaultValue={""}
						/>
					</div>
				</FormGroup>

				<br />

				{/* Mixed or Multiple ethnic groups */}
				<FormLabel component="legend">
					Mixed or Multiple ethnic groups
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="White and Black Caribbean"
							/>
						}
						value="White and Black Caribbean"
						label="White and Black Caribbean"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="White and Black African"
							/>
						}
						value="White and Black African"
						label="White and Black African"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="White and Asian"
							/>
						}
						value="White and Asian"
						label="White and Asian"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="prefer not to say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
					<br />
					<br />
					<div className="other-mixed-multiple-ethnic-background">
						<p>
							Any other Mixed or Multiple ethnic background, please write in:{" "}
						</p>
						<TextField
							id="outlined-multiline-static"
							label="others"
							multiline
							rows={3}
							variant="outlined"
							onChange={handleChange("ethnic_group")}
							defaultValue={""}
						/>
					</div>
				</FormGroup>

				<br />

				{/* White */}
				<FormLabel component="legend">White</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="English"
							/>
						}
						value="English"
						label="English"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="Welsh "
							/>
						}
						value="Welsh"
						label="Welsh "
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="scottish "
							/>
						}
						value="Scottish"
						label="Scottish "
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="northern irish"
							/>
						}
						value="Northern-Irish"
						label="Northern Irish"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="irish"
							/>
						}
						value="Irish"
						label="Irish"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="british"
							/>
						}
						value="British"
						label="British"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="Gypsy or Irish Traveller"
							/>
						}
						value="Gypsy or Irish Traveller"
						label="Gypsy or Irish Traveller"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="prefer not to say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
				</FormGroup>
				<br />
				<FormControlLabel
					control={
						<TextField
							onChange={handleChange("ethnic_group")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="Any other White background, please write in:"
					labelPlacement="start"
				/>

				<br />

				{/* Other ethnic group */}
				<FormLabel component="legend">Other ethnic group</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="Arab"
							/>
						}
						value="Arab"
						label="Arab"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("ethnic_group")}
								name="prefer not to say"
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
							id="standard-basic"
							onChange={handleChange("ethnic_group")}
							label=""
							variant="standard"
						/>
					}
					label="Any other ethnic group, please write in: "
					labelPlacement="start"
				/>
			</FormControl>
		</Box>
	);
}

export default EthnicityEqualityForm;
