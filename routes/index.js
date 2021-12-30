const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('markets')
})
router.get('/4x800', (req, res) => {
    res.render('4x800')
})
router.get('/captain', (req, res) => {
    res.render('captain')
})
router.get('/decade', (req, res) => {
    res.render('decade')
})

module.exports = router