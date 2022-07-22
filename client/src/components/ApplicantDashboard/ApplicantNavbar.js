import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/material";
import AuthenticationButton from "../Auth0Login/authentication-button";
import { Avatar } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
  },
  bar: {
    margin: 60,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ApplicantNavbar(props) {
  console.log("props:",props);
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Toolbar className={classes.bar}>
          <Typography variant="h3" color="inherit" className={classes.grow}>
            Dashboard
          </Typography>
        <Box sx={{ display:"flex", alignItems: "end", flexDirection: "column" }}>
            <SettingsIcon />
          <Avatar alt={props.user.nickname} src={props.user.picture} />
          <Typography variant="h5" color="inherit" className={classes.detailTitle}>
           Hi {props.user.nickname}!
          </Typography>
          <AuthenticationButton />
        </Box>
        </Toolbar>
    </div>
  );
}

ApplicantNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicantNavbar);

