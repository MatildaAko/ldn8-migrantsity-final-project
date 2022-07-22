import generalController from "./general";
import applicantsController from "./applicants";

const getEmployments = (req, res) => generalController.get(req, res);
const getEmploymentsByApplicantId = (req, res) => applicantsController.getApplicantData(req, res);
const createNewEmployments = (req, res) => generalController.post(req, res);
const updateEmployments = (req, res) => generalController.put(req, res);
const deleteEmployments = (req, res) => generalController.del(req, res);

module.exports = {
    getEmployments,
    getEmploymentsByApplicantId,
    createNewEmployments,
    updateEmployments,
    deleteEmployments,
};