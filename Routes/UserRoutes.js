const app = require('express')
const router = app.Router()

const {
    registerValidations,
    register,
    loginValidations,
    login
} = require('../controllers/UserController')

router.post('/user/register', registerValidations, register)
router.post('/user/login',loginValidations, login)

module.exports = router 