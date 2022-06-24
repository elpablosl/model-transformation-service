const { response, request } = require('express');

const modelTransformationPost = (req = request, res = response) => {
 
   const { communicativeInteractions } = req.body;

   let UML_CLASS = [];

   communicativeInteractions.forEach(element => {
      UML_CLASS.push({ class_name: element.name, attributes: [] })
      element.messageStructure.children.forEach(item => {
         const indice = UML_CLASS.findIndex(item => item.class_name === element.name );
         UML_CLASS[indice].attributes.push({ name: item.name, domain: item.domain })
      });
   });


     res.json({
         msg: 'post API - Controlador',
     });
 }

 module.exports = {
    modelTransformationPost
 }