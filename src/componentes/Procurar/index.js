import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { jogos } from './dadosProcura'

const ProcurarContainer = styled.section`
    background-color: #f89950;
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`
const Titulo = styled.h2`
    color: #050a0e;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
    color: #050a0e;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    color: #050a0e;
    
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Procurar(){
    const [jogosProcurados, setJogosProcurados] = useState([])//como livros é uma lista, deve começar com uma lista vazia
    //Declara o valor inicial do textoDigitado como null 

    return(
        <ProcurarContainer>
            <Titulo>Qual jogo deseja conhecer ?</Titulo>
            <Subtitulo>Pesquise em nossa galeria de jogos: </Subtitulo>
            <Input placeholder="Digite o nome do jogo" 
            onBlur={evento =>{
                const jogoDigitado = evento.target.value.trim();
                let resultadoJogos;
                if (jogoDigitado === ""){
                    //Ao digitar nada não vai mostrar nenhum jogo
                    resultadoJogos = []
                    setJogosProcurados(resultadoJogos)
                }else{
                    resultadoJogos = jogos.filter( jogo => jogo.nome.includes(jogoDigitado))
                    setJogosProcurados(resultadoJogos)
                }

            }}></Input>
            {/* onBlur é uma chamada para quando o usuário escreve e clica para fora vai acontecer uma ação, além disso ao dar um blur vai "setar" o textoDigitado*/}
            
            {/* Vai fazer uma varredura nos jogos e retornar o jogo prsquisado*/}
            {jogosProcurados.map((jogo, index) => (
                <Resultado key={index}>
                    <p>{jogo.nome}</p>
                    <img alt="Jogo"  src={jogo.src}></img>  
                </Resultado>
            ))}
        </ProcurarContainer>
    )
}

export default Procurar
/*Dentro da função de procurar o jogo vai usar include para pegar palavras incompletas porém que estão na lista,
por exemplo procura por call, vai retornar call of duty
*/