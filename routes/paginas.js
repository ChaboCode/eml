const express = require("express");
const path = require('path')
const {checkLogin} = require("../util/login");
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'Menu.html'));
})

router.get('/reservar', checkLogin, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'cancha.html'));
})

router.get('/login', (req, res, next) => {
    if (req.session.user) {
        res.redirect(req.originalUrl);
    } else next()

}, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
})

module.exports = router;