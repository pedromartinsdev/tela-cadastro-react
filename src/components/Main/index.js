import React from 'react';
import { MainContainer } from './styles';
import Message from '../Message'
import Form from '../Form';

function Main () {
    return (
        <MainContainer>
          <Message />
          <Form />
        </MainContainer>
    );
  }
  
export default Main;