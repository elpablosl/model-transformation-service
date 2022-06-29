const { response, request } = require('express');

const modelTransformationPost = (req = request, res = response) => {
 
   const { communicativeInteractions } = req.body;

   let UML_CLASS = [];

   try {

      communicativeInteractions.forEach(element => {
         element.messageStructure.children.forEach(item => {
            
            
            UML_CLASS.push({ class_name: item.name, attributes: [], class_relations: [] });

            let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
            UML_CLASS[indice].attributes.push({ attribute_name: item.name + '_ID', attribute_domain: 'Integer', attribute_type: 'const' });
            
            item.children.forEach( item_children => {
            
               
               if( item_children.type === 'Data Field') {
                  
   
                     let indice = UML_CLASS.findIndex(el => el.class_name === item.name);

                     if( item_children.domain === 'Text' ) {
                        UML_CLASS[indice].attributes.push({ attribute_name: item_children.name, attribute_domain: 'String', attribute_type: 'const' });
                     }

                     if( item_children.domain === 'Number' ) {
                        UML_CLASS[indice].attributes.push({ attribute_name: item_children.name, attribute_domain: 'Integer', attribute_type: 'const'})
                     }

                     if( item_children.domain === 'Date' ) {
                        UML_CLASS[indice].attributes.push({ attribute_name: item_children.name, attribute_domain: 'Date', attribute_type: 'const'})
                     }
                     
                     if( item_children.domain === 'Money' ) {
                        UML_CLASS[indice].attributes.push({ attribute_name: item_children.name, attribute_domain: 'Date', attribute_type: 'const'})
                     }

                     // UML_CLASS[indice].attributes.push({ name: item_children.name, domain: item_children.domain });
               
                  } 
                  
                  if(item_children.type === 'Reference Field') {
   
                     let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
                     UML_CLASS[indice].class_relations.push({ class_source: item.name, class_target: item_children.name, class_cardinality: '[0..1]' });
   
                     indice = UML_CLASS.findIndex(el => el.class_name === item_children.name);
                     if( indice === -1 ) {
                        throw 'Break';
                     }
                     UML_CLASS[indice].class_relations.push({ class_source: item_children.name, class_target: item.name, class_cardinality: '[0..*]' });
   
               }
   
               if(item_children.type === 'Iteration') {
   
   
                  item_children.children.forEach( iteration_children => {
   
                        UML_CLASS.push({ class_name: iteration_children.name, attributes: [], class_relations: [] });
   
                        let indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name);
                        UML_CLASS[indice].attributes.push({ attribute_name: iteration_children.name + '_ID', attribute_domain: 'Integer', attribute_type: 'const' });

                        indice = UML_CLASS.findIndex(el => el.class_name === item.name );
                        UML_CLASS[indice].class_relations.push({ class_source: item.name, class_target: iteration_children.name, class_cardinality: '[0..1]' });
   
                        indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name );
                        UML_CLASS[indice].class_relations.push({ class_source: iteration_children.name, class_target: item.name, class_cardinality: '[0..*]' });
   
                     iteration_children.children.forEach( children_iteration => {
                        
                        let indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name );

                        if( children_iteration.domain === 'Number' ) {
                           UML_CLASS[indice].attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'Integer', attribute_type: 'const' });
                        }

                        if( children_iteration.domain === 'Text' ) {
                           UML_CLASS[indice].attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'String', attribute_type: 'const' });
                        }

                        if( children_iteration.domain === 'Date' ) {
                           UML_CLASS[indice].attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'Date', attribute_type: 'const' });
                        }
   
                        if( children_iteration.domain === 'Money' ) {
                           UML_CLASS[indice].attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'Integer', attribute_type: 'const' });
                        }
   
                     })
   
                  })
   
               }
   
            })
         });
      });

      res.json(UML_CLASS);

   } catch(error) {
      if( error == 'Break' ) 
      return res.status(401).json({
         msg: 'Error, clase no referenciada'
      })
   }

 }

 module.exports = {
    modelTransformationPost
 }