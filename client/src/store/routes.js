import { DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, USER_ROUTE } from '../utils/const'
import User from '../pages/User'
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import DevicePages from '../pages/DevicePage'


export const AuthRoutes = [
   {
      path: USER_ROUTE,
      Component: User
   }
]

export const PublicRoutes = [
   {
      path: SHOP_ROUTE,
      Component: Shop
   },

   {
      path: LOGIN_ROUTE,
      Component: Auth
   },

   {
      path: REGISTRATION_ROUTE,
      Component: Auth
   },

   {
      path: DEVICE_ROUTE + '/:id',
      Component: DevicePages
   }
]