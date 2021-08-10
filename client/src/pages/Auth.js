import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { NavLink, useHistory, useLocation, } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import './Auth.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import { logins, registration } from '../http/UserAPI';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
   const { user } = useContext(Context)
   const location = useLocation()
   const history = useHistory()
   const isLogin = location.pathname === LOGIN_ROUTE
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const click = async () => {
      try {
         let data
         if (isLogin) {
            data = await logins(login, password)
         } else {
            data = await registration(login, password)
         }
         user.setUser(user)
         user.setIsAuth(true)
         history.push(SHOP_ROUTE)
      } catch (e) {
         alert(e.response.data.massage)
      }

   }
   return (
      <Container className="Auth__container"
         style={{ height: window.innerHeight - 54 }}>
         <Card className="Auth__Form">
            <h1>{isLogin ? 'Авторизация' : "Регистрация"}</h1>
            <Form>
               <FormControl className="Auth_field"
                  placeholder="Введите логин"
                  value={login}
                  onChange={e => setLogin(e.target.value)}>

               </FormControl>
               <FormControl className="Auth_field"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type={'password'}>

               </FormControl>
               <Row className="Auth_row">
                  {isLogin ?
                     <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                     </div>
                     :
                     <div>
                        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                     </div>
                  }
                  <Button className="Auth_button"
                     onClick={click}>
                     {isLogin ? 'Войти' : 'Регистрация'}
                  </Button>
               </Row>

            </Form>
         </Card>
      </Container>
   );
});

export default Auth;
