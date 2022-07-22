import { Router } from "express";

const applicantsController = require("./controllers/applicants");
const jobsController = require("./controllers/jobs");
const usersController = require("./controllers/users");
const citiesController = require("./controllers/cities");
const applicationsController = require("./controllers/applications");
const educationController = require("./controllers/education");
const examsController = require("./controllers/exams");
const qualificationsController = require("./controllers/qualifications");
const languagesController = require("./controllers/languages");
const equalityController = require("./controllers/equality");

const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

//////////--------- CRUD Data --------////////////

//Applicants
router.route("/applicants/:applicantId")
.get(applicantsController.getApplicantById)
.put(applicantsController.updateApplicant)
.delete(applicantsController.deleteApplicant);

router
.get("/applicants", applicantsController.getAllApplicants)
.get("/:applicantId/applicantAllData", applicantsController.getApplicantAllData)
.post("/applicants", applicantsController.createNewApplicant)
.post("/applicantAllData", applicantsController.createApplicantWithAllData);

//Users
router
.get("/users", usersController.getAllUsers)
.post("/users", usersController.createNewUser)
.put("/users/:userId", usersController.updateUser)
.delete("/users/:userId", usersController.deleteUser);

//Jobs
router
.get("/jobs", jobsController.getJobs)
.post("/jobs", jobsController.createNewJob)
.put("/jobs/:jobId", jobsController.updateJob)
.delete("/jobs/:jobId", jobsController.deleteJob);

//Cities
router
.get("/cities", citiesController.getCities)
.post("/cities", citiesController.createNewCity)
.put("/cities/:cityId", citiesController.updateCity)
.delete("/cities/:cityId", citiesController.deleteCity);

//Equality Params
router
.get("/equality", equalityController.getEquality);

router
.get("/flexible_working", equalityController.getFlexibleWorking)
.get("/working_pattern", equalityController.getWorkingPattern)
.get("/genders", equalityController.getGenders)
.get("/sex_orientations", equalityController.getSexOrientations)
.get("/age_bands", equalityController.getAgeBands)
.get("/religions",  equalityController.getReligions)
.get("/ethnic_groups",  equalityController.getEthnicGroups)
.get("/equality",  equalityController.getEquality);

//Applications

router
.get("/applications/:applicationId", applicationsController.getApplicationById)
.get("/applications", applicationsController.getApplications)
.get("/:applicantId/applications", applicationsController.getApplicationsByApplicantId)
.post("/applications", applicationsController.createNewApplication)
.put("/applications/:applicationId", applicationsController.updateApplication)
.delete("/applications/:applicationId", applicationsController.deleteApplication);

//Education
router
.get("/education", educationController.getEducation )
.get("/:applicantId/education", educationController.getEducationByApplicantId)
.post("/education", educationController.createNewEducation)
.put("/education/:educationId", educationController.updateEducation)
.delete("/education/:educationId", educationController.deleteEducation);

//Exams
router
.get("/exams", examsController.getExams )
.get("/:applicantId/exams", examsController.getExamsByApplicantId)
.post("/exams", examsController.createNewExams)
.put("/exams/:examId", examsController.updateExams)
.delete("/exams/:examId", examsController.deleteExams);

//Qualifications
router
.get("/qualifications", qualificationsController.getQualifications )
.get("/:applicantId/qualifications", qualificationsController.getQualificationByApplicantId)
.post("/qualifications", qualificationsController.createNewQualifications)
.put("/qualifications/:qualificationId", qualificationsController.updateQualifications)
.delete("/qualifications/:qualificationId", qualificationsController.deleteQualifications);

//Languages
router
.get("/languages", languagesController.getLanguages )
.get("/:applicantId/languages", languagesController.getLanguagesByApplicantId)
.post("/languages", languagesController.createNewLanguages)
.put("/languages/:languageId", languagesController.updateLanguages)
.delete("/languages/:languageId", languagesController.deleteLanguages);

export default router;

