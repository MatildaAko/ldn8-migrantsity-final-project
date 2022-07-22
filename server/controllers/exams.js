import generalController from "./general";
import applicantsController from "./applicants";

const getExams = (req, res) => generalController.get(req, res);
const getExamsByApplicantId = (req, res) => applicantsController.getApplicantData(req, res);
const createNewExams = (req, res) => generalController.post(req, res);
const updateExams = (req, res) => generalController.put(req, res);
const deleteExams = (req, res) => generalController.del(req, res);

module.exports = {
    getExams,
    getExamsByApplicantId,
    createNewExams,
    updateExams,
    deleteExams,
};