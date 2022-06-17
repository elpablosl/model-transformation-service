const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/modelTransformation/CAtoUML';

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );


    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/model_transformation'));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;