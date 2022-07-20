import generalController from "./general";
import applicantsController from "./applicants";

const getEducation = (req, res) => generalController.get(req, res);
const getEducationByApplicantId = (req, res) => applicantsController.getApplicantData(req, res);
const createNewEducation = (req, res) => generalController.post(req, res);
const updateEducation = (req, res) => generalController.put(req, res);
const deleteEducation = (req, res) => generalController.del(req, res);

module.exports = {
    getEducation,
    getEducationByApplicantId,
    createNewEducation,
    updateEducation,
    deleteEducation,
};