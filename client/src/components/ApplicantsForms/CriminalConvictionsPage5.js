import React from "react";

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
			<h1>Criminal Convictions</h1>
			<p>
				This role is exempt from the Rehabilitation of Offenders Act 1974 as it
				involves regulated activities with children and/or adults at risk.
				Successful candidates will be required to undertake an enhanced criminal
				record check provided by DBS England. Having a conviction will not
				necessarily bar candidates from working at Hackney Migrant Centre, this
				will depend on the circumstances and background to the offence(s).
			</p>
			dbs_work: Boolean, dbs_convictions: Boolean,
			<Box>
				<FormControl>
					<FormLabel id="dbs-work">
						*Is there any reason why you could not work with vulnerable adults
						or children?
					</FormLabel>
					<RadioGroup
						aria-label="dbs-work"
						value={values.dbs_work}
						onChange={handleChange("dbs_work")}
					>
						<FormControlLabel control={<Radio />} label="yes" value="yes" />
						<FormControlLabel control={<Radio />} label="no" value="no" />
					</RadioGroup>
				</FormControl>
			</Box>
			<Box>
				<FormControl>
					<FormLabel id="dbs-convictions">
						*Do you have any convictions, cautions, reprimands or final warnings
						(spent and unspent)?
					</FormLabel>
					<RadioGroup
						aria-label="dbs-convictions"
						value={values.dbs_convictions}
						onChange={handleChange("dbs_convictions")}
					>
						<FormControlLabel control={<Radio />} label="yes" value="yes" />
						<FormControlLabel control={<Radio />} label="no" value="no" />
					</RadioGroup>
				</FormControl>
			</Box>
		</>
	);
}

export default CriminalConvictionsPage5;
