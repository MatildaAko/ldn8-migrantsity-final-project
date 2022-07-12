
import generalController from "./general";

const getCities = (req, res) => generalController.get(req, res);
const createNewCity = (req, res) => generalController.post(req, res);
const updateCity = (req, res) => generalController.put(req, res);
const deleteCity = (req, res) => generalController.del(req, res);

module.exports = {
   getCities,
   createNewCity,
   updateCity,
   deleteCity,
};