import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function ConfirmEqualityForm({ values }) {
	const {
		gender,
		identify,
		age_band,
		ethnic_group,
		disability,
		sex_orientation,
		religion,
		working_pattern,
		flexible_working,
		caring,
	} = values;

	return (
		<>
			<h1>Check your information</h1>
			<List>
				<ListItem>
					<ListItemText primary="Gender: " secondary={gender} />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Is the gender you identify with the same as your gender registered at birth?  "
						secondary={identify}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Age: " secondary={age_band} />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What is your ethnicity? "
						secondary={ethnic_group}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Do you consider yourself to have a disability or health condition? "
						secondary={disability}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What is your sexual orientation? "
						secondary={sex_orientation}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What is your religion or belief? "
						secondary={religion}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What is your working pattern? "
						secondary={working_pattern}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary=" What is your flexible working arrangement? "
						secondary={flexible_working}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Do you have caring responsibilities? If yes, please tick all that apply:
"
						secondary={caring}
					/>
				</ListItem>
			</List>
		</>
	);
}

export default ConfirmEqualityForm;
