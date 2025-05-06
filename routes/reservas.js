const express = require('express');
const router = express.Router();
const {PrismaClient, Estado, Reservas_Estado} = require('../prisma/client/client');
const {checkLogin} = require("../util/login");
const prisma = new PrismaClient();

// GET - Todas las reservas
router.get('/', async (req, res) => {
    try {
        const reservas = await prisma.reservas.findMany({});
        res.json(reservas);
    } catch (error) {
        res.status(500).json({error: "Error al obtener reservas"});
    }
});

// GET - Reserva por ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const reserva = await prisma.reservas.findUnique({
            where: {IdReserva: id},
        });
        if (reserva) {
            res.json(reserva);
        } else {
            res.status(404).json({mensaje: 'Reserva no encontrada'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error al buscar reserva"});
    }
});

// POST - Crear nueva reserva
router.post('/', checkLogin, async (req, res) => {
    const {FkIdEspacio, FechaReserva, HoraInicioR: HoraInicioRText, HoraFinR: HoraFinRText} = req.body;
    const FkIdUsuario = req.session.user.IdUsuario;

    // Convertir hora
    const [inicio_hour, inicio_minute] = HoraInicioRText.split(':');
    const [fin_hour, fin_minute] = HoraFinRText.split(':');

    const HoraInicioR = new Date()
    HoraInicioR.setHours(inicio_hour, inicio_minute, 0, 0);
    const HoraFinR = new Date()
    HoraFinR.setHours(fin_hour, fin_minute, 0, 0);

    // Validaciones básicas
    if (!FkIdUsuario || !FkIdEspacio || !FechaReserva || !HoraInicioRText || !HoraFinRText) {
        return res.status(400).json({mensaje: 'Todos los campos son requeridos'});
    }

    try {
        // Verificar que el usuario y espacio existen
        const [usuario, espacio] = await Promise.all([
            prisma.usuarios.findUnique({where: {IdUsuario: parseInt(FkIdUsuario)}}),
            prisma.espacios.findUnique({where: {IdEspacio: parseInt(FkIdEspacio)}})
        ]);

        if (!usuario) return res.status(404).json({error: 'Usuario no encontrado'});
        if (!espacio) return res.status(404).json({error: 'Espacio no encontrado'});

        // Crear reserva
        const nuevaReserva = await prisma.reservas.create({
            data: {
                FkIdUsuario: parseInt(FkIdUsuario),
                FkIdEspacio: parseInt(FkIdEspacio),
                FechaReserva: new Date(FechaReserva),
                HoraInicioR,
                HoraFinR,
                estado: Reservas_Estado.PENDIENTE // Se asigna automáticamente
            },
            include: {},
        });

        res.redirect(`/api/reserva/${nuevaReserva.IdReserva}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error al crear reserva", detalles: error.message});
    }
});

// PUT - Actualizar estado de reserva (ej: confirmar/cancelar)
router.put('/:id/estado', async (req, res) => {
    const id = parseInt(req.params.id);
    const {estado} = req.body;

    if (!Object.values(Estado).includes(estado)) {
        return res.status(400).json({error: 'Estado no válido'});
    }

    try {
        const reservaActualizada = await prisma.reserva.update({
            where: {idReserva: id},
            data: {estado},
            include: {
                usuario: {select: {nombre: true}}
            }
        });
        res.json(reservaActualizada);
    } catch (error) {
        res.status(404).json({mensaje: 'Reserva no encontrada'});
    }
});

// DELETE - Cancelar reserva (marcar como cancelada en lugar de borrar)
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const reservaCancelada = await prisma.reserva.update({
            where: {idReserva: id},
            data: {estado: Estado.CANCELADA},
            include: {
                usuario: {select: {nombre: true}}
            }
        });
        res.json({mensaje: 'Reserva cancelada', reserva: reservaCancelada});
    } catch (error) {
        res.status(404).json({mensaje: 'Reserva no encontrada'});
    }
});

module.exports = router;