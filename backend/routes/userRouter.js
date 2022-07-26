const express = require('express')
const router = express.Router()

const {registeruser, loginuser, getme} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')
router.post('/', registeruser)
router.post('/login', loginuser)
router.post('/me',protect, getme)

module.exports= router