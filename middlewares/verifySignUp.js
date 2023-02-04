const User = require("../models/users/user");

const verifyExistingUser = async (req, res, next) => {
    const { email } = req.body;

    const foundUser = await User.findOne({
        email,
    });

    if (foundUser) {
        res.status(500).send({
            error: "Un usuario con estas credenciales ya  existe, prueba con nuevos datos",
        });
        return;
    }
    next();
};

module.exports = { verifyExistingUser };
