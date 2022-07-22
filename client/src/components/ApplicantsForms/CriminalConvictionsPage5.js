import React from "react";

import "../../styles/CriminalConvictionsPage.css";

import {
	Box,
	FormLabel,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

function CriminalConvictionsPage5({ values, handleChange }) {
	return (
		<>
		<Box className="criminalConvictionsFeature">

			<h1>Criminal Convictions</h1>
			<p className="paragraph">
				This role is exempt from the Rehabilitation of Offenders Act 1974 as it
				involves regulated activities with children and/or adults at risk.
				Successful candidates will be required to undertake an enhanced criminal
				record check provided by DBS England. Having a conviction will not
				necessarily bar candidates from working at Hackney Migrant Centre, this
				will depend on the circumstances and background to the offence(s).
			</p>
			<Box>
				<FormControl>
					<FormLabel id="dbs-work">
					<span className="asterisk">*</span>Is there any reason why you could not work with vulnerable adults
						or children?
					</FormLabel>
					<br />
					<RadioGroup
						aria-label="dbs-work"
						value={values.dbs_work}
						onChange={handleChange("dbs_work")}
						sx={{
							width: 420,
							height: 50,
							display: "flex",
							flexDirection: "row",
							justifyContent: "flexStart",
						}}
					>
						<FormControlLabel control={<Radio />} label="Yes" value="Yes" />
						<FormControlLabel control={<Radio />} label="No" value="No" />
					</RadioGroup>
				</FormControl>
			</Box>
			<br />
			<Box>
				<FormControl>
					<FormLabel id="dbs-convictions">
					<span className="asterisk">*</span>Do you have any convictions, cautions, reprimands or final warnings
						(spent and unspent)?
					</FormLabel>
					<br />
					<RadioGroup
						aria-label="dbs-convictions"
						value={values.dbs_convictions}
						onChange={handleChange("dbs_convictions")}
						sx={{
							width: 420,
							height: 50,
							display: "flex",
							flexDirection: "row",
							justifyContent: "flexStart",
						}}
					>
						<FormControlLabel control={<Radio />} label="Yes" value="Yes" />
						<FormControlLabel control={<Radio />} label="No" value="No" />
					</RadioGroup>
				</FormControl>
			</Box>
		</Box>
		</>
	);
}

export default CriminalConvictionsPage5;
