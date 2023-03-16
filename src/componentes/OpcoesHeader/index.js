import styled from 'styled-components';

const Menu = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 18px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    height: 100%;
    padding: 0 5px;
`

const opcoes = ['Início', 'Sobre', 'Contato']

function OpcoesHeader(){
    return(
        <Menu>
            {opcoes.map( (texto, index) =>( 
                <Opcao key={index}>
                    <p>{texto}</p>
                </Opcao>
          ) )}
        </Menu>
         /*
         Foi usado o map para repetir a criacao do mesmo
         elemento, fazendo uma varredura no "opcoes", portanto 
         esse trecho de cógido estaria fazendo a mesma função que o mesmo
         a baixo: 
          <li className='opcao'><p>Início</p></li>
          <li className='opcao'><p>Sobre</p></li>
          <li className='opcao'><p>Contato</p></li>

          OBS: cada elemento deve ter um indexc diferente como regra do react
         */

    )
}

export default OpcoesHeader

/*
Estilização Anterior
<ul className='menu'>
            {opcoes.map( (texto, index) =>( 
                <li key={index}className='opcao'>
                    <p>{texto}</p>
                </li>
          ) )}
        </ul>
*/