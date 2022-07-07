import React from "react";
import { Box, TextField, FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const EqualityForm = () => {
  return (
		<>
			<h1>Hackney Migrant Centre Equal Opportunities Monitoring Form</h1>
			<p>
				Hackney Migrant Centre (HMC) recognises that its equal opportunities
				policy, in itself, does not necessarily ensure equal opportunities. It
				therefore has a system for checking whether the policy is being carried
				out and whether it is working. Without records it is virtually
				impossible to know whether or not people are being discriminated
				against.
			</p>
			<p>
				HMC collects statistics on job applicants, volunteers and service users
				to ensure we are providing an equal service to all and equal access to
				job and volunteer opportunities. Data from monitoring records will be
				analysed to see whether there are any disparities and whether
				discrimination might be occurring. We therefore ask you to complete the
				following form and return it to us. All data is anonymous and will only
				be kept for the purpose outlined above.
			</p>
			<p>
				Filling in this form is voluntary. It will be separated from your
				application before shortlisting.
			</p>
			<p>
				<b>
					Please return the completed form along with your CV and cover letter
					to
				</b>
				<a href="mailto:recruitment@hackneymigrantcentre.org.uk">
					recruitment@hackneymigrantcentre.org.uk
				</a>
			</p>
			<hr />

			<Box sx={{ display: "flex" }}>
				<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
					<FormLabel component="legend">
						<b>Gender</b>
					</FormLabel>
					<FormGroup row={true}>
						<FormControlLabel
							control={
								<Checkbox checked={""} onChange={"handleChange"} name="male" />
							}
							label="Male"
							labelPlacement="start"
						/>
						<FormControlLabel
							control={
								<Checkbox
									// checked={"female"}
									onChange={"handleChange"}
									name="female"
								/>
							}
							label="Female"
							labelPlacement="start"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={"intersex"}
									onChange={"handleChange"}
									name="intersex"
								/>
							}
							label="Intersex"
							labelPlacement="start"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={"non-binary"}
									onChange={"handleChange"}
									name="non-binary"
								/>
							}
							label="Non-binary"
							labelPlacement="start"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={"not-answered"}
									onChange={"handleChange"}
									name="not-answered"
								/>
							}
							label="Prefer not to say"
							labelPlacement="start"
						/>
					</FormGroup>
					<FormControlLabel
						control={
							<TextField id="standard-basic" label="" variant="standard" />
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
			<Box sx={{ display: "flex" }}>
				<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
					<FormLabel component="legend">
						Is the gender you identify with the same as your gender registered
						at birth?
					</FormLabel>
					<FormGroup row={true}>
						<FormControlLabel
							control={
								<Checkbox
									checked={"yes"}
									onChange={"handleChange"}
									name="yes"
								/>
							}
							label="Yes"
							labelPlacement="start"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={"no"} onChange={"handleChange"} name="no" />
							}
							label="No"
							labelPlacement="start"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={"not-answered"}
									onChange={"handleChange"}
									name="not-answered"
								/>
							}
							label="Prefer not to say"
							labelPlacement="start"
						/>
					</FormGroup>
				</FormControl>
      </Box>
      <hr />
		</>
	);
};

export default EqualityForm;