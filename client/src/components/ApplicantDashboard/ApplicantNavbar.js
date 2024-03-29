import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/material";
// import AuthenticationButton from "../Auth0Login/authentication-button";
import { Avatar } from "@material-ui/core";

import "../../styles/Applicant.css";

const styles = {
  root: {
    flexGrow: 1,
  },
  bar: {
    margin: "20px 60px 10px 60px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ApplicantNavbar({ user, classes }) {
  return (
    <div className={classes.root}>
        <Toolbar className={classes.bar}>
          <Typography variant="h3" color="inherit" className={classes.grow}>
            Submitted Applications
          </Typography>
        <Box sx={{ display:"flex", alignItems: "center", flexDirection: "row" }}>
            {/* <SettingsIcon /> */}
          <Avatar alt={user.nickname} src={user.picture} />
          <Typography variant="h5" color="inherit" className={classes.detailTitle}>
           Hi, {user.name}!
          </Typography>
          {/* <AuthenticationButton /> */}
        </Box>
        </Toolbar>
    </div>
  );
}

ApplicantNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicantNavbar);

