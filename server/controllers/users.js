import generalController from "./general";

const getAllUsers = (req, res) => generalController.get(req, res);
const createNewUser = (req, res) => generalController.post(req, res);
const updateUser = (req, res) => generalController.put(req, res);
const deleteUser = (req, res) => generalController.del(req, res);

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};