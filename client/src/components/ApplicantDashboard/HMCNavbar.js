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

function HMCNavbar({ user, classes, picture }) {
  console.log("user:", user);
  return (
    <div className={classes.root}>
        <Toolbar className={classes.bar}>
          <Typography variant="h3" color="inherit" className={classes.grow}>
            Dashboard
          </Typography>
        <Box sx={{ display:"flex", alignItems: "end", flexDirection: "column" }}>
          <SettingsIcon />
          <Avatar alt={user} src={picture} />
          <Typography variant="h5" color="inherit" className={classes.detailTitle}>
           Hi {user}!
          </Typography>
          <AuthenticationButton />
        </Box>
        </Toolbar>
    </div>
  );
}

HMCNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HMCNavbar);

