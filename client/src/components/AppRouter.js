import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '../index';
import { AuthRoutes, PublicRoutes } from '../store/routes'
import { SHOP_ROUTE } from '../utils/const';

const AppRouter = () => {
   const { user } = useContext(Context)

   console.log(user)
   return (
      <Switch>
         {user.isAuth && AuthRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />
         )}
         {PublicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />
         )}
         <Redirect to={SHOP_ROUTE} />
      </Switch>
   );
};

export default AppRouter;