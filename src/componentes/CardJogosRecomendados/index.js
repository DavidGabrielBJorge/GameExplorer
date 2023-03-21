import styled from "styled-components"
import { TituloUltimosJogos } from "../Titulo"
const Card = styled.div`
    align-items: center;
    background-color: #b4c4de;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
    margin-top:10px;

    @media (max-width: 1300px) {
        width: 280px;
        padding: 20px 20px;
    }
`

const Botao = styled.button`
    background-color: #f89950;
    color: #e7e7e9;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        transition: 1s;
        background-color: #050a0e;
        color:#e7e7e9;
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

    @media (max-width: 1300px) {
        font-size: 15px;
    }
`

const ImgJogo = styled.img`
    width: 150px;
`

function CardJogosRecomendados({titulo, subtitulo, descricao, imagem}){
    return(
        <Card>
            <div>
                <TituloUltimosJogos fonte="20px" background="#b4c4de" alinhamento="left">{titulo}</TituloUltimosJogos>
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