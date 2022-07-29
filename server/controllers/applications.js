import pool from "../db";
const generalController = require("./general");
const applicantsController = require("./applicants");

const getApplicationByIdOld = (req, res) => {
	const applicationId = req.params.applicationId;
	const queryString = `${generalController.applicationsQueryString} where id = $1`;
	pool.query(queryString, [applicationId])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};



const getApplicationById = async (req, res) => {
   const allResult = [];
   const applicationId = req.params.applicationId;

   const educQuery = "Select * From education Where applicant_id = (select applicant_id from applications where id = $1)";
   const emplQuery = "Select * From employments Where applicant_id = (select applicant_id from applications where id = $1)";
   const qualQuery = "Select * From qualifications Where applicant_id = (select applicant_id from applications where id = $1)";
   const langQuery = "Select * From languages Where applicant_id = (select applicant_id from applications where id = $1)";
   const appQuery  = generalController.appOnlyQueryString+" Where id = $1";

   await pool.query(`${generalController.applicantsQueryString} Where id = (select applicant_id from applications where id = $1)`, [applicationId])
   .then((result) => result.rows.length>0&&allResult.push({ "Applicant": result.rows }))
   .catch((error) => res.status(500).json(error));

   await pool.query(educQuery, [applicationId])
   .then((result) => result.rows.length>0&&allResult.push({ "Education": result.rows }))
   .catch((error) => res.status(500).json(error));

   await pool.query(emplQuery, [applicationId])
   .then((result) => result.rows.length>0&&allResult.push({ "Employments": result.rows }))
   .catch((error) => res.status(500).json(error));

   await pool.query(qualQuery, [applicationId])
   .then((result) => result.rows.length>0&&allResult.push({ "Qualifications": result.rows }))
   .catch((error) => res.status(500).json(error));

   await pool.query(langQuery, [applicationId])
   .then((result) => result.rows.length>0&&allResult.push({ "Languages": result.rows }))
   .catch((error) => res.status(500).json(error));

   await pool.query(appQuery, [applicationId])
   .then((result) => {
      result.rows.length>0&&allResult.push({ "Application": result.rows[0] });
      res.status(201).json(allResult);
   }).catch((error) => res.status(500).json(error));
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
   getApplicationByIdOld,
};