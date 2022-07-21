import pool from "../db";
const generalController = require("./general");
const applicantsController = require("./applicants");

const getApplicationById = (req, res) => {
	const applicationId = req.params.applicationId;
	const queryString = `${generalController.applicationsQueryString} where id = $1`;
	pool.query(queryString, [applicationId])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

const getApplications = (req, res) => generalController.get(req, res, generalController.applicationsQueryString );
const getApplicationsByApplicantId = (req, res) => applicantsController.getApplicantData( req, res, generalController.applicationsQueryString);
const createNewApplication = (req, res) => generalController.post( req, res);
const updateApplication = (req, res) => generalController.put( req, res);
const deleteApplication = (req, res) => generalController.del( req, res);


module.exports = {
   getApplicationById,
   getApplications,
   getApplicationsByApplicantId,
   createNewApplication,
   updateApplication,
   deleteApplication,
};