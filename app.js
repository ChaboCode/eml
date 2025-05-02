const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta básica de bienvenida
const pageRoutes = require('./routes/paginas');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pageRoutes);
// app.get('/', (req, res) => {
//   res.json({ mensaje: '¡Bienvenido a mi primera API con Express!' });
// });

// Importar y usar rutas de usuarios
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});