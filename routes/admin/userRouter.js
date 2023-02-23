const express = require("express");
const {
    getUsers,
    getAdminUsers,
    getUserById,
    getStudentUsers,
    createAdmin,
    createStudent,
    updateStudent,
    updateAdmin,
    deleteStudent,
} = require("../../controllers/admin/userController");

const router = express.Router();

//read
router.route("/")
.get(getUsers);

router.route("/admin")
.post(createAdmin)
.get(getAdminUsers);

router.route("/admin/:id")
.put(updateAdmin)

router.route("/estudiante")
.post(createStudent)
.get(getStudentUsers);

router.route("/estudiante/:id")
.put(updateStudent)
.delete(deleteStudent)

router.route("/:id")
.get(getUserById);

module.exports = router;
