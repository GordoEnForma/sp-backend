const Student = require("../models/users/student");
const Usuario = require("../models/users/user");

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
        const { email, contrasena } = req.body;
        const foundUser =await Usuario.findOne({ email });
        if (!foundUser) {
            res.status(500).send(
                "No existe un usuario registrado con ese correo"
            );
            return;
        }
        
        if (contrasena !== foundUser.contrasena) {
            res.status(500).send("Contraseña incorrecta");
            return;
        }
        switch (foundUser.role) {
            case 'admin':{
                res.status(200).send("Accediste correctamente como admin");
            }
                
                break;
            case 'student':{
                if(foundUser.estado==='pendiente'){
                    res.status(200).send("Usuario estudiante pendiente de activación");
                }else{
                    res.status(200).send("Accediste correctamente como estudiante");
                }
            }
            default:
                break;
        }
    } catch (e) {
        console.log("Error al iniciar sesión");
        res.status(400).send("Error al iniciar sesión");
    }
};

module.exports = {
    registerUser,
    loginUser,
};
