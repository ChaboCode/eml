const express = require('express');
const router = express.Router();
const {PrismaClient} = require('../prisma/client/client')
const prisma = new PrismaClient()


router.post('/', async (req, res) => {
    const {email, password} = req.body
    const user = await prisma.usuarios.findUnique({
        where: {
            CorreoU: email,
            Contrase_a: password,
        },
    })

    if (user) {
        req.session.user = user
        res.redirect('/')
    } else {
        res.send('Login incerrocto, <a href="/login">Volver a intentar</a>')
    }
})

router.get('/user', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user.Usuario)
    } else {
        res.json(null)
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

module.exports = router