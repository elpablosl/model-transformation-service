const { response, request } = require('express');

const modelTransformationPost = (req = request, res = response) => {
 
   const { communicativeInteractions } = req.body;

   let UML_CLASS = [];

   communicativeInteractions.forEach(element => {
      element.messageStructure.children.forEach(item => {
         UML_CLASS.push({ class_name: item.name, attributes: [] });
         item.children.forEach( item_children => {
            if( item_children.type === 'Data Field') {
               const indice = UML_CLASS.findIndex(el => el.class_name === item.name);
               UML_CLASS[indice].attributes.push({ name: item_children.name, domain: item_children.domain });
            } else if(item_children.type === 'Reference Field') {
               console.log(item_children);
            }
         })
         // const indice = UML_CLASS.findIndex(item => item.class_name === element.name );
         // UML_CLASS[indice].attributes.push({ name: item.name, domain: item.domain })
      });
   });


   let myJSON = JSON.stringify(UML_CLASS);
   console.log(myJSON);

     res.json({
         msg: 'post API - Controlador',
     });
 }

 module.exports = {
    modelTransformationPost
 }