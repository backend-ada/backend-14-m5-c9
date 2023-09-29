import express, { json } from 'express';
import { userRouter } from './routes/user-router';
import authMiddleware from './middlewares/auth';

const PORT = 36000;
const app = express();

// ------------------ MIDDLEWARES ------------------ //

app.use(json());

// Aplicamos el middleware de autenticación para todas las rutas.
// Esto en principio no tiene mucho sentido porque me pediría un token hasta para loguearme, cosa que es imposible.
app.use(authMiddleware);

// ------------------ ROUTING ------------------ //

// Es necesario que /api/user esté primero que /api, sino todas las solicitudes que se hagan a /api/users las maneja /api.
app.use('/api/users', userRouter);

// Siempre es una buena práctica el configurar un endpoint para obtener el estado e info general del servidor.
app.use('/api', (req, res) => {
	res.status(200).json({
		name: 'RESTful API for user management',
		version: '1.0.0',
		running: true,
		paths: ['/api/users', '/api/users/login'],
	});
});

// ------------------ SERVER ------------------ //

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
