const express = require('express');
const router = express.Router();
const { PrismaClient, Estado, Reservas_Estado } = require('../prisma/client/client');
const prisma = new PrismaClient();

// GET - Todas las reservas
router.get('/', async (req, res) => {
  try {
    const reservas = await prisma.reserva.findMany({
      include: {
        usuario: { select: { nombre: true, email: true } },
        espacio: { select: { numero: true } }
      }
    });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reservas" });
  }
});

// GET - Reserva por ID
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const reserva = await prisma.reserva.findUnique({
      where: { idReserva: id },
      include: {
        usuario: { select: { nombre: true } },
        espacio: { select: { numero: true } }
      }
    });
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ mensaje: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar reserva" });
  }
});

// POST - Crear nueva reserva
router.post('/', async (req, res) => {
  const { FkIdUsuario, FkIdEspacio, FechaReserva, HoraInicioR, HoraFinR } = req.body;
  
  // Validaciones básicas
  if (!FkIdUsuario || !FkIdEspacio || !FechaReserva || !HoraInicioR || !HoraFinR) {
    return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
  }

  try {
    // Verificar que el usuario y espacio existen
    const [usuario, espacio] = await Promise.all([
      prisma.usuarios.findUnique({ where: { IdUsuario: parseInt(FkIdUsuario) } }),
      prisma.espacios.findUnique({ where: { IdEspacio: parseInt(FkIdEspacio) } })
    ]);

    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    if (!espacio) return res.status(404).json({ error: 'Espacio no encontrado' });

    // Crear reserva
    const nuevaReserva = await prisma.reservas.create({
      data: {
        FkIdUsuario:parseInt(FkIdUsuario),
        FkIdEspacio:parseInt(FkIdEspacio),
        FechaReserva: new Date(FechaReserva),
        HoraInicioR:new Date(HoraInicioR),
        HoraFinR: new Date(HoraFinR),
        estado: Reservas_Estado.PENDIENTE // Se asigna automáticamente
      },
      //include: {
        //usuario: { select: { nombre: true } },
        //espacio: { select: { numero: true } }
      //}
    });

    res.status(201).json(nuevaReserva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear reserva", detalles: error.message });
  }
});

// PUT - Actualizar estado de reserva (ej: confirmar/cancelar)
router.put('/:id/estado', async (req, res) => {
  const id = parseInt(req.params.id);
  const { estado } = req.body;

  if (!Object.values(Estado).includes(estado)) {
    return res.status(400).json({ error: 'Estado no válido' });
  }

  try {
    const reservaActualizada = await prisma.reserva.update({
      where: { idReserva: id },
      data: { estado },
      include: {
        usuario: { select: { nombre: true } }
      }
    });
    res.json(reservaActualizada);
  } catch (error) {
    res.status(404).json({ mensaje: 'Reserva no encontrada' });
  }
});

// DELETE - Cancelar reserva (marcar como cancelada en lugar de borrar)
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const reservaCancelada = await prisma.reserva.update({
      where: { idReserva: id },
      data: { estado: Estado.CANCELADA },
      include: {
        usuario: { select: { nombre: true } }
      }
    });
    res.json({ mensaje: 'Reserva cancelada', reserva: reservaCancelada });
  } catch (error) {
    res.status(404).json({ mensaje: 'Reserva no encontrada' });
  }
});

module.exports = router;