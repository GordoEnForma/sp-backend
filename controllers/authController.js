const Student = require("../models/users/student");

const registerUser = async (req, res) => {
    try {
        const fetchedUser = req.body;
        const createdUser = await Student.create(fetchedUser);
        res.status(200).send({
            data: createdUser,
        });
    } catch (e) {
        console.log("Error al crear usuario: ", e);
        res.status(400).send("Error al crear usuario");
    }
};
const loginUser = async (req, res) => {
    try {
        console.log("Usuario loggeado");
        res.status(200).send("Usuario loggeado");
    } catch (e) {
        console.log("Error al iniciar sesión");
        res.status(400).send("Error al iniciar sesión");
    }
};

module.exports = {
    registerUser,
    loginUser,
};
