import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { jogos } from './dadosProcura'

const ProcurarContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
function Procurar(){
    const [jogosProcurados, setJogosProcurados] = useState([])//como livros é uma lista, deve começar com uma lista vazia
    //Declara o valor inicial do textoDigitado como null 

    return(
        <ProcurarContainer>
            <Titulo>Sabe qual jogo deseja conhecer ?</Titulo>
            <Subtitulo>Pesquise em nossa galeria de jogos: </Subtitulo>
            <Input placeholder="Digite o nome do jogo" 
            onBlur={evento =>{
                const jogoDigitado = evento.target.value
                const resultadoJogos=jogos.filter( livro => livro.nome.includes(jogoDigitado))
                setJogosProcurados(resultadoJogos)
            }}></Input>
            {/* onBlur é uma chamada para quando o usuário escreve e clica para fora vai acontecer uma ação, além disso ao dar um blur vai "setar" o textoDigitado*/}
            
            {/* Vai fazer uma varredura nos jogos e retornar o jogo prsquisado*/}
            {jogosProcurados.map(jogo => (
                <div>
                    <p>{jogo.nome}</p>
                    <img src={jogo.src}></img>  
                </div>
            ))}
        </ProcurarContainer>
    )
}

export default Procurar
/*Dentro da função de procurar o jogo vai usar include para pegar palavras incompletas porém que estão na lista,
por exemplo procura por call, vai retornar call of duty
*/