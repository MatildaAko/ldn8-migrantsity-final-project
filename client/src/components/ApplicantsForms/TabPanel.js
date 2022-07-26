import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import axios from "axios";
import { useSnackbar } from "notistack";

const TabPanel = ({ children, value, index, setValue,postApplication, postEquality, handleReset, userDetails, ...other }) => {
	const { enqueueSnackbar } = useSnackbar();
  return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`step-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
					{index !== 0 && (
						<Button onClick={() => setValue((value) => (value -= 1))}>
							Back
						</Button>
					)}
					{index !== 3 && (
						<Button onClick={() => setValue((value) => (value += 1))}>
							Next
						</Button>
					)}
					{index === 3 && (
						<Button onClick={()=>{
							console.log("Last Objext: ", userDetails);
							axios
								.post("/api/applicantalldata", userDetails)
								.then((response) =>{
									enqueueSnackbar("The job application has been completed!", { variant: "success" });
									console.log(response);
								})
								.catch((error) => {
									enqueueSnackbar("The job application has not completed!", { variant: "error" });
									console.log(error);
								});
							// handleReset();
}}>
							Submit
						</Button>
					)}
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default TabPanel;