const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../prisma/client/client')
const {checkLogin} = require("../util/login");
const prisma = new PrismaClient()


router.get('/', checkLogin, async (req, res) => {
    try {
        const clases = await prisma.clases.findMany({
            where: {
                FkIdEntrenador: req.session.FkIdEntrenador
            }
        })
        res.status(200).json(clases)
    } catch (error) {
        res.status(500).json({msg: "Error al obtener clases", error})
    }
})

router.get('/:id', checkLogin, async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const clase = await prisma.clases.findUnique({
            where: {
                IdClase: id
            }
        })
        if (clase) {
            res.status(200).json(clase)
        }
    } catch (error) {
        res.status(500).json({msg: "Error al obtener clase", error})
    }
})

router.post('/', checkLogin, async (req, res) => {
    const {Fecha, HoraInicioForm, HoraFinForm, FkIdEspacio, NombreC, Descripcion} = req.body

    const date =  new Date(Fecha);
    // Convertir hora
    const [inicio_hour, inicio_minute] = HoraInicioForm.split(':');
    const [fin_hour, fin_minute] = HoraFinForm.split(':');
    const DiaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'][date.getDay()]

    const HoraInicio = new Date()
    HoraInicio.setHours(inicio_hour, inicio_minute, 0, 0);
    const HoraFin = new Date()
    HoraFin.setHours(fin_hour, fin_minute, 0, 0);

    try {
        const horarios = await prisma.horarios.findMany({
            where: {
                DiaSemana,
                HoraInicio,
                HoraFin
            },
            select: {
                IdHorario: true,
            },
            take: 1,
        })

        let horario = horarios[0]

        if (horarios.length < 1) {
            horario = await prisma.horarios.create({
                data: {
                    FkIdEspacio: parseInt(FkIdEspacio),
                    HoraInicio,
                    HoraFin,
                    DiaSemana,
                },
                select: {
                    IdHorario: true,
                }
            })
        }

        const nuevaClase = await prisma.clases.create({
            data: {
                Descripcion,
                NombreC,
                // FkIdHorario: horario,
                Entrenadores: {
                    connect: {
                        IdEntrenador: 1
                    }
                },
                Espacios: {
                    connect: {
                        IdEspacio: parseInt(FkIdEspacio) // Pull to frontend
                    }
                },
                Horarios: {
                    connect: {
                        IdHorario: horario.IdHorario,
                    }
                },
            }
        })

        res.redirect(301, '/clases')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.get('/borrar/:id', checkLogin, async (req, res) => {
    const IdClase = parseInt(req.params.id)
    try {
        // Primero hay que ver si la clase es de ese profe, no vaya a borrar una que no jaja
        const clase = await prisma.clases.findUnique({
            where: {
                IdClase,
                FkIdEntrenador: req.session.IdEntrenador
            }
        })

        if (clase) {
            await prisma.clases.delete({
                where: {
                    IdClase,
                }
            })
        }
        res.redirect('/clases')
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;