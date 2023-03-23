import Header from './componentes/Header';
import Procurar from './componentes/Procurar';
import UltimosJogos from './componentes/UltimosJogos';
import BotaoRepositorio from './componentes/BotaoRepositorio';
import Footer from './componentes/Footer';
import styled from 'styled-components';
import ContainerCard from './componentes/ContainerCard';


/* Utilizando a bibioteca do "styled-components" para estilizar em JS em vez de CSS*/
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#f89950; !important

`
function App() {
  return (
    /* O "AppContainer" é um componente estilizado*/
    <AppContainer>
      <Header></Header>{/* Vai mostrar o menu*/}
      <Procurar></Procurar>
      <UltimosJogos></UltimosJogos>
      <BotaoRepositorio></BotaoRepositorio>
      <ContainerCard></ContainerCard>
      <Footer></Footer>
    </AppContainer>
  );
}

export default App;
