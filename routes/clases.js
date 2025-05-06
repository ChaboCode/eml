const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../prisma/client/client')
const {checkLogin} = require("../util/login");
const prisma = new PrismaClient()


router.get('/', async (req, res) => {
    try {
        const clases = await prisma.clases.findMany({})
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

router.post('/', async (req, res) => {
    const {FkIdHorario, FkIdEspacio, NombreC, Descripcion} = req.body

    try {
        const nuevaClase = await prisma.clases.create({
            data: {
                Descripcion,
                NombreC,
                // FkIdHorario: parseInt(FkIdHorario),
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
                        IdHorario: parseInt(FkIdHorario) // Pull to frontend
                    }
                },
            }
        })

        res.status(301).json(nuevaClase)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;