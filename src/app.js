import express from 'express';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import rateLimitMiddleware from './middleware/rateLimitMiddleware.js';
import routes from './routes/index.js';
import cors from 'cors';

// Cargar variables de entorno
dotenv.config();

// Configuración de CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

const app = express();

// Middlewares
app.use(express.json());
app.use(rateLimitMiddleware);
app.use(cors(corsOptions));

// Rutas principales
app.use('/api/v1', routes);

// Middleware de manejo de errores
app.use(errorHandlerMiddleware);

// Iniciar el servidor
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT}`);
});