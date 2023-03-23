import { jogos } from './dadosUltimosJogos'
import styled from 'styled-components'
import { TituloUltimosJogos } from '../Titulo'


const UltimosJogosContainer = styled.section`
    background-color: #f89950;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosJogosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img{
    margin: 5px;
    }
`



function UltimosJogos(){
    return(
        <UltimosJogosContainer>
            {/*Testando props */}
            <TituloUltimosJogos fonte="36px">Ultimos Jogos Já Lançados</TituloUltimosJogos>
            {/*Colocando a cor como preto vai modificar a propriedade da cor do "TituloUltimosJogos" */}
            
            {/*Mostra todos os jogos já lançados */}
            <NovosJogosContainer>
                {jogos.map((jogo,index) => (
                    <img key={index} alt='jogos' src={jogo.src}></img>
                ))}
            </NovosJogosContainer>


           
            
        </UltimosJogosContainer>
    )
    
}

export default UltimosJogos