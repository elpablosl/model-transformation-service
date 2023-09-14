const express = require('express');
const cors = require('cors');

const https = require('https');
const fs =  require('fs');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.transformationPath = '/api/modelTransformation/CAtoUML';

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

        // Configuración HTTPS
        const httpsOptions = {
            key: fs.readFileSync('certificados/key.pem'),
            cert: fs.readFileSync('certificados/cert.pem')
        };

        this.httpsServer = https.createServer(httpsOptions, this.app);

    }

    middlewares() {

        // CORS
        this.app.use( cors({
            origin: ['https://pros-ca-modeler.netlify.app']
        }));

        // Lectura y parseo del body
        this.app.use( express.json() );


    }

    routes() {
        this.app.use(this.transformationPath, require('../controllers/model_transformation'));     
    }

    listen() {
        this.httpsServer.listen(this.port, () => {
            console.log('Servidor HTTPS corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;