const Router = require('express')
const router = new Router()
const deviceRouter = require('./Device_route')
const userRouter = require('./User_route')
const brandRouter = require('./Brand_route')
const typeRouter = require('./Type_route')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router