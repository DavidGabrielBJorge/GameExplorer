import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'

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
    const [textoDigitado, setTextoDigitado] = useState('')
    //Declara o valor inicial do textoDigitado como null 
    return(
        <ProcurarContainer>
            <Titulo>Sabe qual jogo deseja conhecer ?</Titulo>
            <Subtitulo>Pesquise em nossa galeria de jogos: </Subtitulo>
            <Input placeholder="Digite o nome do jogo" onBlur={evento =>setTextoDigitado(evento.target.value)}></Input>
            {/* onBlur é uma chamada para quando o usuário escreve e clica para fora, além disso ao dar um blur vai "setar" o textoDigitado*/}
            <p>{textoDigitado}</p>
        </ProcurarContainer>
    )
}

export default Procurar