const { response, request } = require('express');

const modelTransformationPost = (req, res = response) => {
 
     res.json({
         msg: 'post API - Controlador',
     });
 }

 module.exports = {
    modelTransformationPost
 }