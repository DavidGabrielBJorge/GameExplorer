import CardJogosRecomendados from '../CardJogosRecomendados'
import capaJogo from '../../imagens/jogo.jpg'
import capaJogo2 from '../../imagens/jogo2.jpg'
import capaJogo6 from '../../imagens/jogo6.jpg'
import capaJogo4 from '../../imagens/jogo4.jpg'
import styled from 'styled-components'

const Cards = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);

@media (max-width: 1300px) {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
}
`
function ContainerCard(){
    return(
        <Cards>
            {/*Card com dados de um jogo*/}
            <CardJogosRecomendados 
                    titulo="Gosta de dificuldade ?"
                    subtitulo="Dark Souls"
                    descricao="Jogo lançado em 2012 é um RPG de ação conhecido pela sua alta dificuldade."
                    imagem={capaJogo}>
            </CardJogosRecomendados>

            <CardJogosRecomendados 
                    titulo="Prefere jogos de luta ?"
                    subtitulo="Mortal Kombat 11"
                    descricao="Lançado em 2019, é um dos maiores jogos de luta lançados na década."
                    imagem={capaJogo2}>
            </CardJogosRecomendados>

            <CardJogosRecomendados 
                    titulo="Curte um jogo de tiro ?"
                    subtitulo="Battlefield 4"
                    descricao="Jogo publicado pela EA em 2013, junte-se com seus amigos em partidas de até 128 jogadores."
                    imagem={capaJogo6}>
            </CardJogosRecomendados>

            <CardJogosRecomendados 
                    titulo="Perde horas em RPG ?"
                    subtitulo="Biomutant"
                    descricao="Lançado em 2021, é um RPG que mistura artes marciais, armas e habilidades mutantes."
                    imagem={capaJogo4}>
            </CardJogosRecomendados>
        </Cards>
        

            
    )
}

export default ContainerCard;