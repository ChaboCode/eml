const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../prisma/client/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        const users = await prisma.usuarios.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });

    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = prisma.Usuarios.findUnique({

            where: { id },
        });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json ({error: "Error al buscar usuario"});

    }
});

router.post('/',async (req,res) => {
    const {nombre, email}=req.body;
    if (!nombre || !email){
        return res.status(400).json8({meensaje: 'Nombre y email son requeridos'});
    }
    try {
        const newUser =await prisma.usuario.create({
            data: {nombre, email},         
        });
        res.status (201).json(newUser);
    }catch (error){
        res.status(500).json({ error: "Error al crear usuario"});

    }
});


router.put('/:id',async (req,res)=> { 
    const id =parseInt(req.params.id);
    const { nombre, email }=req.body;
    try{
        const updateUser =await prisma.usuario.update({
            where: { id },
            data: { nombre, email }, 
        });
        res.json(updateUser);
    }catch (error) {
        res.status(404).json({ mensaje: 'Usuario no encontrado'});
    }
});

module.exports = router;

