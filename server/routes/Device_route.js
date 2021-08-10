const Router = require('express')
const router = new Router()
const DeviceController = require("../controller/DeviceController")
const CheckRole = require("../middleware/CheckRoleMiddleware")

router.post('/',CheckRole('USER'), DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)

module.exports = router