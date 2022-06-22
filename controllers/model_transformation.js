const { response, request } = require('express');

const modelTransformationPost = (req = request, res = response) => {
 
   const { communicativeInteractions } = req.body;

   let UML_CLASS = [];

   for( let i = 0; i< communicativeInteractions.length; i++ ) {
    
         UML_CLASS.push({ class_name: communicativeInteractions[i].name })

   }

     res.json({
         msg: 'post API - Controlador',
     });
 }

 module.exports = {
    modelTransformationPost
 }