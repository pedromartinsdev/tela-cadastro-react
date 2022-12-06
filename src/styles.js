import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'open-sans'
  }

  body{ 
    background-color: #1E192C;
    color: #FFFFFF
  }

`

export default GlobalStyle