import React from 'react';
import { HeaderContainer } from './styles';
import logo  from "../../assets/dio-logo.svg"

function Header () {
    return (
        <HeaderContainer>
          <img src={logo} alt="logo da DIO"></img>
          <div className='link-container'>
            <a className='header-link first-link' href='/'>Home</a>
            <a className='header-link' href='/'>Entrar</a>
            <a className='header-link' href='/'>Cadastrar</a>
          </div>
        </HeaderContainer>
    );
  }
  
export default Header;