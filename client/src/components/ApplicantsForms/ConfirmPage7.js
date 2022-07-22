import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function Confirm({ values }) {
	const {
		current_employee,
		right_to_work,
		cv,
		supp_statement,
		employment_history,
		education_history,
		exam_history,
		professional_qualifications,
		languages,
		dbs_work,
		dbs_convictions,
		disability,
		age_band,
		ethnic_group,
		description,
		religion,
		sex_orientation,
		gender,
		caring,
	} = values;

	return (
		<>
			<h1>Check your information</h1>
			<List>
				<ListItem>
					<ListItemText
						primary="Do you currently work/ volunteer for Hackney Migrant Centre?"
						secondary={current_employee ? "yes" : "no"}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Do you have the Right to Work in the UK?"
						secondary={right_to_work ? "yes" : "no"}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Your CV" secondary={cv} />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Supporting Statement"
						secondary={supp_statement}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Employment History"
						secondary={employment_history}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Education History"
						secondary={education_history}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Exam History" secondary={exam_history} />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Professional Qualifications"
						secondary={professional_qualifications}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Languages" secondary={languages} />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Is there any reason why you could not work with vulnerable adults or children?
"
						secondary={dbs_work ? "yes" : "no"}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Do you have any convictions, cautions, reprimands or final warnings (spent and unspent)?
"
						secondary={dbs_convictions ? "yes" : "no"}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Do you consider yourself to have a disability?"
						secondary={disability ? "yes" : "no"}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Age band
"
						secondary={age_band}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What best describes your ethnic group?"
						secondary={ethnic_group}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="If Other, please give details here *insert a text box here*"
						secondary={description}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Which best describes your Religion or Belief?"
						secondary={religion}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Sexual Orientation:"
						secondary={sex_orientation}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Which gender identity do you most identify with?"
						secondary={gender}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Do you have caring responsibilities?"
						secondary={caring}
					/>
				</ListItem>
			</List>
		</>
	);
}

export default Confirm;
