const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { User } = require('../models/models')

const generatejwt = (login, id, role) => {
   return jwt.sign({ id, login, role }, 'secret_key', { expiresIn: '5h' })
}

class UserController {

   async registration(req, res, next) {
      const { login, password, role } = req.body
      if (!login || !password) {
         return next(ApiError.badRequest("Введите пароль и логин"))
      }
      const candidate = await User.findOne({ where: { login } })
      if (candidate) {
         return next(ApiError.badRequest("Пользователь с таким логином уже существует"))
      }
      const HashPassword = await bcrypt.hash(password, 3)
      const user = await User.create({ login, role, password: HashPassword })
      const token = generatejwt(user.id, user.login, user.role)
      return res.json({ token })
   }

   async login(req, res, next) {
      const { login, password } = req.body
      const user = await User.findOne({ where: { login } })
      if (!user) {
         return next(ApiError.badRequest('Пользователь не найден'))
      }
      let ComparePassword = bcrypt.compareSync(password, user.password)
      if (!ComparePassword) {
         return next(ApiError.badRequest('Неверный пароль'))
      }
      const token = generatejwt(user.id, user.login, user.role)
      return res.json({ token })
   }

   async check(req, res, next) {
      const token = generatejwt(req.user.id, req.user.login, req.user.role)
      return res.json({ token })
   }
}

module.exports = new UserController()