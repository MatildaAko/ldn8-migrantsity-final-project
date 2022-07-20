import generalController from "./general";
import applicantsController from "./applicants";

const getLanguages = (req, res) => generalController.get(req, res);
const getLanguagesByApplicantId = (req, res) => applicantsController.getApplicantData(req, res);
const createNewLanguages = (req, res) => generalController.post(req, res);
const updateLanguages = (req, res) => generalController.put(req, res);
const deleteLanguages = (req, res) => generalController.del(req, res);

module.exports = {
    getLanguages,
    getLanguagesByApplicantId,
    createNewLanguages,
    updateLanguages,
    deleteLanguages,
};