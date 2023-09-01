
const { response, request } = require('express');

const modelTransformationPost = (req = request, res = response) => {

    let init_node;
    let events_id = [];
    let contador = 0;
    let events = [];
    let dependsOn = [];
    let UML_CLASS = [];
    let clase_error;
    let clase_extendida_error;
    let aggregation_error;

    const { communicativeInteractions, starts, communicativeEvents, precedenceRelations, specialisedCommunicativeEvents } = req.body;

    starts.forEach( initNode => {
        init_node = initNode.unique;
    });

    communicativeEvents.forEach( cEvents => {
        events_id.push(cEvents.unique)
    });

    specialisedCommunicativeEvents.forEach( sEvents => {   
            events_id.push(sEvents.unique);
     });



    for(let i = 0; i < events_id.length; i++ ) {

        precedenceRelations.forEach( pRelations => {
    
            if(events_id[i] === pRelations.target && pRelations.source !== init_node ) {
                contador++;
                dependsOn.push(pRelations.source);
            }
            
        });

        events.push({ id_evento: events_id[i], degree: contador, dependsOn: dependsOn });
        dependsOn = [];
        contador = 0;

    }

    const sortByKahnsAlgorithm = (elementsArray) => {

        const sortedQueue = [];
        const queue = elementsArray.filter(element => element.degree === 0);
        const array = elementsArray.filter(element => element.degree !== 0);
        
        while(queue.length) {
            const currentNode = queue.shift();
            if(!currentNode) {
                queue.length = 0;
            } else {
                sortedQueue.push(currentNode);
                for( let i = 0; i < array.length; i++ ) {
                    const element = array[i];
                    const hasDependencyOnCurrentNode = element.dependsOn.find(dependency => {
                        return dependency === currentNode.id_evento;
                    });
                    if( hasDependencyOnCurrentNode ) {
                        array[i].degree--;
                        if( array[i].degree === 0 ) {
                            queue.push(array[i]);
                        }
                    }
                }
            }
        }
    
        return sortedQueue;
    
    };

    try {

    const processingInteractiveComunications = ( communicativeEvents ) => {

        communicativeInteractions.forEach( cInteractions => {

            if( communicativeEvents === cInteractions.target ) {
                
                cInteractions.messageStructure.children.forEach( item => {

                    if( item.type === 'Aggregation') {

                        UML_CLASS.push({ class_name: item.name, class_attributes: [], class_relations: [], class_services: [] });

                        let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
                        UML_CLASS[indice].class_attributes.push({ attribute_name: item.name + '_ID', attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });

                    } else {

                        aggregation_error = item.name;
                        throw 'Break2';

                    }

                    item.children.forEach( item_children => {

                        if( item_children.type === 'Data Field') {

                            let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
                            
                            if( item_children.domain === 'Text' ) {
                                UML_CLASS[indice].class_attributes.push({ attribute_name: item_children.name, attribute_domain: 'String', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                UML_CLASS[indice].class_services.push({ service_name: 'new_' + item.name, argument_name: 'p_atr' + item_children.name, data_type: 'String' });
                             }

                             if( item_children.domain === 'Number' ) {
                                UML_CLASS[indice].class_attributes.push({ attribute_name: item_children.name, attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' })
                                UML_CLASS[indice].class_services.push({ service_name: 'new_' + item.name, argument_name: 'p_atr' + item_children.name, data_type: 'Integer' });
                             }

                             if( item_children.domain === 'Date' ) {
                                UML_CLASS[indice].class_attributes.push({ attribute_name: item_children.name, attribute_domain: 'Date', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No'})
                                UML_CLASS[indice].class_services.push({ service_name: 'new_' + item.name, argument_name: 'p_atr' + item_children.name, data_type: 'Date' });
                             }

                             if( item_children.domain === 'Money' ) {
                                UML_CLASS[indice].class_attributes.push({ attribute_name: item_children.name, attribute_domain: 'Date', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No'})
                                UML_CLASS[indice].class_services.push({ service_name: 'new_' + item.name, argument_name: 'p_atr' + item_children.name, data_type: 'Integer' });
                             }

                        }

                        if( item_children.type === 'Reference Field' && item_children.extends_business_object === 'False' ) {

                            let indice = UML_CLASS.findIndex(el => el.class_name === item.name);
                            UML_CLASS[indice].class_relations.push({ class_source: item.name, class_target: item_children.name, class_cardinality: '[0..*]', class_relation: 'association' });
                            UML_CLASS[indice].class_services.push({ service_name: 'new_' + item.name, argument_name: 'p_agr' + item_children.name, data_type: item_children.name });

                            
                            indice = UML_CLASS.findIndex(el => el.class_name === item_children.name );
                            if( indice === -1 ) {
                              clase_error = item_children.name;
                              throw 'Break';
                           }

                           UML_CLASS[indice].class_relations.push({ class_source: item_children.name, class_target: item.name, class_cardinality: '[0..1]', class_relation: 'association' });

                        } else if( item_children.type === 'Reference Field' && item_children.extends_business_object === 'True' ) {

                            let indice = UML_CLASS.findIndex( el => el.class_name === item_children.name );
                            if( indice === -1 ) {
                                clase_extendida_error = item_children.name;
                                throw 'Break1';
                            }

                            let cantidad = 0;

                            item.children.forEach( ebo_children => {

                                if(ebo_children.type === 'Data Field') {
           
                                   cantidad += 1;
                       
                                }
           
                             });

                             if( cantidad > 1 ) {
                                UML_CLASS[indice].class_services.push({ service_name: 'set_' + item.name, argument_name: 'p_this' + item_children.name, data_type: item_children.name });
                             }

                             item.children.forEach( ebj_children => {

                                if( ebj_children.type === 'Data Field') {

                                    if( cantidad === 1) {

                                        if( ebj_children.domain === 'Text' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'String', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'p_this' + item_children.name, data_type: item_children.name });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'pt_' + ebj_children.name, data_type: 'String' });
                                         }
           
                                         if( ebj_children.domain === 'Number' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'Integer', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'p_this' + item_children.name, data_type: item_children.name });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'pt_' + ebj_children.name, data_type: 'Integer' });
                                         }
           
                                         if( ebj_children.domain === 'Money' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'Integer', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'p_this' + item_children.name, data_type: item_children.name });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'pt_' + ebj_children.name, data_type: 'Integer' });
                                         }
           
                                         if( ebj_children.domain === 'Date' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'Date', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'p_this' + item_children.name, data_type: item_children.name });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + ebj_children.name, argument_name: 'pt_' + ebj_children.name, data_type: 'Date' });
                                         }

                                    } else if( cantidad > 1 ) {

                                        if( ebj_children.domain === 'Text' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'String', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + item.name, argument_name: 'pt_' + ebj_children.name, data_type: 'String' });
                                         }
                                         
                                         if( ebj_children.domain === 'Number' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'Integer', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + item.name, argument_name: 'pt_' + ebj_children.name, data_type: 'String' });
                                         }
              
                                         if( ebj_children.domain === 'Money' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'Integer', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + item.name, argument_name: 'pt_' + ebj_children.name, data_type: 'Number' });
                                        }
              
                                         if( ebj_children.domain === 'Date' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: ebj_children.name, attribute_domain: 'Date', attribute_type: 'var', requested_creation: 'No', null_allowed: 'Yes' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'set_' + item.name, argument_name: 'pt_' + ebj_children.name, data_type: 'Date' });
                                        }

                                    }

                                }

                             });

                        }

                        if(item_children.type === 'Iteration') {

                            item_children.children.forEach( iteration_children => {

                                UML_CLASS.push({ class_name: iteration_children.name, class_attributes: [], class_relations: [], class_services: [] });
                                
                                let indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name);
                                
                                UML_CLASS[indice].class_attributes.push({ attribute_name: iteration_children.name + '_ID', attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                UML_CLASS[indice].class_services.push({ service_name: 'new_' + iteration_children.name, argument_name: 'p_agr' + item.name, data_type: item.name });

                                indice = UML_CLASS.findIndex(el => el.class_name === item.name );
                                UML_CLASS[indice].class_relations.push({ class_source: item.name, class_target: iteration_children.name, class_cardinality: '[0..1]', class_relation: 'association' });
                                
                                indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name );
                                UML_CLASS[indice].class_relations.push({ class_source: iteration_children.name, class_target: item.name, class_cardinality: '[0..*]', class_relation: 'association' });

                                iteration_children.children.forEach( children_iteration => {

                                    let indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name );
                                    
                                    if( children_iteration.type === 'Data Field' ) {

                                        if( children_iteration.domain === 'Number' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'new_' + iteration_children.name, argument_name: 'p_atr' + children_iteration.name, data_type: 'Integer' });
                                         }
                 
                                         if( children_iteration.domain === 'Text' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'String', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'new_' + iteration_children.name, argument_name: 'p_atr' + children_iteration.name, data_type: 'String' });
                                         }
                 
                                         if( children_iteration.domain === 'Date' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'Date', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'new_' + iteration_children.name, argument_name: 'p_atr' + children_iteration.name, data_type: 'Date' });
                                         }
                    
                                         if( children_iteration.domain === 'Money' ) {
                                            UML_CLASS[indice].class_attributes.push({ attribute_name: children_iteration.name, attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                            UML_CLASS[indice].class_services.push({ service_name: 'new_' + iteration_children.name, argument_name: 'p_atr' + children_iteration.name, data_type: 'Integer' });
                                         }


                                    }

                                    if( children_iteration.type === 'Reference Field' && children_iteration.extends_business_object === 'False' ) {
                           
                                        let indice = UML_CLASS.findIndex(el => el.class_name === iteration_children.name );
                                        UML_CLASS[indice].class_relations.push({ class_source: iteration_children.name, class_target: children_iteration.name, class_cardinality: '[0..*]', class_relation: 'association' });
                                        UML_CLASS[indice].class_services.push({ service_name: 'new_' + iteration_children.name, argument_name: 'p_agr' + children_iteration.name, data_type: children_iteration.name });
             
                                        indice = UML_CLASS.findIndex(el => el.class_name === children_iteration.name );
                                        if( indice === -1 ) {
                                           throw 'Break';
                                        }
             
                                        UML_CLASS[indice].class_relations.push({ class_source: children_iteration.name, class_target: iteration_children.name, class_cardinality: '[0..1]', class_relation: 'association' });
             
                                     }
                                });
                            });
                        }

                        if( item_children.type === 'Aggregation' ) {

                            UML_CLASS.push({ class_name: item_children.name, class_attributes: [], class_relations: [], class_services: [] });
                            let indice_aggregation = UML_CLASS.findIndex(el => el.class_name === item_children.name);
                            UML_CLASS[indice_aggregation].class_attributes.push({ attribute_name: item_children.name + '_ID', attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                            UML_CLASS[indice_aggregation].class_services.push({ service_name: 'new_' + item_children.name, argument_name: 'p_agr' + item.name, data_type: item.name });

                            indice_aggregation = UML_CLASS.findIndex(el => el.class_name === item_children.name );
                            UML_CLASS[indice_aggregation].class_relations.push({ class_source: item_children.name, class_target: item.name, class_cardinality: '[0..1]', class_relation: 'association' });

                            indice_aggregation = UML_CLASS.findIndex(el => el.class_name === item.name );
                            UML_CLASS[indice_aggregation].class_relations.push({ class_source: item.name, class_target: item_children.name, class_cardinality: '[0..1]', class_relation: 'association' });
                            
                            item_children.children.forEach( aggregation_children => {

                                let indice_agregar = UML_CLASS.findIndex(el => el.class_name === item_children.name );

                                if( aggregation_children.domain === 'Number' ) {
                                    UML_CLASS[indice_agregar].class_attributes.push({ attribute_name: aggregation_children.name, attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                    UML_CLASS[indice_agregar].class_services.push({ service_name: 'new_' + item_children.name, argument_name: 'p_atr' + aggregation_children.name, data_type: 'Integer' });
                                 } 

                                 if( aggregation_children.domain === 'Text' ) {
                                    UML_CLASS[indice_agregar].class_attributes.push({ attribute_name: aggregation_children.name, attribute_domain: 'String', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                    UML_CLASS[indice_agregar].class_services.push({ service_name: 'new_' + item_children.name, argument_name: 'p_atr' + aggregation_children.name, data_type: 'String' });
                                 }

                                 if( aggregation_children.domain === 'Date' ) {
                                    UML_CLASS[indice_agregar].class_attributes.push({ attribute_name: aggregation_children.name, attribute_domain: 'Date', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                    UML_CLASS[indice_agregar].class_services.push({ service_name: 'new_' + item_children.name, argument_name: 'p_atr' + aggregation_children.name, data_type: 'Date' });
                                 }   
                                 
                                 if( aggregation_children.domain === 'Money' ) {
                                    UML_CLASS[indice_agregar].class_attributes.push({ attribute_name: aggregation_children.name, attribute_domain: 'Integer', attribute_type: 'const', requested_creation: 'Yes', null_allowed: 'No' });
                                    UML_CLASS[indice_agregar].class_services.push({ service_name: 'new_' + item_children.name, argument_name: 'p_atr' + aggregation_children.name, data_type: 'Integer' });
                                 }

                            });

                        }

                    });

                });

            }

        });
    }


    const result = sortByKahnsAlgorithm(events);
    

    for(let i = 0; i < result.length; i++) {
        processingInteractiveComunications(result[i].id_evento);
    }

    communicativeInteractions.forEach( CI_children => {     
        CI_children.messageStructure.children.forEach( mStructure => {
            mStructure.children.forEach( mstructure_children => {
                
               if( mstructure_children.type === 'Reference Field' && mstructure_children.extends_business_object === 'True' ) {
                 let indice_eliminar = UML_CLASS.findIndex( el => el.class_name === mStructure.name );
                 UML_CLASS.splice(indice_eliminar, 1);
              }
            });
         });
    });
    
    res.json(UML_CLASS);

    } catch(error) {
    
        if( error == 'Break2') 
            return res.status(401).json({
                msg: `Error, el elemento ${ aggregation_error } no es una agregación`
        })
        
        if( error == 'Break' ) 
            return res.status(401).json({
                msg: `Error, clase ${ clase_error } no referenciada`
        })

        if( error == 'Break1' ) 
        return res.status(401).json({
            msg: `Error, clase ${ clase_extendida_error } no referenciada`
        })
        
    }

}

module.exports = {
    modelTransformationPost
 }