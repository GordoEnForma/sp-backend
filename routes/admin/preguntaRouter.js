const express = require("express");
const {
    createPregunta,
    getPreguntas,
    getPreguntaById,
    actualizarPreguntaExistente,
    eliminarPregunta,
    eliminarPreguntasDeTema,
    eliminarTodasLasPreguntas,
} = require("../../controllers/admin/preguntaController");
const router = express.Router();

router.route("/")
    .get(getPreguntas)
    .delete(eliminarTodasLasPreguntas);

router
    .route("/:id")
    .get(getPreguntaById)
    .put(actualizarPreguntaExistente)
    .delete(eliminarPregunta);

router
    .route("/temas/:temaId")
    .post(createPregunta)
    .delete(eliminarPreguntasDeTema);

module.exports = router;
