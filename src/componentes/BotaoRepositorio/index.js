import styled from "styled-components";

const SecaoBotao = styled.section`
    height: 100px;
    background-color: #b4c4de;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #e7e7e9;
`

const Botao =styled.a`
    background-color: #f89950;
    width: 300px;
    margin: 0 auto;
    font-weight: 500;
    font-size: 1.5em;
    border: 1px solid #050a0e;
    border-radius: 10px;
    text-decoration: none !important;
    &:hover {
        transition: 1s;
        background-color: #050a0e;
        color:#e7e7e9;
    }

    @media (max-width: 1300px) {
        font-size: 1.2em;
        width: 30%;
    }
`
function BotaoRepositorio(){
    return(
        <SecaoBotao>
            <Botao href="https://github.com/DavidGabrielBJorge/GameExplorer">Clique aqui para ver o repositório</Botao>
        </SecaoBotao>
    )
}

export default BotaoRepositorio;