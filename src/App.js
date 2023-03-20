import Header from './componentes/Header';
import Procurar from './componentes/Procurar';
import UltimosJogos from './componentes/UltimosJogos';
import styled from 'styled-components';


/* Utilizando a bibioteca do "styled-components" para estilizar em JS em vez de CSS*/
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`
function App() {
  return (
    /* O "AppContainer" é um componente estilizado*/
    <AppContainer>
      <Header></Header>{/* Vai mostrar o menu*/}
      <Procurar></Procurar>
      <UltimosJogos></UltimosJogos>
    </AppContainer>
  );
}

export default App;
