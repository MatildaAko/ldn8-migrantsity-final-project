import generalController from "./general";
import applicantsController from "./applicants";

const getQualifications = (req, res) => generalController.get(req, res);
const getQualificationByApplicantId = (req, res) => applicantsController.getApplicantData(req, res);
const createNewQualifications = (req, res) => generalController.post(req, res);
const updateQualifications = (req, res) => generalController.put(req, res);
const deleteQualifications = (req, res) => generalController.del(req, res);

module.exports = {
    getQualifications,
    getQualificationByApplicantId,
    createNewQualifications,
    updateQualifications,
    deleteQualifications,
};