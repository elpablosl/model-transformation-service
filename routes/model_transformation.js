
const { Router } = require('express');

const { modelTransformationPost } = require('../controllers/model_transformation');

const router = Router();

router.post('/', modelTransformationPost );

module.exports = router;