import { jogos } from './dadosUltimosJogos'
import styled from 'styled-components'
import { TituloUltimosJogos } from '../Titulo'

const UltimosJogosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosJogosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`



function UltimosJogos(){
    return(
        <UltimosJogosContainer>
            <TituloUltimosJogos>Ultimos Jogos Já Lançados</TituloUltimosJogos>
            
            <NovosJogosContainer>
                {jogos.map((livro,index) => (
                    <img key={index} alt='jogos' src={livro.src}></img>
                ))}
            </NovosJogosContainer>
            
        </UltimosJogosContainer>
    )
    
}

export default UltimosJogos