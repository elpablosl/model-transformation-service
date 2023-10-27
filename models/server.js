const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.transformationPath = '/api/modelTransformation/CAtoUML';

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

    }

    middlewares() {

         // CORS
         this.app.use(cors({
            origin: 'https://pros-ca-modeler.netlify.app', // Cambia al dominio desde donde se harán las solicitudes
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
            credentials: true, // Habilita el uso de credenciales (cookies, encabezados de autorización, etc.) en la solicitud
            optionsSuccessStatus: 204 // Establece el código de estado para las solicitudes OPTIONS exitosas
        }));

        // Lectura y parseo del body
        this.app.use( express.json() );
  
    }

    routes() {
        this.app.use(this.transformationPath, require('../controllers/model_transformation'));     
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;