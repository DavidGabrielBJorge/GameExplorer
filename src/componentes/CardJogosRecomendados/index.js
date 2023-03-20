import styled from "styled-components"
import { TituloUltimosJogos } from "../Titulo"
const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgJogo = styled.img`
    width: 150px;
`

function CardJogosRecomendados({titulo, subtitulo, descricao, imagem}){
    return(
        <Card>
            <div>
                
                <TituloUltimosJogos fonte="16px" cor="#000" alinhamento="left">{titulo}</TituloUltimosJogos>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgJogo src={imagem}></ImgJogo>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardJogosRecomendados