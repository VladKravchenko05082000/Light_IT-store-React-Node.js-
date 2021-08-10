const Router = require('express')
const TypeController = require('../controller/TypeController')
const router = new Router()
const CheckRole = require("../middleware/CheckRoleMiddleware")

router.post('/', CheckRole('USER'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router