import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'open-sans'
  }

  body{ 
    background-color: #22272e;
    color: #FFFFFF
  }

`

export default GlobalStyle