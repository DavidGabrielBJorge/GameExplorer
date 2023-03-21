import { jogos } from './dadosUltimosJogos'
import styled from 'styled-components'
import { TituloUltimosJogos } from '../Titulo'
import CardJogosRecomendados from '../CardJogosRecomendados'
import capaJogo from '../../imagens/jogo.jpg'

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
    margin: 10px;
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

            {/*Card com dados de um jogo*/}
            <CardJogosRecomendados 
                titulo="Gosta de dificuldade ?"
                subtitulo="Dark Souls"
                descricao="Jogo lançado em 2012 é um RPG de ação conhecido pela sua alta dificuldade"
                imagem={capaJogo}
                >

            </CardJogosRecomendados>

           
            
        </UltimosJogosContainer>
    )
    
}

export default UltimosJogos