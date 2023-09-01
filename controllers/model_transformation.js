
const { Router } = require('express');
const { check } = require('express-validator');

const { modelTransformationPost } = require('../services/model_transformation');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/', [
    check('header', 'Se debe ingresar el header').not().isEmpty(),
    check('actors', 'Se deben ingresar los actores').not().isEmpty(),
    check('starts', 'Se debe ingresar el nodo de inicio').not().isEmpty(),
    check('ends', 'Se debe ingresar el nodo final').not().isEmpty(),
    check('communicativeEvents', 'Se debe ingresar la información del evento comunicativo').not().isEmpty(),
    check('communicativeEvents.*.unique','Se debe ingresar la ID del evento comunicativo').not().isEmpty(),
    check('precedenceRelations','Se debe ingresar las relaciones de precedencia').not().isEmpty(),
    check('communicativeInteractions','Se debe ingresar las interacciones comunicativas').not().isEmpty(),
    validarCampos
], modelTransformationPost );

module.exports = router;