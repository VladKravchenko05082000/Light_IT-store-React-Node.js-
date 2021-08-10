const Router = require('express')
const router = new Router()
const BrandController = require('../controller/BrandController')
const CheckRole = require("../middleware/CheckRoleMiddleware")

router.post('/', CheckRole('USER'), BrandController.create)
router.get('/', BrandController.getAll)

module.exports = router