import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import { Chip, Divider, Grid } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const ApplicantCard = ({ application }) => {
  return (
    <Card sx={{ minWidth: 275, mx: 10, mb: 3, p:2 }} key={application.id} >
      <CardContent>
      <Grid container spacing={2}>
          <Grid item xs>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Date: <Moment date={application.apply_date} />
          <Divider sx={{ maxWidth: 280 }} />
          <br />
        </Typography>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant={"h6"} component={"div"}>
            <Chip label={application.status} color={application.status_id==1?"primary":"success"} />
            </Typography>
        </Grid>
        <Grid item>
        <Typography variant={"h5"} component={"div"}>
          Job: {application.job_title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {application.job_description}
        </Typography>
        <Divider />
        <br />
        <Typography variant={"body2"}>
          <strong>Skill require: </strong>{application.skills_require}
          <br />
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cover Letter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {application.cover_letter}
          </Typography>
        </AccordionDetails>
        </Accordion>
      <CardActions>
        <Button size="small">Archive</Button>
      </CardActions>
    </Card>
  );
};

export default ApplicantCard;