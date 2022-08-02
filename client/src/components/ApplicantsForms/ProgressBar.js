import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "../../styles/Form.css";

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({ value }) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress((prevProgress) =>
			prevProgress >= 100 ? 10 : prevProgress + 23
		);
	}, [value]);

	return (
		<Box sx={{ width: "60%", margin: "0 auto", padding: "30px 0" }}>
			<LinearProgressWithLabel value={progress} />
		</Box>
	);
}
