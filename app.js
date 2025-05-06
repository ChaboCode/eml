const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')

// Crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))


// Ruta básica de bienvenida
const pageRoutes = require('./routes/paginas');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pageRoutes);

// Importar y usar rutas de usuarios
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

const loginRoutes = require('./routes/login')
app.use('/api/login', loginRoutes)

const clasesRoutes = require('./routes/clases')
app.use('/api/clases', clasesRoutes)

const reservasRoutes = require('./routes/reservas');
app.use('/api/reserva', reservasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});