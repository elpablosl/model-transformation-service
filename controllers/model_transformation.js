const { response, request } = require('express');

const modelTransformationPost = (req = request, res = response) => {
 
   const { communicativeInteractions } = req.body;

   let UML_CLASS = [];

   communicativeInteractions.forEach(element => {
      element.messageStructure.children.forEach(item => {
         UML_CLASS.push({ class_name: item.name, attributes: [], class_relations: [] });
         item.children.forEach( item_children => {
            if( item_children.type === 'Data Field') {
               let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
               UML_CLASS[indice].attributes.push({ name: item_children.name, domain: item_children.domain });
            } else if(item_children.type === 'Reference Field') {
               let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
               UML_CLASS[indice].class_relations.push({ class_source: item.name, class_target: item_children.name, class_cardinality: '[0..1]' });

               indice = UML_CLASS.findIndex(el => el.class_name === item_children.name);
               UML_CLASS[indice].class_relations.push({ class_source: item_children.name, class_target: item.name, class_cardinality: '[0..*]' })

            }
         })
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