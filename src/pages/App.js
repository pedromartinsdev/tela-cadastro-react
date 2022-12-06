import { Container } from './styles'
import Header from '../components/Header'
import MainContainer from '../components/Main';
import GlobalStyle from '../styles'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <MainContainer />
    </Container>
  );
}

export default App;
