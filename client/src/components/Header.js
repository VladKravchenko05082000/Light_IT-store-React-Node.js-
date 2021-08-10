import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { SHOP_ROUTE, LOGIN_ROUTE } from '../utils/const';
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from 'react-router-dom'

const Header = observer(() => {
   const { user } = useContext(Context)
   const history = useHistory()
   const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
   }
   return (
      <Navbar className={"Header"}>
         <Container>
            <NavLink className={"Header__logo"} to={SHOP_ROUTE}>Мобилочка</NavLink>
            {user.isAuth ?
               <Nav className="Header__list">
                  <Button
                     onClick={() => logOut()}
                  >
                     Выйти</Button>
               </Nav>
               :
               <Nav className="Header__list">
                  <Button onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
               </Nav>
            }

         </Container>
      </Navbar>
   );
});

export default Header;