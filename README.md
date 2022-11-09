# Model Transformation Service (CA to UML)

En primer lugar se debe descargar el proyecto desde: La [URL del repositorio](https://github.com/elpablosl/model-transformation-service). Una vez descargado el proyecto se debe tener NodeJS instalado, una vez realizada la instalación de Node , se debe ejecutar el comando ```npm install``` para reconstruir los módulos de Node. Finalmente para ejecutar el proyecto se debe colocar
en el terminal, el comando: ```node app```.

Para utilizar el servicio de transformación tiene que ser por medio de herramientas de API Testing, como por ejemplo Postman y Soap UI, entre otras, por medio de un método
post, si se ejecuta de forma local la URL es la siguiente: ```http://localhost:8080/api/modelTransformation/CAtoUML``` y se mandan como parámetros una entrada de un modelo de
Análisis Comunicacional generado en la siguiente herramienta: ```https://pros-ca-modeler.netlify.app```. Por otro lado también se tiene disposición la siguiente URL para
ejecutar el servicio de transformación ```catouml.informatica.uv.cl/api/modelTransformation/CAtoUML```.

De todos modos a continuación se deja un ejemplo del formato de entrada para testear la API del servicio de transformación:

<details>
  <summary>Ejemplo Análisis Comunicacional (Formato de Entrada)</summary>
  
 ```
{
    "header": [
        {
            "userName": "default user",
            "identifier": "1663961900825",
            "type": "COMMUNICATIONANALYSIS"
        }
    ],
    "actors": [
        {
            "unique": "6",
            "identifier": "Actor 1",
            "name": "DEPENDIENTE",
            "type": "Actor",
            "x": 380,
            "y": 160
        },
        {
            "unique": "8",
            "identifier": "Actor 2",
            "name": "CLIENTE",
            "type": "Actor",
            "x": 890,
            "y": 180
        },
        {
            "unique": "15",
            "identifier": "Actor 3",
            "name": "DEPENDIENTE",
            "type": "Actor",
            "x": 440,
            "y": 340
        },
        {
            "unique": "16",
            "identifier": "Actor 4",
            "name": "CLIENTE",
            "type": "Actor",
            "x": 880,
            "y": 350
        },
        {
            "unique": "25",
            "identifier": "Actor 5",
            "name": "CLIENTE",
            "type": "Actor",
            "x": 1390,
            "y": 550
        },
        {
            "unique": "47",
            "identifier": "Actor 7",
            "name": "DEPENDIENTE",
            "type": "Actor",
            "x": 1400,
            "y": 680
        },
        {
            "unique": "55",
            "identifier": "Actor 1",
            "name": "CLIENTE",
            "type": "Actor",
            "x": 1240,
            "y": 770
        },
        {
            "unique": "59",
            "identifier": "Actor 3",
            "name": "DEPENDIENTE",
            "type": "Actor",
            "x": 1310,
            "y": 880
        },
        {
            "unique": "67",
            "identifier": "Actor 4",
            "name": "Gestor",
            "type": "Actor",
            "x": 310,
            "y": 620
        },
        {
            "unique": "68",
            "identifier": "Actor 5",
            "name": "Sastre",
            "type": "Actor",
            "x": 310,
            "y": 760
        },
        {
            "unique": "80",
            "identifier": "Actor 6",
            "name": "DEPENDIENTE",
            "type": "Actor",
            "x": 390,
            "y": 1120
        },
        {
            "unique": "81",
            "identifier": "Actor 7",
            "name": "CLIENTE",
            "type": "Actor",
            "x": 560,
            "y": 1120
        },
        {
            "unique": "88",
            "identifier": "Actor 8",
            "name": "CLIENTE",
            "type": "Actor",
            "x": 70,
            "y": 770
        }
    ],
    "starts": [
        {
            "unique": "2",
            "identifier": "Start1",
            "name": "Start ",
            "type": "Start",
            "x": 650,
            "y": 20
        }
    ],
    "ends": [
        {
            "unique": "90",
            "identifier": "End4",
            "name": "End ",
            "type": "End",
            "x": 130,
            "y": 1100
        }
    ],
    "communicativeEvents": [
        {
            "unique": "3",
            "identifier": "DIS1",
            "name": "EL DEPENDIENTE MUESTRA EL CATALOGO",
            "type": "Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 590,
            "y": 130,
            "supportActor": [
                {
                    "unique": "4",
                    "identifier": "Actor",
                    "name": "Dependiente",
                    "type": "Support Actor"
                }
            ]
        },
        {
            "unique": "12",
            "identifier": "DIS2",
            "name": "EL CLIENTE ELIGE UN DISFRAZ",
            "type": "Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 590,
            "y": 310,
            "supportActor": [
                {
                    "unique": "13",
                    "identifier": "Actor",
                    "name": "Dependiente",
                    "type": "Support Actor"
                }
            ]
        },
        {
            "unique": "52",
            "identifier": "DIS5",
            "name": "EL CLIENTE PIDE EL ACCESORIO",
            "type": "Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 890,
            "y": 820,
            "supportActor": [
                {
                    "unique": "53",
                    "identifier": "Actor",
                    "name": "Dependiente",
                    "type": "Support Actor"
                }
            ]
        },
        {
            "unique": "63",
            "identifier": "DIS6",
            "name": "EL SASTRE COSE EL PEDIDO",
            "type": "Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 480,
            "y": 710,
            "supportActor": [
                {
                    "unique": "64",
                    "identifier": "Actor",
                    "name": "Sastre",
                    "type": "Support Actor"
                }
            ]
        },
        {
            "unique": "74",
            "identifier": "DIS7",
            "name": "EL DEPENDIENTE ENTREGA Y COBRA EL PEDIDO",
            "type": "Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 390,
            "y": 910,
            "supportActor": [
                {
                    "unique": "75",
                    "identifier": "Actor",
                    "name": "Dependiente",
                    "type": "Support Actor"
                }
            ]
        },
        {
            "unique": "85",
            "identifier": "DIS8",
            "name": "EL CLIENTE PAGA LA FACTURA",
            "type": "Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 40,
            "y": 910,
            "supportActor": [
                {
                    "unique": "86",
                    "identifier": "Actor",
                    "name": "DEPENDIENTE",
                    "type": "Support Actor"
                }
            ]
        }
    ],
    "specialisedCommunicativeEvents": [
        {
            "unique": "37",
            "identifier": "DIS3",
            "name": "El dependiente comprueba el stock",
            "type": "Specialised Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 560,
            "y": 480,
            "internalCommunicativeEvent": [
                {
                    "unique": "38",
                    "identifier": "DIS3.1",
                    "name": "Hay stock del producto",
                    "type": "Internal Communicative Event",
                    "goals": "",
                    "description": "",
                    "channel": "",
                    "temporalRestrictions": "",
                    "frequency": "",
                    "contextConstraints": "",
                    "structuralConstraints": "",
                    "treatment": "",
                    "linkedCommunication": "",
                    "linkedReaction": ""
                },
                {
                    "unique": "39",
                    "identifier": "DIS3.2",
                    "name": "No hay stock del producto",
                    "type": "Internal Communicative Event",
                    "goals": "",
                    "description": "",
                    "channel": "",
                    "temporalRestrictions": "",
                    "frequency": "",
                    "contextConstraints": "",
                    "structuralConstraints": "",
                    "treatment": "",
                    "linkedCommunication": "",
                    "linkedReaction": ""
                }
            ],
            "supportActor": [
                {
                    "unique": "40",
                    "identifier": "Actor",
                    "name": "Dependiente",
                    "type": "Support Actor"
                }
            ]
        },
        {
            "unique": "41",
            "identifier": "DIS4",
            "name": "EL CLIENTE EVALÚA LA SITUACIÓN",
            "type": "Specialised Communicative Event",
            "goals": "",
            "description": "",
            "channel": "",
            "temporalRestrictions": "",
            "frequency": "",
            "contextConstraints": "",
            "structuralConstraints": "",
            "treatment": "",
            "linkedCommunication": "",
            "linkedReaction": "",
            "x": 940,
            "y": 580,
            "internalCommunicativeEvent": [
                {
                    "unique": "42",
                    "identifier": "DIS4.1",
                    "name": "Pide coser los que faltan",
                    "type": "Internal Communicative Event",
                    "goals": "",
                    "description": "",
                    "channel": "",
                    "temporalRestrictions": "",
                    "frequency": "",
                    "contextConstraints": "",
                    "structuralConstraints": "",
                    "treatment": "",
                    "linkedCommunication": "",
                    "linkedReaction": ""
                },
                {
                    "unique": "43",
                    "identifier": "DIS4.2",
                    "name": "Seguir pedido con los que hay",
                    "type": "Internal Communicative Event",
                    "goals": "",
                    "description": "",
                    "channel": "",
                    "temporalRestrictions": "",
                    "frequency": "",
                    "contextConstraints": "",
                    "structuralConstraints": "",
                    "treatment": "",
                    "linkedCommunication": "",
                    "linkedReaction": ""
                }
            ],
            "supportActor": [
                {
                    "unique": "44",
                    "identifier": "Actor",
                    "name": "Dependiente",
                    "type": "Support Actor"
                }
            ]
        }
    ],
    "communicativeInteractions": [
        {
            "unique": "7",
            "identifier": "CI",
            "name": "Catalogo",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Catalogo",
                "type": "Structure",
                "children": [
                    {
                        "name": "Catalogo",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Disfraces",
                                "type": "Iteration",
                                "children": [
                                    {
                                        "name": "Disfraz",
                                        "type": "Aggregation",
                                        "children": [
                                            {
                                                "name": "Nombre",
                                                "type": "Data Field",
                                                "operation": "Input",
                                                "domain": "Text",
                                                "example": [
                                                    "Example: Tyrell",
                                                    "Example: 256",
                                                    "Example: €100",
                                                    "Example: 31/09/2020"
                                                ],
                                                "children": []
                                            },
                                            {
                                                "name": "Descripción",
                                                "type": "Data Field",
                                                "operation": "Input",
                                                "domain": "Text",
                                                "example": [
                                                    "Example: Tyrell",
                                                    "Example: 256",
                                                    "Example: €100",
                                                    "Example: 31/09/2020"
                                                ],
                                                "children": []
                                            },
                                            {
                                                "name": "Precio",
                                                "type": "Data Field",
                                                "operation": "Input",
                                                "domain": "Number",
                                                "example": [
                                                    "Example: Tyrell",
                                                    "Example: 256",
                                                    "Example: €100",
                                                    "Example: 31/09/2020"
                                                ],
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Accesorios",
                                "type": "Iteration",
                                "children": [
                                    {
                                        "name": "Accesorio",
                                        "type": "Aggregation",
                                        "children": [
                                            {
                                                "name": "Nombre",
                                                "type": "Data Field",
                                                "operation": "Input",
                                                "domain": "Text",
                                                "example": [
                                                    "Example: Tyrell",
                                                    "Example: 256",
                                                    "Example: €100",
                                                    "Example: 31/09/2020"
                                                ],
                                                "children": []
                                            },
                                            {
                                                "name": "Descripción",
                                                "type": "Data Field",
                                                "operation": "Input",
                                                "domain": "Text",
                                                "example": [
                                                    "Example: Tyrell",
                                                    "Example: 256",
                                                    "Example: €100",
                                                    "Example: 31/09/2020"
                                                ],
                                                "children": []
                                            },
                                            {
                                                "name": "Precio",
                                                "type": "Data Field",
                                                "operation": "Input",
                                                "domain": "Number",
                                                "example": [
                                                    "Example: Tyrell",
                                                    "Example: 256",
                                                    "Example: €100",
                                                    "Example: 31/09/2020"
                                                ],
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Fecha_Publicacion",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Date",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "6",
            "target": "3"
        },
        {
            "unique": "9",
            "identifier": "CI",
            "name": "Catalogo",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "New Structure",
                "type": "Structure",
                "children": []
            },
            "source": "3",
            "target": "8"
        },
        {
            "unique": "17",
            "identifier": "CI",
            "name": "Disfraz",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Disfraz",
                "type": "Structure",
                "children": [
                    {
                        "name": "DisfrazPedido",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Cliente",
                                "type": "Aggregation",
                                "children": [
                                    {
                                        "name": "Nombre",
                                        "type": "Data Field",
                                        "operation": "Input",
                                        "domain": "Text",
                                        "example": [
                                            "Example: Tyrell",
                                            "Example: 256",
                                            "Example: €100",
                                            "Example: 31/09/2020"
                                        ],
                                        "children": []
                                    },
                                    {
                                        "name": "Telefono",
                                        "type": "Data Field",
                                        "operation": "Input",
                                        "domain": "Number",
                                        "example": [
                                            "Example: Tyrell",
                                            "Example: 256",
                                            "Example: €100",
                                            "Example: 31/09/2020"
                                        ],
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "name": "Data Field",
                                "type": "Data Field",
                                "operation": "Operation",
                                "domain": "Domain",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "Disfraz",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            },
                            {
                                "name": "Cantidad",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Number",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "16",
            "target": "12"
        },
        {
            "unique": "18",
            "identifier": "CI",
            "name": "Disfraz",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "New Structure",
                "type": "Structure",
                "children": []
            },
            "source": "12",
            "target": "15"
        },
        {
            "unique": "48",
            "identifier": "CI",
            "name": "Decision",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Decision",
                "type": "Structure",
                "children": [
                    {
                        "name": "Decisión",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Respuesta",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Text",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "DisfrazPedido",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "25",
            "target": "41"
        },
        {
            "unique": "49",
            "identifier": "CI",
            "name": "Decision",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "New Structure",
                "type": "Structure",
                "children": []
            },
            "source": "41",
            "target": "47",
            "points": [
                {
                    "x": 1335,
                    "y": 720
                },
                {
                    "x": 1335,
                    "y": 748
                }
            ]
        },
        {
            "unique": "56",
            "identifier": "CI",
            "name": "Accesorios",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Accesorios",
                "type": "Structure",
                "children": [
                    {
                        "name": "AccesorioPedido",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Cantidad",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Number",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "Accesorio",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "55",
            "target": "52"
        },
        {
            "unique": "60",
            "identifier": "CI",
            "name": "Accesorios",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "New Structure",
                "type": "Structure",
                "children": []
            },
            "source": "52",
            "target": "59",
            "points": [
                {
                    "x": 1220,
                    "y": 910
                },
                {
                    "x": 1220,
                    "y": 910
                }
            ]
        },
        {
            "unique": "69",
            "identifier": "CI",
            "name": "Pedido",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Pedido",
                "type": "Structure",
                "children": [
                    {
                        "name": "OrdenTrabajo",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Fecha_Entrega",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Date",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "DisfrazPedido",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "67",
            "target": "63",
            "points": [
                {
                    "x": 500,
                    "y": 658
                }
            ]
        },
        {
            "unique": "70",
            "identifier": "CI",
            "name": "Pedido",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "New Structure",
                "type": "Structure",
                "children": []
            },
            "source": "63",
            "target": "68"
        },
        {
            "unique": "82",
            "identifier": "CI",
            "name": "FACTURA",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Factura",
                "type": "Structure",
                "children": [
                    {
                        "name": "OrdenCompra",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Fecha",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Date",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "PrecioTotal",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Number",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "Pagado",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Text",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "Cliente",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            },
                            {
                                "name": "AccesorioPedido",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            },
                            {
                                "name": "DisfrazPedido",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "80",
            "target": "74",
            "points": [
                {
                    "x": 330,
                    "y": 1158
                },
                {
                    "x": 330,
                    "y": 1078
                },
                {
                    "x": 460,
                    "y": 1078
                }
            ]
        },
        {
            "unique": "84",
            "identifier": "CI",
            "name": "FACTURA",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "New Structure",
                "type": "Structure",
                "children": []
            },
            "source": "74",
            "target": "81"
        },
        {
            "unique": "89",
            "identifier": "CI",
            "name": "FACTURA",
            "type": "Communicative Interaction",
            "messageStructure": {
                "name": "Factura",
                "type": "Structure",
                "children": [
                    {
                        "name": "Factura",
                        "type": "Aggregation",
                        "children": [
                            {
                                "name": "Fecha",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Date",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            },
                            {
                                "name": "OrdenCompra",
                                "type": "Reference Field",
                                "extends_business_object": "False",
                                "operation": "Input",
                                "domain": "Domain (Object)",
                                "example": "Example: A513, Tyrell",
                                "children": []
                            },
                            {
                                "name": "CantidadPagada",
                                "type": "Data Field",
                                "operation": "Input",
                                "domain": "Number",
                                "example": [
                                    "Example: Tyrell",
                                    "Example: 256",
                                    "Example: €100",
                                    "Example: 31/09/2020"
                                ],
                                "children": []
                            }
                        ]
                    }
                ]
            },
            "source": "88",
            "target": "85"
        }
    ],
    "precedenceRelations": [
        {
            "unique": "5",
            "type": "Precedence Relation",
            "source": "2",
            "target": "3"
        },
        {
            "unique": "14",
            "type": "Precedence Relation",
            "source": "3",
            "target": "12"
        },
        {
            "unique": "45",
            "type": "Precedence Relation",
            "source": "37",
            "target": "41"
        },
        {
            "unique": "51",
            "type": "Precedence Relation",
            "source": "12",
            "target": "37"
        },
        {
            "unique": "54",
            "type": "Precedence Relation",
            "source": "41",
            "target": "52"
        },
        {
            "unique": "65",
            "type": "Precedence Relation",
            "source": "41",
            "target": "63",
            "points": [
                {
                    "x": 860,
                    "y": 730
                },
                {
                    "x": 860,
                    "y": 773
                }
            ]
        },
        {
            "unique": "66",
            "type": "Precedence Relation",
            "source": "37",
            "target": "52",
            "points": [
                {
                    "x": 770,
                    "y": 840
                }
            ]
        },
        {
            "unique": "76",
            "type": "Precedence Relation",
            "source": "52",
            "target": "74"
        },
        {
            "unique": "77",
            "type": "Precedence Relation",
            "source": "63",
            "target": "74"
        },
        {
            "unique": "87",
            "type": "Precedence Relation",
            "source": "74",
            "target": "85"
        },
        {
            "unique": "91",
            "type": "Precedence Relation",
            "source": "85",
            "target": "90"
        }
    ]
}
 ```
  
</details>

# Pasos instalación Docker:
